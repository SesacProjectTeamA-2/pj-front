//=== 모달용 멤버 리스트 ===
// 모임장 제외, 멤버 한 명 선택 가능

import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

export default function ModalMemberList({
    action,
    missionCancelDone,
    closeModalHandler,
    setChoiceModalSwitch,
}: any) {
    const { gSeq } = useParams();

    // interface MemberType {
    //     id: number;
    //     name: string;
    //     img: string;
    // }

    // const memberList: MemberType[] = [
    //     {
    //         id: 1,
    //         name: '멤버1',
    //         img: '/asset/images/sqr1.svg',
    //     },
    //     {
    //         id: 2,
    //         name: '멤버2',
    //         img: '/asset/images/sqr1.svg',
    //     },
    //     {
    //         id: 3,
    //         name: '멤버3',
    //         img: '/asset/images/sqr1.svg',
    //     },
    //     {
    //         id: 4,
    //         name: '멤버4',
    //         img: '/asset/images/sqr1.svg',
    //     },
    //     {
    //         id: 5,
    //         name: '멤버5',
    //         img: '/asset/images/sqr1.svg',
    //     },
    //     {
    //         id: 6,
    //         name: '멤버6',
    //         img: '/asset/images/sqr1.svg',
    //     },
    // ];
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const getGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setMissionArray(res.data.missionArray);
            });
    };

    useEffect(() => {
        getGroup();
    }, []);

    const [missionArray, setMissionArray] = useState<any>([]);
    // id 추가
    for (let i = 0; i < missionArray?.length; i++) {
        missionArray.id = i;
    }

    const [selectedMemberId, setSelectedMemberId] = useState(0);

    const listClickHandler = (id: number) => {
        setSelectedMemberId(id);
    };

    const doneHandler = () => {
        // alert(`${gName}을 ${action}하셨습니다 !`);
        alert(`${action}하셨습니다 !`);

        // [추후] 강제퇴장 멘트 작성

        setChoiceModalSwitch(false);
    };

    // // 모달창 닫기
    // const closeModalHandler = () => {
    //     setChoiceModalSwitch(false);
    // };

    return (
        <div className="modal-member-list-container">
            {/* 모임장 제외 멤버 리스트 */}
            {missionArray?.length > 0 ? (
                missionArray.map((member: any, idx: number) => {
                    return (
                        <div>
                            <ul className="list-unstyled modal-member-list-ul">
                                <label
                                    key={idx}
                                    onClick={() => listClickHandler(idx)}
                                    className="modal-member-list-label"
                                    style={{
                                        backgroundColor:
                                            action === '강제 퇴장' &&
                                            selectedMemberId === member.id
                                                ? '#e20606'
                                                : action === '미션인증 취소' &&
                                                  selectedMemberId === member.id
                                                ? '#e20606'
                                                : action ===
                                                      '모임장 권한 넘기기' &&
                                                  selectedMemberId === member.id
                                                ? '#ed8d8d'
                                                : 'white',

                                        color:
                                            selectedMemberId === member.id
                                                ? 'white'
                                                : 'black',

                                        cursor: 'pointer',
                                    }}
                                >
                                    <input
                                        className="mission-cancel-modal-memeber-input"
                                        type="radio"
                                        name="missionType"
                                    />
                                    <div className="ranking-list">
                                        <img src={member.uImg} />
                                        <div className="cur-ranking-content">
                                            <div className="title4">
                                                {member.uImg}
                                            </div>
                                        </div>
                                    </div>
                                </label>
                            </ul>
                            <div>
                                <Box
                                    component="form"
                                    sx={{
                                        '& .MuiTextField-root': {
                                            width: '67ch',
                                        },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField
                                        id="filled-multiline-flexible"
                                        label="이유가 무엇인가요 ?"
                                        multiline
                                        maxRows={4}
                                        variant="filled"
                                    />
                                </Box>
                            </div>

                            <div className="mission-cancel-btn-container">
                                {action === '미션인증 취소' ? (
                                    <button
                                        onClick={missionCancelDone}
                                        className="btn-md mission-cancel-done-btn"
                                    >
                                        {action}
                                    </button>
                                ) : action === '모임장 권한 넘기기' ? (
                                    <button
                                        onClick={missionCancelDone}
                                        className="btn-md mission-cancel-done-btn"
                                    >
                                        {action}
                                    </button>
                                ) : action === '강제 퇴장' ? (
                                    <button
                                        onClick={missionCancelDone}
                                        className="btn-md mission-cancel-done-btn"
                                    >
                                        {action}
                                    </button>
                                ) : (
                                    ''
                                )}
                                <button
                                    onClick={closeModalHandler}
                                    className="btn-md mission-cancel-back-btn"
                                >
                                    돌아가기
                                </button>
                            </div>
                        </div>
                    );
                })
            ) : (
                <>
                    <div
                        className="title2"
                        style={{
                            height: '14rem',
                            margin: 'auto',
                            // textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        멤버가 없습니다.
                    </div>
                    <div className="mission-cancel-btn-container">
                        <button
                            onClick={closeModalHandler}
                            className="btn-md mission-cancel-back-btn"
                        >
                            돌아가기
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
