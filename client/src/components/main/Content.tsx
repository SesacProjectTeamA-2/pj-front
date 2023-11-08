import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import Quotes from './Quotes';
import MainMission from './MainMission';
import MyPercentage from './MyPercentage';
import TeamPercentage from './TeamPercentage';

import '../../styles/scss/pages/main/percentage.scss';
import Progressbar from '../common/Progressbar';

export default function Content(props: any) {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    // 프로필 사진 , 명언 가져오기
    // -1) 프로필 사진
    const [userImgSrc, setUserImgSrc] = useState<string>(
        '/asset/images/user.svg'
    );

    // -2) 명언
    const [phraseCtt, setPhraseCtt] = useState<string | null>(null);

    // -3) 명언 지정 논리연산자
    //  데이터 가져와서 phrase null이 아니면 true로(자기 작성 모드) : Quotes 컨텐츠 가림
    //  null 이라면 false로 (명언 모드) : Quotes 컨텐츠 보임
    const [phraseModeSelf, setPhraseModeSelf] = useState<boolean>(false);

    const getUserData = async () => {
        await axios
            .get(`${process.env.REACT_APP_DB_HOST}/user/mypage`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                const { userImg, phrase } = res.data;
                console.log('CONTENT 이미지 / 지정 명언', userImg, phrase);
                if (userImg !== '0') {
                    // 업로드한 이미지 있으면
                    setUserImgSrc(userImg);
                }
                if (phrase) {
                    setPhraseModeSelf(true);
                    setPhraseCtt(phrase);
                    console.log('마이페이지 작성 => 가져온 명언', phraseCtt);
                    console.log('내가 쓴 명언인가 ? ', phraseModeSelf);
                }
                // console.log('userImgSrc 비로그인 시 기본 이미지 ', userImgSrc);
            });
    };
    useEffect(() => {
        if (cookie.get('isUser')) {
            getUserData();
            // console.log('CONTENT 비로그인');
        }
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
                console.log('유저 미션 조회 >> ', res.data);

                const {
                    missionArray,
                    groupInfo,
                    isDone,
                    doneRates,
                    uName,
                    uCharImg,
                } = res.data;

                setMissionArray(missionArray);
                setGroupInfo(groupInfo);
                setUName(uName);
                setCharImg(uCharImg);
                setIsDone(isDone);
                setDoneRates(doneRates);
            });
    };

    useEffect(() => {
        if (cookie.get('isUser')) {
            getMissionMain();
        }
    }, []);

    const [uName, setUName] = useState('');
    const [uCharImg, setCharImg] = useState('');
    const [missionArray, setMissionArray] = useState([]);
    const [groupInfo, setGroupInfo] = useState<any>([]);
    const [isDone, setIsDone] = useState([]);
    const [doneRates, setDoneRates] = useState([]);

    //] 2. 유저 가입 모임
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
        if (cookie.get('isUser')) {
            getJoinedGroup();
        }
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
        if (cookie.get('isUser')) {
            getMadeGroup();
        }
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
            <Quotes
                phraseCtt={phraseCtt}
                // setPhraseCtt={setPhraseCtt}
                // setPhraseModeSelf={setPhraseModeSelf}
                phraseModeSelf={phraseModeSelf}
            />
            {/* 1. 명언 : 가로로 길게 */}

            <br />

            {/* 2. 달성률 : my, team */}
            <div className="content-grid-box">
                <div className="percentage-div">
                    <div className="title4">My 달성률 </div>
                    <div className="progress-img-flex">
                        <div className="progress-bar-div">
                            {groupInfo.map((group: any, idx: number) => {
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
                                            {group.gSeq}
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

                    <div className="progress-img-flex">
                        <div className="progress-bar-div">
                            <div className="profile-img-div-flex">
                                {/* 멤버 리스트 동적 수정 */}
                                <img
                                    src={userImgSrc}
                                    alt="프로필 이미지"
                                    className="profile-img"
                                />
                                <img
                                    src={userImgSrc}
                                    alt="프로필 이미지"
                                    className="profile-img"
                                />
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

            <br />

            <MainMission />
        </div>
    );
}
