import React from 'react';
import MissionList from '../components/mission/MissionList';
import Face from '../components/mission/Face';

import '../styles/scss/components/titles.scss';
import '../styles/scss/components/buttons.scss';

export default function Mission() {
    return (
        <div>
            <div className="section">
                <h1>달려라하니님(유저 아이디 들어가야), 반가워요👋🏻</h1>
                <div className="list-face">
                    <MissionList />
                    <Face />
                </div>
            </div>
        </div>
    );
}
