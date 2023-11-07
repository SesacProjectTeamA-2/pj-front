import React from 'react';

export default function AccRanking({ totalRanking, totalScoreRanking }: any) {
    console.log('전체 랭킹', totalRanking);
    console.log('totalScoreRanking', totalScoreRanking);

    return (
        <div className="wrapper">
            <div className="upper-content">
                <div className="title2">누적 랭킹</div>
                <div className="title6 group-home-duration">
                    {/* [추후] 기간 데이터 연동 */}
                    {/* 2023.09.30-2023.10.30 */}
                </div>
            </div>
            <div className="main-content">
                <ul className="list-unstyled">
                    {totalRanking.map((total: any, idx: number) => {
                        return (
                            <li>
                                <div className="ranking-list">
                                    <div>{idx + 1}</div>
                                    <img src={`${total.uImg}`} />
                                    <div className="name">{total.uName}</div>
                                    <div className="cur-ranking-content">
                                        <div className="score">
                                            {totalScoreRanking[idx].guNowScore}
                                        </div>
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
