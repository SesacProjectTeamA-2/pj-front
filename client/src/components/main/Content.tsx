import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import Quotes from './Quotes';
import MainMission from './MainMission';
import MyPercentage from './MyPercentage';
import TeamPercentage from './TeamPercentage';

import '../../styles/scss/pages/main/percentage.scss';
import Progressbar from '../common/Progressbar';

export default function Content() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    // 프로필 사진 가져오기
    const [userImgSrc, setUserImgSrc] = useState<string>(
        '/asset/images/user.svg'
    );
    const getUserProfile = async () => {
        await axios
            .get(`${process.env.REACT_APP_DB_HOST}/user/mypage`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                const { userImg } = res.data;
                setUserImgSrc(userImg);
                console.log('userImgSrc ', userImgSrc);
            });
    };
    useEffect(() => {
        getUserProfile();
    }, []);

    //] 1. 유저 미션 조회
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
                    mainGroup,
                    groupInfo,
                    isDone,
                    groupArray,
                    doneRates,
                    nowScoreUserInfo,
                    nowRanking,
                    GroupRates,
                    uName,
                    uCharImg,
                } = res.data;

                setMissionArray(missionArray);
                setGroupInfo(groupInfo);
                setUName(uName);
                setCharImg(uCharImg);
                setIsDone(isDone);
                setDoneRates(doneRates);
                setGroupArray(groupArray);
                setNowScoreUserInfo(nowScoreUserInfo);
                setNowRanking(nowRanking);
                setGroupRates(GroupRates);
                setMainGroup(mainGroup);
            });
    };

    useEffect(() => {
        getMissionMain();
    }, []);

    const [uName, setUName] = useState('');
    const [mainGroup, setMainGroup] = useState('');
    const [uCharImg, setCharImg] = useState('');
    const [missionArray, setMissionArray] = useState([]);
    const [groupInfo, setGroupInfo] = useState<any>([]);
    const [groupArray, setGroupArray] = useState<any>([]);
    const [isDone, setIsDone] = useState([]);
    const [nowScoreUserInfo, setNowScoreUserInfo] = useState([]);
    const [nowRanking, setNowRanking] = useState([]);
    const [GroupRates, setGroupRates] = useState([]);
    const [doneRates, setDoneRates] = useState([]);
    console.log('nowScoreUserInfo', nowScoreUserInfo);
    console.log('nowRanking', nowRanking);
    console.log('GroupRates', GroupRates);
    console.log('doneRates', doneRates);
    // ] 2. 유저 가입 모임
    const getJoinedGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/joined`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('joined----', res.data);

                const { groupInfo } = res.data;

                setJoinGroupInfo(groupInfo);
            });
    };

    useEffect(() => {
        getJoinedGroup();
    }, []);

    // [추후] joinGroupInfo 정보 맞는지 재확인

    const [madeJoinInfo, setJoinGroupInfo] = useState<any>([]);

    //] 3. 유저 생성 모임
    const getMadeGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/made`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('made----', res.data);

                const { groupInfo } = res.data;

                setMadeGroupInfo(groupInfo);
            });
    };

    useEffect(() => {
        getMadeGroup();
    }, []);

    const [madeGroupInfo, setMadeGroupInfo] = useState<any>([]);

    // //] 4. 모임 상세정보 조회
    // const getGroupDeatil = async () => {
    //     const res = await axios
    //         .get(`${process.env.REACT_APP_DB_HOST}/group/made`, {
    //             headers: {
    //                 Authorization: `Bearer ${uToken}`,
    //             },
    //         })
    //         .then((res) => {
    //             console.log('detail----', res.data);

    //             const { groupInfo } = res.data;

    //             setMadeGroupInfo(groupInfo);
    //         });
    // };

    // useEffect(() => {
    //     getGroupDeatil();
    // }, []);

    return (
        <div className="content-grid">
            <Quotes />
            {/* 1. 명언 : 가로로 길게 */}

            <br />

            {/* 2. 달성률 : my, team */}
            <div className="content-grid-box">
                <div className="percentage-div">
                    <div className="title4">My 달성률 </div>
                    <div className="progress-img-flex">
                        <div className="progress-bar-div">
                            {groupArray.map((group: any, idx: number) => {
                                return (
                                    <div
                                        style={{
                                            display: 'flex',
                                            width: '100%',
                                        }}
                                    >
                                        <div>
                                            {/* [추후] tb_name 수정 */}
                                            {/* <div className="title5">{groupInfo}</div> */}
                                            {group.gName}
                                        </div>
                                        <div
                                            className="bar-container"
                                            style={{
                                                display: 'flex',
                                                width: '100%',
                                            }}
                                        >
                                            <Progressbar
                                                score={doneRates[idx]}
                                                bg={'#f3f3f3'}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
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

            <br />

            {/* Team 달성률 */}
            {/* [첨언] 시간 없으면 빼겠습니다. */}
            <div className="content-grid-box">
                <div className="percentage-div">
                    <div className="title4">Team 달성률</div>
                    {mainGroup ? (
                        <div>
                            {nowScoreUserInfo?.map((info: any, idx: number) => {
                                return (
                                    <>
                                        <div className="profile-img-div-flex">
                                            {info.uName}
                                        </div>
                                    </>
                                );
                            })}
                            {GroupRates?.map((mission: any, idx: number) => {
                                return (
                                    <div className="progress-bar-div">
                                        <Progressbar
                                            score={mission}
                                            bg={'#f3f3f3'}
                                        />
                                    </div>
                                );
                            })}
                            <div className="team-progress-img-div-flex">
                                <img
                                    src={userImgSrc}
                                    alt="프로필 이미지"
                                    className="profile-img"
                                />
                                <div className="title5">
                                    {groupArray[0].gName}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="title4">대표 모임을 설정해주세요</div>
                    )}
                    <div className="progress-img-flex">
                        <div className="progress-bar-div">
                            <div className="profile-img-div-flex">
                                {/* 멤버 리스트 동적 수정 */}
                                <img
                                    src={userImgSrc}
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br />

            <MainMission />
        </div>
    );
}
