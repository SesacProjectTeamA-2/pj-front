import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/sidebarGroup.scss';

export default function SideBarGroup() {
    return (
        <div className="container">
            <ul className="title4 list-unstyled">
                <Link to="/group/home/1">
                    <li>홈</li>
                </Link>
                <li>게시판</li>

                <ul className="title5">
                    <Link to="/group/noti/1">
                        <li>공지사항</li>
                    </Link>
                    <Link to="/group/board/1">
                        <li>자유</li>
                    </Link>
                </ul>
                <li>미션</li>
                <ul className="title5">
                    <li>진행 중</li>
                    <ul className="title6">
                        <Link to="/group/mission/1/1">
                            <li>알고리즘</li>
                        </Link>
                        <Link to="/group/mission/1/2">
                            <li>블로깅</li>
                        </Link>
                        <Link to="/group/mission/1/3">
                            <li>모각코</li>
                        </Link>
                    </ul>
                    <Link to="/group/mission/done/1">
                        <li>완료</li>
                    </Link>
                </ul>
            </ul>
        </div>
    );
}
