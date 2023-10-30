//=== 모임장 그룹 사이드바 ===

import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/sidebarGroup.scss';

export default function SideBarGroupLeader() {
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
                <li className="title5 leader-warning">미션완료 취소</li>
                <li className="title5 leader-warning">모임장 권한 넘기기</li>
                <li className="title5 leader-warning">강제 퇴장시키기</li>

                <li className="title5 leader-warning">모임 삭제</li>
            </ul>
        </div>
    );
}
