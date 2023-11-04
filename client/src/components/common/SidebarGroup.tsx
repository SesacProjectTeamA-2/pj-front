import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/sidebarGroup.scss';
import SideBarGroupLeader from './SidebarGroupLeader';
import SideBarGroupMember from './SidebarGroupMember';

export default function SideBarGroup() {
    // 메뉴 선택
    const [menu, setMenu] = useState('');

    // 경고 공통 모달
    const [warningModalSwitch, setWarningModalSwitch] = useState(false);

    const warningModalSwitchHandler = (menu: string) => {
        setMenu(menu);
        setWarningModalSwitch(!warningModalSwitch);
    };

    return (
        <div className="sidebar-container">
            <div className="sidebar-content">
                <ul className="title4 list-unstyled">
                    <Link to="/group/home/1">
                        <li className="title4-hover-bigger">홈</li>
                    </Link>
                    {/* 게시판 */}
                    {/* <li className="dropdown-noti"> */}
                        {/* <button className="dropbtn-noti">게시판</button> */}
                        {/* <ul className="title5 dropdown-content-noti"> */}
                            <Link to="/group/noti/1">
                                <li className="title5-hover-bigger">
                                    공지사항
                                </li>
                            </Link>
                            <Link to="/group/board/1">
                                <li className="title5-hover-bigger">자유</li>
                            </Link>
                        {/* </ul> */}
                    {/* </li> */}
                    {/* 미션 */}
                    <li className="dropdown">
                        <button className="dropbtn">미션</button>

                        <ul className="title5 dropdown-content">
                            <li>진행 중</li>
                            <ul className="title6">
                                <Link to="/group/mission/1/1">
                                    <li className="title6-hover-bigger">
                                        알고리즘
                                    </li>
                                </Link>
                                <Link to="/group/mission/1/2">
                                    <li className="title6-hover-bigger">
                                        블로깅
                                    </li>
                                </Link>
                                <Link to="/group/mission/1/3">
                                    <li className="title6-hover-bigger">
                                        모각코
                                    </li>
                                </Link>
                            </ul>
                            <Link to="/group/mission/done/1">
                                <li className="title5-hover-bigger">완료</li>
                            </Link>
                        </ul>
                    </li>
                </ul>
            </div>

            {/* 모임장 */}
            <SideBarGroupLeader
                warningModalSwitch={warningModalSwitch}
                setWarningModalSwitch={setWarningModalSwitch}
                warningModalSwitchHandler={warningModalSwitchHandler}
                menu={menu}
                setMenu={setMenu}
            />

            {/* 멤버 */}
            <SideBarGroupMember
                warningModalSwitch={warningModalSwitch}
                setWarningModalSwitch={setWarningModalSwitch}
                warningModalSwitchHandler={warningModalSwitchHandler}
                menu={menu}
                setMenu={setMenu}
            />
        </div>
    );
}
