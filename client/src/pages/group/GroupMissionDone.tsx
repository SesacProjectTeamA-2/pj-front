import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import '../../styles/scss/pages/group/groupMissionDone.scss';

import GroupContent from '../../components/group/content/GroupContentList';
import GroupHeader from '../../components/group/content/GroupHeader';
import { GroupMission, MissionType } from 'src/types/types';

export default function GroupMissionDone() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    //=== 모임 상세화면 읽어오기 ===

    const { gSeq } = useParams();

    const [groupMission, setGroupMission] = useState<GroupMission>({
        uEmail: '',
        uName: '',
        gName: '',
        Dday: 0,
        uSeq: 0,
        missionList: [],
        expiredMissionList: [],
    });

    const getGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/mission/group/${gSeq}`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                setGroupMission(res.data);
                setMissionList(groupMission.expiredMissionList);
            });
    };

    const [missionList, setMissionList] = useState<any>([]);
    useEffect(() => {
        getGroup();
    }, []);

    // 미션
    // interface Mission {
    //     id: number;
    //     mTitle: string;
    //     createdAt: number;
    //     updatedAt: number;
    //     mContent: string;
    //     mLevel: number;
    //     // map: string;
    //     isExpired: boolean | null;
    // }

    // type MissionList = {
    //     mSeq: number;
    //     mTitle: string;
    //     mContent: string;
    //     mLevel: number;
    //     createdAt: string;
    //     updatedAt: string;
    //     gSeq: number;
    //     isExpired: null | boolean;
    // };

    return (
        <div className="section section-group">
            <GroupHeader title={'완료된 미션'} groupName={groupMission.gName} />
            <div className="noti-container">
                <div className="noti-header mission-done-header">
                    <table>
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>시작</th>
                                <th>종료</th>
                                <th>기간</th>
                                <th>완료된 미션</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr></tr>
                        </tbody>
                    </table>
                </div>
                <div className="noti-content mission-done-content">
                    <ul>
                        {/* START */}

                        {/* END */}

                        <li>
                            {/* {missionList.length > 0 ? ( */}
                            <td className="mission-done-list">
                                {missionList.map(
                                    (mission: any, idx: number) => {
                                        return (
                                            <>
                                                <div>{idx + 1}</div>
                                                <div>{mission.createdAt}</div>
                                                <div>{mission.updatedAt}</div>
                                                <div className="mission-done-list">
                                                    <button>
                                                        {mission.mTitle}
                                                    </button>
                                                </div>
                                            </>
                                        );
                                    }
                                )}
                            </td>
                            {/* // ) : (
                            //     <div className="title3">
                            //         완료된 미션이 없어요
                            //     </div>
                            // )} */}
                        </li>
                    </ul>
                </div>
            </div>

            {/* <div>
                <Link to="/board/create">
                    <img src="/asset/icons/plus.svg" className="plus-fixed" />
                </Link>
            </div> */}
        </div>
    );
}
