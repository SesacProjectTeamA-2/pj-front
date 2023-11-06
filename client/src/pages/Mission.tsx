import React, { useState, useEffect } from 'react';
import MissionList from '../components/mission/MissionList';
import Face from '../components/mission/Face';

import axios from 'axios';

import '../styles/scss/components/titles.scss';
import '../styles/scss/components/buttons.scss';

export default function Mission() {
    // console.log(process.env.REACT_APP_DB_HOST);

    const [missionItems, setMissionItems] = useState([]);

    useEffect(() => {
        const getMissions = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_DB_HOST}/user`
            );
            console.log(res.data);

            setMissionItems(res.data);
        };
    });

    return (
        <div>
            <div className="section">
                <div className="mission-all-container">
                    <h1>달려라하니님(유저 아이디 들어가야), 반가워요👋🏻</h1>
                    <div className="list-face">
                        <MissionList />
                        <Face />
                    </div>
                </div>
            </div>
        </div>
    );
}
