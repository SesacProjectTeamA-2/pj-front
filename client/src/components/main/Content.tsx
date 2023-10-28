import React from 'react';
import Quotes from './Quotes';
import MainMission from './MainMission';
import MyPercentage from './MyPercentage';
import TeamPercentage from './TeamPercentage';

import '../../styles/scss/pages/main/percentage.scss';

export default function Content() {
    return (
        <div className="content-grid">
            <MainMission />
            <Quotes />
            <MyPercentage />
            <TeamPercentage />
        </div>
    );
}
