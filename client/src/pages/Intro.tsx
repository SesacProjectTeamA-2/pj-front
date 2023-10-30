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
                <div className="title3">뭔가 임팩트 꽂히는 기깔나는 문장</div>
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

            <div className="intro-img-wrapper-right">
                <div className="intro-story">
                    <div className="title3">MOTIMATE 이야기</div>
                    <div className="intro-content-sub-title">자세히 보기</div>
                </div>
                <div className="intro-img"></div>
            </div>
        </div>
    );
}
