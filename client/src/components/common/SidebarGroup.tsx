import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../styles/scss/layout/sidebarGroup.scss';
import { GroupMissionsType } from 'src/types/types';
import SideBarGroupLeader from './SidebarGroupLeader';
import SideBarGroupMember from './SidebarGroupMember';

export default function SideBarGroup() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq } = useParams();

    const [groupMissions, setGroupMissions] = useState<GroupMissionsType[]>([]);
    const [groupName, setGroupName] = useState<GroupMissionsType[]>([]);

    useEffect(() => {
        const getGroup = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            );

            setGroupMissions(res.data.groupMission);
            setGroupName(res.data.groupName);
        };

        getGroup();
    }, []);

    console.log('groupMissions', groupMissions);
    // console.log('groupMissions', groupMissions.length);

    let mSeqList = [];

    for (let i = 1; i <= groupMissions.length; i++) {
        mSeqList.push(i);
    }

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
                    <Link to={`/group/home/${gSeq}`}>
                        <li className="title4-hover-bigger">홈</li>
                    </Link>
                    {/* 게시판 */}
                    {/* <li className="dropdown-noti"> */}
                    {/* <button className="dropbtn-noti">게시판</button> */}
                    {/* <ul className="title5 dropdown-content-noti"> */}
                    <Link to={`/board/${gSeq}/notice`}>
                        <li className="title5-hover-bigger">공지사항</li>
                    </Link>
                    <Link to={`/board/${gSeq}/free`}>
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
                                {mSeqList.map((mSeq: number) => {
                                    return (
                                        <div key={mSeq}>
                                            <Link
                                                to={`/board/${gSeq}/mission/${mSeq}`}
                                            >
                                                <li
                                                    key={mSeq}
                                                    className="title6-hover-bigger"
                                                >
                                                    {
                                                        groupMissions[mSeq - 1]
                                                            .mTitle
                                                    }
                                                </li>
                                            </Link>
                                        </div>
                                    );
                                })}
                            </ul>
                            <Link to={`/board/${gSeq}/mission/done`}>
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
