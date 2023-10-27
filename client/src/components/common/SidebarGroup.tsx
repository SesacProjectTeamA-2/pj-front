import React from 'react';
import '../../styles/scss/layout/sidebarGroup.scss';

export default function SideBarGroup() {
    return (
        <div className="container">
            <ul className="title4 list-unstyled">
                <li>홈</li>
                <li>게시판</li>
                <ul className="title5">
                    <li>공지사항</li>
                    <li>자유</li>
                </ul>
                <li>미션</li>
                <ul className="title5">
                    <li>진행 중</li>
                    <ul className="title6">
                        <li>알고리즘</li>
                        <li>블로깅</li>
                        <li>모각코</li>
                    </ul>
                    <li>완료</li>
                </ul>
            </ul>
        </div>
    );
}
