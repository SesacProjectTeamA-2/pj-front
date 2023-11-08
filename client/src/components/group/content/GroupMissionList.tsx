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

export default function GroupMissionList({
    action,
    missionList,
    groupDetail,
    missionBoard,
}: any) {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq, mSeq, gCategory } = useParams();

    //] 2. 미션게시글
    // const [missionList, setMissionList] = useState([]);

    // 미션 게시글 조회
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

        // setMissionList(res.data.groupInfo);
    };

    console.log(']]]]]]]]]]]', missionList);
    console.log('+++++++', groupDetail);
    console.log('>>>>>>>>', missionBoard);

    useEffect(() => {
        getBoardMission();
    }, []);

    return (
        <div className="noti-container post-list-container">
            <ul>
                {missionBoard?.length <= 0
                    ? '작성된 미션 인증글이 없습니다. '
                    : missionBoard?.map((mission: any, idx: number) => {
                          return (
                              <Link
                                  to={`/board/${gSeq}/mission/${mSeq}/${mission.gbSeq}`}
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

                                                  <div
                                                      className="title4 cursor"
                                                      dangerouslySetInnerHTML={{
                                                          __html: mission.gbTitle,
                                                      }}
                                                  />
                                              </div>
                                              <div className="post-list-date">
                                                  {mission.createdAt}
                                              </div>
                                          </div>

                                          <div
                                              className="post-list-main cursor"
                                              dangerouslySetInnerHTML={{
                                                  __html: mission.gbContent,
                                              }}
                                          />

                                          <GroupContentFooter
                                              commentCount={
                                                  mission.commentCount
                                              }
                                          />
                                      </div>
                                  </li>
                                  {/* [ END ] */}
                              </Link>
                          );
                      })}
            </ul>
        </div>
    );
}
