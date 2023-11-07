import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import { useDispatch, useSelector } from 'react-redux';
import { changeGroup } from '../../store/slices/groupSlice';

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

    // const userState = useSelector((state: RootStateType) => state.user);

    //=== 모임 상세화면 읽어오기 ===

    const { gSeq } = useParams();

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
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setGroupDetail(res.data);

                setNowRanking(res.data.nowScoreUserInfo);
                setNowScoreRanking(res.data.doneRates);

                setTotalRanking(res.data.totalScoreUserInfo);
                setTotalScoreRanking(res.data.totalRanking);
            });
    };

    useEffect(() => {
        getGroup();
    }, []);

    // 현재 점수 리스트
    const [nowScoreRanking, setNowScoreRanking] = useState([]);

    // 현재 랭킹 유저 정보
    const [nowScoreUserInfo, setNowScoreUserInfo] = useState([]);

    // 유저별 점수
    const [nowRanking, setNowRanking] = useState([]);

    const [uSeqList, setUSeqList] = useState<any>([]);
    const [uNameList, setUNameList] = useState<any>([]);
    const [uImgList, setUImgList] = useState<any>([]);

    // 누적 랭킹
    const [totalRanking, setTotalRanking] = useState([]);
    const [totalScoreRanking, setTotalScoreRanking] = useState([]);

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
    console.log('missionList GROUP', missionList);
    useEffect(() => {
        setMissionList(groupDetail.groupMission);
    }, [groupDetail.groupMission]);

    console.log('groupDetail HOME', groupDetail);

    return (
        <div className="section group-home">
            {/* [추후] 모임생성 시, 이미지 파일 없으므로 삼항연산자로 처리 */}

            {groupDetail.groupCoverImg ? (
                // [추후] 커버이미지 추가
                <div className="cover-img">
                    <div className="title1 cover-title">
                        {groupDetail.groupName}
                    </div>
                </div>
            ) : (
                <div className="title1" style={{ padding: '2rem' }}>
                    {groupDetail.groupName}
                </div>
            )}

            <div className="wrapper">
                <div className="title2 group-title-text">어떤 모임인가요 ?</div>
                <div className="main-content">{groupDetail.grInformation}</div>
            </div>

            <HomeMissionList
                missionList={missionList}
                setMissionList={setMissionList}
                gDday={groupDetail.groupDday}
                //    addModalSwitch={addModalSwitch}
                //         setAddModalSwitch={setAddModalSwitch}
                //         action={'미션생성'}
                //         setInput={setInput}
                //         input={input}
            />

            <div className="ranking-container">
                <CurRanking
                    nowScoreUserInfo={nowScoreUserInfo}
                    nowRanking={nowRanking}
                    groupMember={groupDetail.groupMember}
                    nowScoreRanking={nowScoreRanking}
                />
                <AccRanking
                    totalRanking={totalRanking}
                    totalScoreRanking={totalScoreRanking}
                />
            </div>

            <MemberList
                gMax={groupDetail.groupMaxMember}
                isLeader={groupDetail.isLeader}
                groupMember={groupDetail.groupMember}
                leaderInfo={groupDetail.leaderInfo}
                memberArray={groupDetail.memberArray}
            />

            <button className="btn-fixed" onClick={onClick}>
                가입하기
            </button>
        </div>
    );
}
