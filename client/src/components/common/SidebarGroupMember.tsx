//=== 멤버 그룹 사이드바 ===

import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/sidebarGroup.scss';

export default function SideBarGroupMember() {
    return (
        <div>
            <ul className="title4">
                <li className="member-leave">탈 퇴</li>
            </ul>
        </div>
    );
}
