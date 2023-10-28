import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/components/titles.scss';
import '../../styles/scss/components/buttons.scss';
import '../../styles/scss/pages/group/groupHome.scss';

import HomeMissionList from '../../components/group/home/HomeMissionList';
import CurRanking from '../../components/group/home/CurRanking';
import AccRanking from '../../components/group/home/AccRanking';
import MemberList from '../../components/group/home/MemberList';

// import JSConfetti from 'js-confetti'; //_ 빵빠레

export default function GroupHome() {
    //HTML Canvas 요소를 생성하여 페이지에 추가
    // const jsConfetti = new JSConfetti();

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
    };

    return (
        <div className="section group-home">
            <div className="cover-img">
                <div className="title1 cover-title">코딩학당</div>
            </div>

            <div className="wrapper">
                <div className="title2">어떤 모임인가요 ?</div>
                <div className="main-content">모임 소개</div>
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
