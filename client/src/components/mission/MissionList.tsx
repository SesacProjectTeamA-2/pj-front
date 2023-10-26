import React, { useState } from 'react';
import { MissionType } from '../../types/types';
import MissionItem from './MissionItem';

export default function MissionList() {
    const [missions, setMissions] = useState<MissionType[]>([
        { id: 1, text: ' div 배치 ', completed: false },
        { id: 2, text: ' 다중 선택 태그 로직 찾아보기 ', completed: false },
        { id: 3, text: ' 토끼 불러오기 ', completed: false },

        { id: 5, text: ' 달성 완료랑 group 페이지 연결 ', completed: true },
    ]);

    return (
        <div>
            <h1>MissionList </h1>
            <ul className="MissionItem-ul1">
                <div className="MissionList-header">
                    <div className="group">코딩학당</div>
                    <div className="dDay">D-3</div>
                </div>
                {missions.map((mission) => (
                    <MissionItem
                        key={mission.id}
                        mission={mission}
                        // toggleComplete={toggleComplete}
                    />
                ))}
            </ul>
            <ul className="MissionItem-ul2">
                <div className="MissionList-header">
                    <div className="group">근손실방지</div>
                    <div className="dDay">D-3</div>
                </div>

                {missions.map((mission) => (
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
