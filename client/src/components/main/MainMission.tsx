import React from 'react';
import '../../styles/scss/pages/main/mainmission.scss';

export default function MainMission() {
    return (
        <div className="content-grid-box">
            <div className="main-mission-div">
                <div className="title4">미션 달성하러 가볼까요?</div>
                <div>
                    <button className="btn-sm button mission-btn-to-group">
                        모각코
                    </button>
                    <button className="btn-sm button mission-btn-to-group">
                        헬스장
                    </button>
                </div>
            </div>
        </div>
    );
}
