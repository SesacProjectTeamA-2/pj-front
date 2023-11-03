import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
    MissionListType,
    MissionStateType,
    MissionType,
    RootStateType,
} from '../../../types/types';
import MissionAddModal from '../../common/modal/MissionAddModal';

import useDdayCount from '../../../hooks/useDdayCount';

export default function HomeMissionList() {
    const [addModalSwitch, setAddModalSwitch] = useState(false);
    const missionAddHandler = () => {
        setAddModalSwitch(true);
    };

    //=== redux 상태관리 ===
    const dummyGroupState = useSelector(
        (state: RootStateType) => state.dummyGroup
    );

    const missionList = useSelector(
        (state: RootStateType) => state.dummyGroup.missionArray
    );

    // interface MissionType {
    //     id: number;
    //     name: string;
    //     description: string;
    //     level: number | string;
    // }

    // const missionList: MissionType[] = [
    //     {
    //         id: 1,
    //         name: dummyGroupState.mTitle,
    //         description: dummyGroupState.mContent,
    //         level: dummyGroupState.mLevel,
    //     },
    //     {
    //         id: 2,
    //         name: dummyGroupState.mTitle,
    //         description: dummyGroupState.mContent,
    //         level: dummyGroupState.mLevel,
    //     },
    //     {
    //         id: 3,
    //         name: dummyGroupState.mTitle,
    //         description: dummyGroupState.mContent,
    //         level: dummyGroupState.mLevel,
    //     },
    // ];

    // for (let mission of missionList) {
    //     if (mission.level === 5) {
    //         mission.level = '⭐️⭐️⭐️';
    //     } else if (mission.level === 3) {
    //         mission.level = '⭐️⭐️';
    //     } else if (mission.level === 1) {
    //         mission.level = '⭐️';
    //     }
    // }

    return (
        <div className="wrapper">
            <div className="upper-content">
                <div className="upper-content-wrapper">
                    <div className="title2">진행 중인 미션</div>

                    {/* 모임장만 보임 */}
                    <div onClick={missionAddHandler}>
                        <div className="title5 mission-edit">
                            <img
                                src="/asset/icons/edit.svg"
                                alt="edit-img"
                                className="edit-img"
                            ></img>
                        </div>
                    </div>
                    {addModalSwitch ? (
                        <MissionAddModal
                            addModalSwitch={addModalSwitch}
                            setAddModalSwitch={setAddModalSwitch}
                            action={'미션수정'}
                        />
                    ) : null}
                </div>
                <div className="title2">
                    {useDdayCount(dummyGroupState.gDday)}
                </div>
            </div>
            <div className="main-content">
                <ul>
                    {missionList.map((mission: MissionType, idx) => {
                        return (
                            <li key={idx} className="mission-li">
                                <div className="mission-element">
                                    {mission.mTitle}
                                </div>
                                <div>{mission.mContent}</div>
                                <div>난이도 : {mission.mLevel}</div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
