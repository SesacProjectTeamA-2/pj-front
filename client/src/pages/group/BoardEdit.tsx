//=== 공지 / 자유 게시글 수정 ===

import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import Editor from './Editor';

import GroupHeader from '../../components/group/content/GroupHeader';
import { MissionType } from 'src/types/types';
import { Input } from '@mui/material';
import SuccessModal from 'src/components/common/modal/SucessModal';
import WarningModal from 'src/components/common/modal/WarningModal';

export default function BoardEdit() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq, mSeq, gbSeq, gCategory } = useParams();

    console.log(gSeq, mSeq, gbSeq, gCategory);

    //] 게시글 수정 완료 모달창
    const [successModalSwitch, setSuccessModalSwitch] = useState(false);

    const successHandler = () => {
        setSuccessModalSwitch(true);
    };

    //] 게시글 상세조회

    const getBoardNoti = async () => {
        const res = await axios
            .get(
                `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/${gCategory}/${gbSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                console.log('getBoardNoti=======', res.data);
                // console.log(
                //     'userInfo',
                //     res.data.groupInfo.tb_groupUser.tb_user
                // );

                setFreeList(res.data.groupInfo);

                const { gbTitle, gbContent } = res.data.groupInfo;

                setBoard({
                    gbTitle,
                    gbContent,
                });
            });
    };

    useEffect(() => {
        getBoardNoti();
    }, []);

    const [userInfo, SetUserInfo] = useState<any>([]);
    const [freeList, setFreeList] = useState<any>([]);

    const [board, setBoard] = useState<any>({
        gbSeq: Number(gbSeq),
        gbTitle: '',
        gbContent: '',
    });

    // const [selected, setSelected] = useState<string>('');

    //gbTitle state 관리
    const getValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setBoard({
            ...board,
            [name]: value,
        });

        // console.log(board);
        // console.log(name, value);
    };

    //gbContent관리
    const handleEditorChange = (value: string) => {
        setBoard({
            ...board,
            gbContent: value, // 에디터의 내용을 업데이트
        });
        // console.log(board);
    };

    // 게시물 edit
    const boardEditHandler = async () => {
        const res = await axios
            .patch(
                `${process.env.REACT_APP_DB_HOST}/board/edit/${gbSeq}`,
                board,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                console.log(res);
                successHandler();
            });

        // [추후] input 입력 안했을 시, 로직

        // [추후] 수정한 모임 홈 화면으로 이동
    };

    console.log(board);

    const [postMenu, setPostMenu] = useState(gCategory);

    useEffect(() => {
        setPostMenu(gCategory);
    }, []);

    if (postMenu === 'notice') {
        setPostMenu('공지사항');
    } else if (postMenu === 'free') {
        setPostMenu('자유/질문');
    }

    console.log('oooo', postMenu);

    return (
        <div className="section section-group">
            {/* [추후] title 값 넘겨 받기 ! */}
            {/* params 가져와서 : free */}
            <GroupHeader title={postMenu} groupName={''} />
            <div className="post-container">
                <div className="noti-content post-header title5">
                    <div className="post-title">
                        <div>제목</div>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요."
                            onChange={getValue}
                            name="gbTitle"
                            required
                            value={board.gbTitle}
                        />
                    </div>
                </div>
                <div>
                    <Editor
                        value={board.gbContent}
                        onChange={handleEditorChange}
                    />
                </div>
            </div>
            <SuccessModal
                successModalSwitch={successModalSwitch}
                setSuccessModalSwitch={setSuccessModalSwitch}
                action={'게시글을 수정'}
                gSeq={gSeq}
                gCategory={gCategory}
                gbSeq={gbSeq}
            />

            <div>
                {/* default : + 누른 페이지 */}
                {/* <Link to="/group/noti/1"> */}
                <button className="editor-post-btn" onClick={boardEditHandler}>
                    작성 완료
                </button>
                {/* </Link> */}
            </div>
        </div>
    );
}
