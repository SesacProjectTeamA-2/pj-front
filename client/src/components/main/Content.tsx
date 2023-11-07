import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import Quotes from './Quotes';
import MainMission from './MainMission';
import MyPercentage from './MyPercentage';
import TeamPercentage from './TeamPercentage';

import '../../styles/scss/pages/main/percentage.scss';

export default function Content() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const getMissionMain = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/mission/user`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);

                const {
                    missionArray,
                    groupInfo,
                    isDone,
                    doneRates,
                    uName,
                    uCharImg,
                } = res.data;

                setMissionArray(missionArray);
                setMissionArray(groupInfo);
                setUName(uName);
                setCharImg(uCharImg);
            });
    };

    useEffect(() => {
        getMissionMain();
    }, []);

    const [uName, setUName] = useState('');
    const [uCharImg, setCharImg] = useState('');
    const [missionArray, setMissionArray] = useState([]);
    const [groupInfo, setGroupInfo] = useState([]);

    return (
        <div className="content-grid">
            <Quotes />
            {/* 1. 명언 : 가로로 길게 */}
            {/* 2. 달성률 : my, team */}
            <div className="content-grid-box">
                <div className="percentage-div">
                    <div className="title4">My 달성률 </div>
                    <div className="progress-img-flex">
                        <div className="progress-bar-div">
                            <div>
                                {/* [추후] tb_name 수정 */}
                                {/* <div className="title5">{groupInfo}</div> */}
                            </div>

                            {/* [추후] score 받아와서 반영 */}
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
                                src={`${uCharImg}`}
                                alt="동물 이미지"
                                className="my-progress-img"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* 팀 달성률 */}
            <div className="content-grid-box">
                <div className="percentage-div">
                    <div className="title4">Team 달성률</div>
                    <div className="progress-img-flex">
                        <div className="progress-bar-div">
                            <div className="profile-img-div-flex">
                                {/* 멤버 리스트 동적 수정 */}
                                <img
                                    src="/asset/images/user.svg"
                                    alt="프로필 이미지"
                                    className="profile-img"
                                />
                                <img
                                    src="/asset/images/user.svg"
                                    alt="프로필 이미지"
                                    className="profile-img"
                                />
                                <img
                                    src="/asset/images/user.svg"
                                    alt="프로필 이미지"
                                    className="profile-img"
                                />
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
                                <div>
                                    <div className="progress-div">
                                        <div className="my-progress">
                                            <div className="my-bar-two"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-progress-img-div-flex">
                            <img
                                src="/asset/images/rabbit1.svg"
                                alt="동물 이미지"
                                className="my-progress-img"
                            />
                            <div className="title5">근손실방지</div>
                        </div>
                    </div>
                </div>
            </div>
            <MainMission />
        </div>
    );
}
