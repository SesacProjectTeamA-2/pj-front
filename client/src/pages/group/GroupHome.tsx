import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeGroup } from '../../store/slices/groupSlice';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../styles/scss/components/titles.scss';
import '../../styles/scss/components/buttons.scss';
import '../../styles/scss/pages/group/groupHome.scss';

import HomeMissionList from '../../components/group/home/HomeMissionList';
import CurRanking from '../../components/group/home/CurRanking';
import AccRanking from '../../components/group/home/AccRanking';
import MemberList from '../../components/group/home/MemberList';

import { GroupDetailType, RootStateType } from '../../../src/types/types'; // Redux 스토어 전체 타입을 가져옵니다.

// import JSConfetti from 'js-confetti'; //_ 빵빠레

export default function GroupHome() {
    //HTML Canvas 요소를 생성하여 페이지에 추가
    // const jsConfetti = new JSConfetti();

    const dispatch = useDispatch();

    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    //++ redux test 용
    const test = {
        gSeq: 1,
        gName: '변경했어요..',
        gDesc: '11111',
        gDday: '2023-10-28',
        gMaxMem: 10000000,
        gCategory: 'it',
        gCoverImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1_J07ruu0QuBhaD6HSDkvbQdW_OOENXmiA&usqp=CAU',
        mTitle: '변경했어요..',
        mContent: '변경했어요..',
        mLevel: 5,
    };

    //_ 빵빠레 커스터마이징
    const onClick = () => {
        // jsConfetti.addConfetti({
        //     confettiColors: [
        //         '#ff0a54',
        //         '#ff477e',
        //         '#ff7096',
        //         '#ff85a1',
        //         '#fbb1bd',
        //         '#f9bec7',
        //     ],
        //     confettiRadius: 5,
        //     confettiNumber: 500,
        // });
        // jsConfetti.addConfetti({
        //     emojis: ['🎉', '👍🏻', '🥳'],
        //     // emojis: ['🎉'],
        //     emojiSize: 100,
        //     confettiNumber: 30,
        // });

        //++ redux test 용
        dispatch(changeGroup(test));

        console.log(dummyGroupState);
    };

    //=== redux 상태관리 ===
    const dummyGroupState = useSelector(
        (state: RootStateType) => state.dummyGroup
    );

    // console.log('????', dummyGroupState);

    const userState = useSelector((state: RootStateType) => state.user);

    // console.log('!!!!', userState);

    //=== 모임 상세화면 읽어오기 ===

    const { gSeq } = useParams();

    const [groupDetail, setGroupDetail] = useState<GroupDetailType>({
        grInformation: '',
        groupCategory: '',
        groupCoverImg: '',
        groupDday: 0,
        groupMaxMember: 0,
        groupMission: [],
        groupName: '',
        isJoin: false,
        isLeader: false,
        memberImg: [],
        memberNickname: [],
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

    interface Mission {
        id: number;
        mTitle: string;
        mContent: string;
        mLevel: number;
        map: string;
    }

    // res.data에서 missionArray
    const [missionList, setMissionList] = useState<Mission[]>(
        groupDetail.groupMission
    );

    console.log(groupDetail);

    return (
        <div className="section group-home">
            <div className="cover-img">
                <div className="title1 cover-title">
                    {groupDetail.groupName}
                </div>
            </div>

            <div className="wrapper">
                <div className="title2 group-title-text">어떤 모임인가요 ?</div>
                <div className="main-content">{groupDetail.grInformation}</div>
            </div>

            <HomeMissionList
                missionList={missionList}
                setMissionList={setMissionList}
                //    addModalSwitch={addModalSwitch}
                //         setAddModalSwitch={setAddModalSwitch}
                //         action={'미션생성'}
                //         setInput={setInput}
                //         input={input}
                gDday={groupDetail.groupDday}
            />

            <div className="ranking-container">
                <CurRanking />
                <AccRanking />
            </div>

            <MemberList
                gMax={groupDetail.groupMaxMember}
                isLeader={groupDetail.isLeader}
                memberNickName={groupDetail.memberNickname}
            />

            <button className="btn-fixed" onClick={onClick}>
                가입하기
            </button>
        </div>
    );
}
