import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import InfiniteScroll from 'react-infinite-scroller';
import axios from 'axios';

import GroupContentFooter from './GroupContentFooter';

//=== 공통 컴포넌트 ===
//-- 1. GroupBoard.tsx
// action={"자유게시글"}

//-- 2. GroupMission.tsx
// action={"미션게시글"}

export default function GroupContent({ action }: any) {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq, mSeq } = useParams();

    //] 1. 자유게시글
    const [freeList, setFreeList] = useState([]);

    // 자유 게시글 조회
    useEffect(() => {
        const getBoardFree = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/free`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            );

            console.log(res.data);

            setFreeList(res.data.groupInfo);
        };

        getBoardFree();
    }, []);

    console.log(freeList);

    //     {
    //   "gbSeq": 1,
    //   "gbTitle": "게시글 제목입니다",
    //   "gbContent": "게시글 내용입니다",
    //   "gbIsDone": "y",
    //   "gbCategory": "notice",
    //   "createdAt": "2023-10-28",
    //   "updatedAt": "2023-10-28"
    // }

    //] 2. 미션게시글
    const [missionList, setMissionList] = useState([]);

    // 미션 게시글 조회
    useEffect(() => {
        const getBoardMission = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/mission/${mSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            );

            console.log(res.data);

            setMissionList(res.data.groupInfo);
        };

        getBoardMission();
    }, []);

    return (
        <div className="noti-container post-list-container">
            <ul>
                {action === '자유/질문' ? (
                    <>
                        {/* 1. 자유게시글 */}

                        {freeList.map((free: any, idx: number) => {
                            return (
                                <li key={idx}>
                                    {/* [ START ] */}
                                    <Link
                                        to={`/board/${gSeq}/free/${free.gbSeq}`}
                                    >
                                        <div className="post-list-content">
                                            <div className="post-list-header">
                                                <div className="post-list-title">
                                                    {/* 프로필 이미지 */}
                                                    <img
                                                        className="profile-img"
                                                        src="/asset/images/sqr1.svg"
                                                        alt="profile"
                                                    />

                                                    <div className="title4 cursor">
                                                        {free.gbTitle}
                                                    </div>
                                                </div>
                                                <div className="post-list-date">
                                                    {free.createdAt}
                                                </div>
                                            </div>
                                            <div className="post-list-main cursor">
                                                {free.gbContent}
                                            </div>

                                            <GroupContentFooter />
                                        </div>
                                    </Link>
                                    {/* [ END ] */}
                                </li>
                            );
                        })}
                    </>
                ) : (
                    <>
                        {/* 2. 미션게시글 */}

                        {missionList.map((mission: any, idx: number) => {
                            return (
                                <Link
                                    to={`/board/${gSeq}/mission/${mSeq}/${mSeq}`}
                                >
                                    {/* [ START ] */}
                                    <li>
                                        <div className="post-list-content">
                                            <div className="post-list-header">
                                                <div className="post-list-title">
                                                    {/* 프로필 이미지 */}
                                                    <img
                                                        className="profile-img"
                                                        src="/asset/images/sqr1.svg"
                                                        alt="profile"
                                                    />

                                                    {/* [추후] 작성자도 넣을지 말지 ? */}
                                                    {/* <div>달려라하니</div> */}

                                                    <div className="title4 cursor">
                                                        {mission.gbTitle}
                                                    </div>
                                                </div>
                                                <div className="post-list-date">
                                                    {mission.createdAt}
                                                </div>
                                            </div>
                                            <div className="post-list-main cursor">
                                                {mission.gbContent}
                                            </div>

                                            <GroupContentFooter />
                                        </div>
                                    </li>
                                    {/* [ END ] */}
                                </Link>
                            );
                        })}
                    </>
                )}
            </ul>
        </div>
    );
}
