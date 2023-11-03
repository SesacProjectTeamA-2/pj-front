import React, { useState } from 'react';
import { MissionStateType, RootStateType } from '../../types/types';
import MissionItem from './MissionItem';
import GroupFilterTag from './GroupFilterTag';
import { useSelector } from 'react-redux';
import useDdayCount from '../../hooks/useDdayCount';

export default function MissionList() {
    // const [missions, setMissions] = useState<MissionType[]>([
    //     { id: 1, name: ' div 배치 ', completed: false },
    //     { id: 2, name: ' 다중 선택 태그 로직 찾아보기 ', completed: false },
    //     { id: 3, name: ' 토끼 불러오기 ', completed: false },

    //     { id: 5, name: ' 달성 완료랑 group 페이지 연결 ', completed: true },
    // ]);

    // type MissionsStateType = {
    //     id: number;
    //     name: string;
    //     description: string;
    //     level: number;
    //     completed: boolean;
    // }[];

    // redux
    const missions = useSelector((state: RootStateType) => state.mission);
    const group = useSelector((state: RootStateType) => state.dummyGroup);

    console.log(missions);

    return (
        <div className="list">
            <h1>MissionList </h1>
            <GroupFilterTag />

            <ul className="mission-item-ul1">
                <div className="MissionList-header">
                    <div className="title4">{group.gName}</div>

                    <div className="title5">{useDdayCount(group.gDday)}</div>
                </div>
                {missions.map((mission: MissionStateType) => (
                    <MissionItem
                        key={mission.id}
                        mission={mission}
                        // toggleComplete={toggleComplete}
                    />
                ))}
            </ul>

            <ul className="mission-item-ul2">
                <div className="MissionList-header">
                    <div className="title4">근손실방지</div>
                    <div className="title5">D-3</div>
                </div>

                {missions.map((mission: MissionStateType) => (
                    <MissionItem
                        key={mission.id}
                        mission={mission}
                        // toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
        </div>
    );
}
