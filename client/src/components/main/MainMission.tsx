import React, { useEffect, useState } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../styles/scss/pages/main/mainmission.scss';

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
        <div className="content-grid-box">
            <div className="main-mission-div">
                <div className="title4">미션 달성하러 가볼까요?</div>
                {
                    <div>
                        <div className="title5">모임명</div>
                        <button className="btn-sm button mission-btn-to-group">
                            미션1
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}
