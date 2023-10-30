import React, { useState } from 'react';
import MissionAddModal from '../../common/modal/MissionAddModal';

export default function HomeMissionList() {
    const [addModalSwitch, setAddModalSwitch] = useState(false);
    const missionAddHandler = () => {
        setAddModalSwitch(true);
    };

    return (
        <div className="wrapper">
            <div className="upper-content">
                <div className="upper-content-wrapper">
                    <div className="title2">진행 중인 미션</div>

                    {/* 모임장만 보임 */}
                    <div onClick={missionAddHandler}>
                        <div className="title5 mission-edit">수정하기</div>
                    </div>
                    {addModalSwitch ? (
                        <MissionAddModal
                            addModalSwitch={addModalSwitch}
                            setAddModalSwitch={setAddModalSwitch}
                        />
                    ) : null}
                </div>
                <div className="title2">D-3</div>
            </div>
            <div className="main-content">
                <ul>
                    <li className="mission-li">
                        <div className="mission-element">알고리즘</div>
                        <div>인증방법은 문제를 풀고 코드를 제출해주세요 !</div>
                    </li>
                    <li className="mission-li">
                        <div className="mission-element">블로깅</div>
                        <div>인증방법을 적어주세요 !</div>
                    </li>
                    <li className="mission-li">
                        <div className="mission-element">모각코</div>
                        <div>인증방법을 적어주세요 !</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
