import React, { useState } from 'react';
import { MissionStateType, RootStateType } from '../../types/types';
import MissionItem from './MissionItem';
import GroupFilterTag from './GroupFilterTag';
import { useSelector } from 'react-redux';

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
                    {/* [추후] 디데이로 변경 */}
                    <div className="title5">{group.gDday}</div>
                </div>
                {missions.map((mission: MissionStateType) => (
                    <MissionItem
                        key={mission.id}
                        mission={mission}
                        // toggleComplete={toggleComplete}
                    />
                ))}
            </ul>

            {/* [수정 요청] map 돌릴거라 전부 공통 클래스명으로 바꿔주세요..! (ul1, ul2 말고, 공통 클래스명인 ul 로)*/}
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
