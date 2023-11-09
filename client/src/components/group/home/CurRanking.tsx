import React, { useEffect, useState } from 'react';
import Progressbar from '../../common/Progressbar';

export default function CurRanking({
    nowRanking,
    groupMember,
    nowScoreRanking,
    userImgSrc,
}: any) {
    // console.log('현재랭킹', nowRanking);
    // console.log('----킹', nowScoreRanking);

    return (
        <div className="wrapper">
            <div className="upper-content">
                <div className="title2">현재 랭킹</div>
                <div className="title6 group-home-duration">
                    {/* [추후] 몇회차인지 */}
                    {/* <div className="group-home-mission-round-text">5회차</div> */}
                    <div>
                        {/* [추후] 기간 데이터 연동 */}
                        {/* 2023.10.20-2023.10.30 */}
                    </div>
                </div>
            </div>
            <div className="main-content">
                <ul className="list-unstyled">
                    {nowRanking?.map((now: any, idx: number) => {
                        return (
                            <li>
                                <div className="ranking-list">
                                    <div>{idx + 1}</div>
                                    <img
                                        src={
                                            now.uImg ||
                                            // userImgSrc ||
                                            '/asset/images/user.svg'
                                        }
                                        alt="userImg"
                                    />

                                    <div className="cur-ranking-content">
                                        <div className="name">{now.uName}</div>

                                        <Progressbar
                                            score={nowScoreRanking[idx]}
                                            bg={'white'}
                                        />
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
