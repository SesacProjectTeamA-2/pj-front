import React, { useEffect, useState } from 'react';
import Progressbar from '../../common/Progressbar';

export default function CurRanking({
    nowRanking,
    groupMember,
    nowScoreRanking,
}: any) {
    console.log('현재랭킹', nowRanking);

    console.log('현재랭킹유저', nowNameRanking);


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
                    {/* 현재 랭킹 리스트 */}
                    {/* {uSeqList.map((now: any, idx: number) => {
                        return (
                            <li>
                                <div className="ranking-list">
                                    <div>{nowUserRanking}</div>
                                    <img src="/asset/images/sqr1.svg" />

                                    <div className="cur-ranking-content">
                                        <div>{nowNameRanking}</div>
                                        <Progressbar />
                                    </div>
                                </div>
                            </li>
                        );
                    })} */}
                    {nowRanking.map((now: any, idx: number) => {
                        return (
                            <li>
                                <div className="ranking-list">
                                    <div>{idx + 1}</div>
                                    <img src="/asset/images/sqr1.svg" />

                                    <div className="cur-ranking-content">
                                        <div>{now.uName}</div>

                                        <Progressbar
                                            score={nowScoreRanking[idx]}
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
