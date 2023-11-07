import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import SwiperComponent from '../../components/group/SwiperComponent';

export default function GroupList() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const [madeGroup, setMadeGroup] = useState([]);
    const [joinGroup, setJoinGroup] = useState([]);

    //] 생성한 모임
    const getMadeGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/made`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('>>>>>>>>>>>>>>>>>>>>', res.data);
                setMadeGroup(res.data.groupInfo);
            });
    };

    useEffect(() => {
        getMadeGroup();
    }, []);

    console.log(madeGroup);

    //] 참여한 모임
    const getJoinedGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/joined`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => console.log(res.data));
    };

    useEffect(() => {
        getJoinedGroup();
        console.log('madeGroup', madeGroup);
    }, []);

    return (
        <div>
            <div className="groups created">
                <div className="title1">내가 생성한 모임</div>
                <div>
                    {madeGroup.length > 0 ? (
                        <SwiperComponent
                            madeGroup={madeGroup}
                            setMadeGroup={setMadeGroup}
                        />
                    ) : (
                        '생성한 모임이 없습니다. '
                    )}
                </div>
            </div>

            <div className="groups join">
                <div className="title1">참여한 모임</div>

                {joinGroup.length > 0 ? (
                    <SwiperComponent
                        joinGroup={joinGroup}
                        setJoinGroup={setJoinGroup}
                    />
                ) : (
                    '가입한 모임이 없습니다. '
                )}

                {/* map 돌리기 - /:id 추가 */}
                {/* <Link to="/group/home/1">
                    <button>코딩학당</button>
                </Link> */}
            </div>

            <div className="groups recommend">
                <div className="title1">이런 모임 어떠세요 ?</div>
                <button>추천모임1</button>
            </div>

            <div className="btn-fixed-wrapper">
                <Link to="/group/create">
                    <button className="btn-fixed">내가 모임 만들기 !</button>
                </Link>
            </div>
        </div>
    );
}
