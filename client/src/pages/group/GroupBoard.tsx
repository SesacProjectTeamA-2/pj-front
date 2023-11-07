import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';

import '../../styles/scss/pages/group/groupPostList.scss';

import GroupHeader from '../../components/group/content/GroupHeader';
import GroupContent from '../../components/group/content/GroupContentList';

export default function GroupBoard() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq, gCategory } = useParams();

    const getGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);

                setGName(res.data.groupName);
            });
    };

    useEffect(() => {
        getGroup();
    }, []);

    const [gName, setGName] = useState('');

    //  //] 2. 자유 게시글 조회
    //  const getBoardFree = async () => {
    //     const res = await axios.get(
    //         `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/free`,
    //         {
    //             headers: {
    //                 Authorization: `Bearer ${uToken}`,
    //             },
    //         }
    //     );

    //     console.log(res.data);

    //     setNoticeList(res.data.groupInfo);
    // };

    // useEffect(() => {
    //     getBoardFree();
    // }, []);

    return (
        <div className="section section-group">
            {/* [추후] 모임 제목 동적으로 수정 */}
            <GroupHeader title={'자유/질문'} groupName={gName} />
            <GroupContent action={'자유/질문'} />
            <div>
                <Link to={`/board/create/${gSeq}/free`}>
                    <img src="/asset/icons/plus.svg" className="plus-fixed" />
                </Link>
            </div>
        </div>
    );
}
