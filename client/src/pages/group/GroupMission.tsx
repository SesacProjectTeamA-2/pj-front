import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../styles/scss/pages/group/groupMissionList.scss';

import GroupContent from '../../components/group/content/GroupContentList';
import GroupHeader from '../../components/group/content/GroupHeader';
import { GroupDetailType } from 'src/types/types';
import GroupMissionList from 'src/components/group/content/GroupMissionList';

export default function GroupMission() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    //=== 모임 상세화면 읽어오기 ===

    const { gSeq, mSeq, gCategory } = useParams();

    console.log('mSeq', mSeq);

    const [groupDetail, setGroupDetail] = useState<GroupDetailType>({
        grInformation: '',
        groupCategory: '',
        groupCoverImg: '',
        groupDday: 0,
        groupMaxMember: 0,
        groupMember: [],
        groupMission: [],
        groupName: '',
        isJoin: false,
        isLeader: false,
        nowScoreUserInfo: [],
        totalScoreUserInfo: [],
        result: false,
        leaderInfo: {
            uSeq: 0,
            uName: '',
            uImg: '',
            uCharImg: '',
        },
        memberArray: [],
    });

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
        setMissionList(res.data.groupMission);

        console.log('+++++++', res.data.groupMission);

        // for (let mission of missionList) {
        //     if (mission.mSeq === Number(mSeq)) {
        //         setMissionTitle(mission.mTitle);
        //     }
        // }
    };

    useEffect(() => {
        getGroup();
    }, []);

    console.log(groupDetail);

    interface Mission {
        id: number;
        mTitle: string;
        mContent: string;
        mLevel: number;
        // map: string;
    }

    const [missionList, setMissionList] = useState<any>([]);

    let missionTitle = '';

    for (let mission of missionList) {
        if (mission.mSeq === Number(mSeq)) {
            missionTitle = mission.mTitle;
        }
    }

    // console.log('>>>>>mm', mSeq);
    // useEffect(() => {
    //     for (let i = 0; i < missionList.length; i++) {
    //         // missionIdList.push(missionList[i].mSeq);
    //         // setMissionTitle([ ...missionList, mSeq: i ]);
    //     }
    // }, []);

    let missionIdList = [];

    for (let i = 0; i < missionList.length; i++) {
        missionIdList.push(missionList[i].mSeq);
    }

    // console.log('*********', missionIdList);

    console.log('missionList=========', missionList);

    const getMissionBoard = async () => {
        const res = await axios
            .get(
                `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/mission/${mSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                setMissionBoard(res.data.groupInfo);
            });
    };

    useEffect(() => {
        getMissionBoard();
    }, [mSeq]);

    const [missionBoard, setMissionBoard] = useState();

    console.log('ooooooo', missionBoard);

    return (
        <div className="section section-group">
            <GroupHeader
                // [ 추후 ] 넘버링 id 추가
                // title={`미션 : ${missionList[Number(mSeq) - 1]?.mTitle}`}
                title={`미션 : ${missionTitle}`}
                groupName={groupDetail.groupName}
            />
            <div className="noti-container proof-container">
                <div className="noti-header proof-header">
                    <div className="title5">[ 인증방법 ]</div>
                    <div>
                        {Object.keys(missionList)?.length
                            ? missionList[Number(mSeq) - 1]?.mContent
                            : ''}
                    </div>
                </div>
            </div>
            <GroupMissionList
                missionList={missionList}
                groupDetail={groupDetail}
                missionBoard={missionBoard}
            />
            <Link to={`/board/create/${gSeq}/mission/${mSeq}`}>
                <img src="/asset/icons/plus.svg" className="plus-fixed" />
            </Link>
        </div>
    );
}
