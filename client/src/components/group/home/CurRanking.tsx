import React from 'react';
import Progressbar from '../../common/Progressbar';

export default function CurRanking() {
    return (
        <div className="wrapper">
            <div className="upper-content">
                <div className="title2">현재 랭킹</div>
                <div className="title6 group-home-duration">
                    {/* 동적 수정 */}
                    <div className="group-home-mission-round-text">5회차</div>
                    <div>
                        {/* [추후] 기간 데이터 연동 */}
                        2023.10.20-2023.10.30
                    </div>
                </div>
            </div>
            <div className="main-content">
                <ul className="list-unstyled">
                    <li>
                        <div className="ranking-list">
                            <div>1</div>
                            <img src="/asset/images/sqr1.svg" />

                            <div className="cur-ranking-content">
                                <div>닉네임</div>
                                <Progressbar />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="ranking-list">
                            <div>1</div>
                            <img src="/asset/images/sqr1.svg" />

                            <div className="cur-ranking-content">
                                <div>닉네임</div>
                                <Progressbar />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="ranking-list">
                            <div>1</div>
                            <img src="/asset/images/sqr1.svg" />

                            <div className="cur-ranking-content">
                                <div>닉네임</div>
                                <Progressbar />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="ranking-list">
                            <div>1</div>
                            <img src="/asset/images/sqr1.svg" />

                            <div className="cur-ranking-content">
                                <div>닉네임</div>
                                <Progressbar />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="ranking-list">
                            <div>1</div>
                            <img src="/asset/images/sqr1.svg" />

                            <div className="cur-ranking-content">
                                <div>닉네임</div>
                                <Progressbar />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
