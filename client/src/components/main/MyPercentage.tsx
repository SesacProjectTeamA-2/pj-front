import React from 'react';

export default function MyPercentage() {
    return (
        <div className="content-grid-box">
            <div className="percentage-div">
                <div className="title4">My 달성률 </div>
                <div className="progress-img-flex">
                    <div className="progress-bar-div">
                        <div>
                            <div className="title5">코딩학당</div>
                            <div className="title5">근손실방지</div>
                        </div>
                        <div className="progress-bar-flex">
                            <div>
                                <div className="progress-div">
                                    <div className="my-progress">
                                        <div className="my-bar-one"></div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="progress-div">
                                    <div className="my-progress">
                                        <div className="my-bar-two"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/asset/images/sqr1.svg"
                            alt="동물 이미지"
                            className="my-progress-img"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
