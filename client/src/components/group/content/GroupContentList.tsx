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

    const { gSeq, mSeq, gCategory } = useParams();

    console.log(' gSeq, mSeq, gCategory', gSeq, mSeq, gCategory);

    //] 1. 자유게시글
    const [freeList, setFreeList] = useState<any>([]);
    const [commentCount, setCommentCount] = useState(0);

    // 자유 게시글 조회
    const getBoardFree = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/board/${gSeq}/free`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('자유게시글');
                console.log('---', res.data.groupInfo);

                setFreeList(res.data.groupInfo);
            });

        // setCommentCount(res.data.groupInfo);
    };

    useEffect(() => {
        getBoardFree();
    }, []);

    // console.log('---------', freeList);
    // console.log('>>>>>>>>>>', commentCount);

    //     {
    //   "gbSeq": 1,
    //   "gbTitle": "게시글 제목입니다",
    //   "gbContent": "게시글 내용입니다",
    //   "gbIsDone": "y",
    //   "gbCategory": "notice",
    //   "createdAt": "2023-10-28",
    //   "updatedAt": "2023-10-28"
    // }

    // //] 2. 미션게시글
    const [missionList, setMissionList] = useState([]);

    // 미션 게시글 조회
    if (mSeq) {
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
    }
    useEffect(() => {}, []);

    return (
        <div className="noti-container post-list-container">
            <ul>
                <>
                    {/* 1. 자유게시글 */}

                    {freeList.length <= 0
                        ? '작성된 게시물이 없습니다.'
                        : freeList.map((free: any, idx: number) => {
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
                                                      {/* [추후] 동적으로 수정 */}
                                                      <img
                                                          className="profile-img"
                                                          src="/asset/images/sqr1.svg"
                                                          alt="profile"
                                                      />

                                                      <div
                                                          className="title4 cursor"
                                                          dangerouslySetInnerHTML={{
                                                              __html: free.gbTitle,
                                                          }}
                                                      />
                                                  </div>
                                                  <div className="post-list-date">
                                                      {free.createdAt}
                                                  </div>
                                              </div>
                                              <div
                                                  className="post-list-main cursor"
                                                  dangerouslySetInnerHTML={{
                                                      __html: free.gbContent,
                                                  }}
                                              />

                                              <GroupContentFooter
                                                  commentCount={
                                                      free.commentCount
                                                  }
                                              />
                                          </div>
                                      </Link>
                                      {/* [ END ] */}
                                  </li>
                              );
                          })}
                </>
            </ul>
        </div>
    );
}
