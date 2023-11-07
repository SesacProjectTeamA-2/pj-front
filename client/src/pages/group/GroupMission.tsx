import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../styles/scss/pages/group/groupMissionList.scss';

import GroupContent from '../../components/group/content/GroupContentList';
import GroupHeader from '../../components/group/content/GroupHeader';
import { GroupDetailType } from 'src/types/types';

export default function GroupMission() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    //=== 모임 상세화면 읽어오기 ===

    const { gSeq, mSeq } = useParams();

    const [groupDetail, setGroupDetail] = useState<GroupDetailType>({
        grInformation: '',
        groupCategory: '',
        groupCoverImg: '',
        groupDday: 0,
        groupMaxMember: 0,
        groupMember: [],
        groupMission: [],
        groupRanking: [], // nowRanking: [], totalRanking: []
        groupName: '',
        isJoin: false,
        isLeader: false,
        // memberImg: [],
        // memberNickname: [],
        result: false,
    });
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

            setGroupDetail(res.data);
        };

        getGroup();
    }, []);
    // gSeq, uToken

    console.log(groupDetail);

    interface Mission {
        id: number;
        mTitle: string;
        mContent: string;
        mLevel: number;
        // map: string;
    }

    const [missionList, setMissionList] = useState<Mission[]>(
        groupDetail.groupMission
    );

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

    // const [missionList, setMissionList] = useState<MissionList>(
    //     groupDetail.groupMission[Number(mSeq) - 1]
    // );

    useEffect(() => {
        setMissionList(groupDetail.groupMission);
    }, [groupDetail.groupMission]);

    console.log(missionList);

    return (
        <div className="section section-group">
            <GroupHeader
                // [ 추후 ] 넘버링 id 추가
                title={`미션 ${mSeq}. ${
                    Object.keys(missionList)?.length
                        ? missionList[Number(mSeq) - 1].mTitle
                        : ''
                }`}
                groupName={groupDetail.groupName}
            />
            <div className="noti-container proof-container">
                <div className="noti-header proof-header">
                    <div className="title5">[ 인증방법 ]</div>
                    <div>
                        {Object.keys(missionList)?.length
                            ? missionList[Number(mSeq) - 1].mContent
                            : ''}
                    </div>
                </div>
            </div>
            <GroupContent action={'미션게시글'} />
            <Link to="/board/create">
                <img src="/asset/icons/plus.svg" className="plus-fixed" />
            </Link>
        </div>
    );
}
