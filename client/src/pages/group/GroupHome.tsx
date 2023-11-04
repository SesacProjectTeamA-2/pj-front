import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeGroup } from '../../store/slices/groupSlice';

import '../../styles/scss/components/titles.scss';
import '../../styles/scss/components/buttons.scss';
import '../../styles/scss/pages/group/groupHome.scss';

import HomeMissionList from '../../components/group/home/HomeMissionList';
import CurRanking from '../../components/group/home/CurRanking';
import AccRanking from '../../components/group/home/AccRanking';
import MemberList from '../../components/group/home/MemberList';

import { RootStateType } from '../../../src/types/types'; // Redux 스토어 전체 타입을 가져옵니다.

// import JSConfetti from 'js-confetti'; //_ 빵빠레

export default function GroupHome() {
    //HTML Canvas 요소를 생성하여 페이지에 추가
    // const jsConfetti = new JSConfetti();

    const dispatch = useDispatch();

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

    console.log('????', dummyGroupState);

    const userState = useSelector((state: RootStateType) => state.user);

    console.log('!!!!', userState);

    return (
        <div className="section group-home">
            <div className="cover-img">
                <div className="title1 cover-title">
                    {dummyGroupState.gName}
                </div>
            </div>

            <div className="wrapper">
                <div className="title2 group-title-text">어떤 모임인가요 ?</div>
                <div className="main-content">{dummyGroupState.gDesc}</div>
            </div>

            <HomeMissionList />

            <div className="ranking-container">
                <CurRanking />
                <AccRanking />
            </div>

            <MemberList />

            <button className="btn-fixed" onClick={onClick}>
                가입하기
            </button>
        </div>
    );
}
