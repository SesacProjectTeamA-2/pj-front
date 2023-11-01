import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/scss/pages/intro.scss';

export default function Intro() {
    return (
        <div className="section intro-container">
            <div className="intro-header">
                <div className="video-container">
                    <video autoPlay loop>
                        <source src="/asset/test.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="intro-title title1">
                    <div>We</div>
                    <div>Grow</div>
                    <div>Together</div>
                    <div className="sub-title title5">
                        함께 성장하며 가치를 공유합니다.
                    </div>
                </div>
            </div>
            <div className="intro-content">
                <div className="title3">손쉽게 모임을 시작해보세요.</div>
                <div className="intro-content-sub-title">
                    나와 관심사가 비슷한 사람들과 함께 즐겁게 성장하세요 !
                </div>
            </div>
            <div className="intro-img-wrapper-left">
                <div className="intro-img"></div>
                <div className="intro-story">
                    <Link to="https://polydactyl-cello-2db.notion.site/2nd-team-a-b9e8f682bbc2439991fe70b074381f32?pvs=4">
                        <div className="title3">MOTIMATE 이야기</div>
                        <div className="intro-content-sub-title">
                            자세히 보기
                            <img
                                className="intro-right-double-icon"
                                src="/asset/icons/right_double.svg"
                                alt="right-double"
                            />
                        </div>
                    </Link>
                </div>
            </div>
            <div className="intro-content">
                <div className="title3">
                    여러분의 동료, <br />
                    MOTIMATE를 소개합니다 !
                </div>
                <div className="intro-content-sub-title">
                    동료들과 으쌰으쌰하며, 다같이 목표를 이뤄나가요 !
                </div>
            </div>

            <div className="intro-img-wrapper-right">
                <div className="intro-story">
                    <div className="title3">
                        랭킹 시스템을 통한 <br />
                        동기부여
                    </div>
                    <div className="intro-content-sub-title">
                        혼자하면서 금방 지치지 않으셨나요 ?
                        <br />
                        잠자고 있던 여러분의 승부욕을 불태울 시간입니다.🔥
                        <br />
                        여러분의 현실게임 캐릭터인 모티메이트 랭킹을 올립시다.
                    </div>
                </div>
                <div className="intro-img"></div>
            </div>

            <div className="intro-img-wrapper-left">
                <div className="intro-img"></div>
                <div className="intro-story">
                    <Link to="https://polydactyl-cello-2db.notion.site/2nd-team-a-b9e8f682bbc2439991fe70b074381f32?pvs=4">
                        <div className="title3">채팅 시스템</div>
                        <div className="intro-content-sub-title">
                            실시간으로 동료들과 이야기를 나눠요 !
                        </div>
                    </Link>
                </div>
            </div>

            <div className="intro-img-wrapper-right">
                <div className="intro-story">
                    <div className="title3">열띤 토론을 즐겨요</div>
                    <div className="intro-content-sub-title">
                        동료들과 의견을 주고 받으며,
                        <br />
                        새로운 인사이트를 서로 얻어가요.
                    </div>
                </div>
                <div className="intro-img"></div>
            </div>

            <div className="intro-img-wrapper-left">
                <div className="intro-img"></div>
                <div className="intro-story">
                    <Link to="https://polydactyl-cello-2db.notion.site/2nd-team-a-b9e8f682bbc2439991fe70b074381f32?pvs=4">
                        <div className="title3">마감기한 설정</div>
                        <div className="intro-content-sub-title">
                            데드라인이 있어야, 달릴 맛이 나죠 !
                            <br />
                            모임별 디데이를 향해 다같이 나아가요 🏃🏻‍♂️
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
