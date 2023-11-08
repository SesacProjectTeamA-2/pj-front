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
                <div className="sidebar-list">
                    <div className="sidebar-theme-list">
                        <div className="theme-flex">
                            <div className="theme-title">
                                <Link to={`/group/home/${gSeq}`}>홈</Link>
                            </div>
                        </div>

                        <div className="theme-flex">
                            <div className="theme-title">게시판</div>
                            <div className="board-content">
                                <Link to={`/board/${gSeq}/notice`}>
                                    <div className="sidebar-theme">
                                        공지사항
                                    </div>
                                </Link>
                                <Link to={`/board/${gSeq}/free`}>
                                    <div className="sidebar-theme">자유</div>
                                </Link>
                            </div>
                        </div>
                        <div className="theme-flex">
                            <div className="theme-title">미션</div>
                            <div className='mission-flex'>
                                <div>
                                    <div>진행 중</div>
                                    <div>
                                        <ul  className="progress-mission">
                                            {mSeqList.map((mSeq: number) => {
                                                return (
                                                    <li key={mSeq}>
                                                        <Link
                                                            to={`/board/${gSeq}/mission/${mSeq}`}
                                                        >
                                                            <div
                                                                key={mSeq}
                                                                className=""
                                                            >
                                                                {
                                                                    groupMissions[
                                                                        mSeq - 1
                                                                    ].mTitle
                                                                }
                                                            </div>
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                                <Link to={`/board/${gSeq}/mission/done`}>
                                    <div className="">완료</div>
                                </Link>
                            </div>
                        </div>

                        <div className="theme-flex">
                            {/* 모임장 */}
                            <div className="theme-title">모임장</div>
                            <SideBarGroupLeader
                                warningModalSwitch={warningModalSwitch}
                                setWarningModalSwitch={setWarningModalSwitch}
                                warningModalSwitchHandler={
                                    warningModalSwitchHandler
                                }
                                menu={menu}
                                setMenu={setMenu}
                            />
                        </div>
                        <div className="theme-flex">
                            {/* 멤버 */}
                            <div className="theme-title">멤버</div>

                            <SideBarGroupMember
                                warningModalSwitch={warningModalSwitch}
                                setWarningModalSwitch={setWarningModalSwitch}
                                warningModalSwitchHandler={
                                    warningModalSwitchHandler
                                }
                                menu={menu}
                                setMenu={setMenu}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
