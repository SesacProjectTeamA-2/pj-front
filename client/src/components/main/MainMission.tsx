import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../styles/scss/pages/main/mainmission.scss';
import { Link } from 'react-router-dom';

export default function MainMission() {
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

                const { missionArray, groupArray, uName, uCharImg } = res.data;
                console.log('미션어레이>>>>>>>', missionArray);
                setMissionArray(missionArray);
                setGroupInfo(groupArray);
                setUName(uName);
                setCharImg(uCharImg);
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
    const [groupArray, setGroupInfo] = useState<any>([]);

    console.log(missionArray);

    // const getGrouopMain = async () => {
    //     const res = await axios
    //         .get(`${process.env.REACT_APP_DB_HOST}/group/joined`, {
    //             headers: {
    //                 Authorization: `Bearer ${uToken}`,
    //             },
    //         })
    //         .then((res) => {
    //             console.log('::::', res.data);

    //             const { missionArray, groupArray, uName, uCharImg } = res.data;
    //             console.log('미션어레이>>>>>>>', missionArray);
    //             // setMissionArray(missionArray);
    //             // setGroupInfo(groupArray);
    //             // setUName(uName);
    //             // setCharImg(uCharImg);
    //         });
    // };

    // useEffect(() => {
    //     if (cookie.get('isUser')) {
    //         getGrouopMain();
    //     }
    // }, []);

    return (
        <div className="content-grid-box">
            <div className="main-mission-div">
                <div className="title4">미션 달성하러 가볼까요?</div>
                {missionArray.length > 0 ? (
                    <div>
                        {groupArray?.map((info: any, idx: number) => {
                            return (
                                <div>
                                    <div>{info.gName}</div>
                                    {missionArray?.map(
                                        (mission: any, idx: number) => {
                                            return (
                                                <div>
                                                    <Link
                                                        to={`/board/${mission.gSeq}/mission/${mission.mSeq}`}
                                                    >
                                                        <button className="btn-sm button mission-btn-to-group">
                                                            {mission?.mTitle}
                                                        </button>
                                                    </Link>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="title5">해야할 미션이 없어요</div>
                )}
            </div>
        </div>
    );
}
