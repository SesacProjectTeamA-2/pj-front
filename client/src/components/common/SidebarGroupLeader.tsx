//=== 모임장 그룹 사이드바 ===

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/sidebarGroup.scss';
import MissionCancelModal from './modal/MissionCancelModal';

export default function SideBarGroupLeader() {
    const [missionCancelModalSwitch, setMissionCancelModalSwitch] =
        useState(false);

    const [delegateModalSwitch, setDelegateModalSwitch] = useState(false);
    const [countOutModalSwitch, setCountOutModalSwitch] = useState(false);
    const [deleteSwitch, setDeleteSwitch] = useState(false);

    const missionCancelModalHandler = () => {
        setMissionCancelModalSwitch(true);
    };

    const delegateModalHandler = () => {
        setDelegateModalSwitch(true);
    };

    const countOutModalHandler = () => {
        setCountOutModalSwitch(true);
    };

    const deleteModalHandler = () => {
        setDeleteSwitch(true);
    };

    return (
        <div>
            <ul className="title4 leader-menu">
                <li className="leader-edit">초대하기</li>
                {/* 링크가 복사되었습니다 ! */}

                {/* [추후] id 추가 */}
                <Link to="/group/edit/1">
                    <li className="leader-edit">모임 수정</li>
                </Link>
                <br />

                <li
                    onClick={missionCancelModalHandler}
                    className="title5 leader-warning"
                >
                    미션완료 취소
                </li>
                <li
                    onClick={delegateModalHandler}
                    className="title5 leader-warning"
                >
                    모임장 권한 넘기기
                </li>
                <li
                    onClick={countOutModalHandler}
                    className="title5 leader-warning"
                >
                    강제 퇴장시키기
                </li>

                <li
                    onClick={deleteModalHandler}
                    className="title5 leader-warning"
                >
                    모임 삭제
                </li>
            </ul>

            {missionCancelModalSwitch ? (
                <MissionCancelModal
                    missionCancelModalSwitch={missionCancelModalSwitch}
                    setMissionCancelModalSwitch={setMissionCancelModalSwitch}
                />
            ) : null}
        </div>
    );
}
