import React from 'react';
import '../../styles/scss/components/titles.scss';
// import useWindowSize from 'react-use/lib/useWindowSize';
// import Confetti from 'react-confetti';
import JSConfetti from 'js-confetti';

export default function GroupHome() {
    // const { width, height } = useWindowSize();

    // require('canvas-confetti');

    // function onClick() {
    //     confetti({
    //         particleCount: 150,
    //         spread: 60,
    //     });
    // }

    //HTML Canvas 요소를 생성하여 페이지에 추가
    const jsConfetti = new JSConfetti();

    //색종이 커스터마이징
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

        jsConfetti.addConfetti({
            emojis: ['🎉', '👍🏻', '🥳'],
            // emojis: ['🎉'],
            emojiSize: 100,
            confettiNumber: 30,
        });
    };

    return (
        <div>
            <input type="text" placeholder="어떤 모임을 찾으시나요 ?" />
            <div className="title1">참여한 모임</div>
            <div className="title">내가 생성한 모임</div>
            <div className="title">이런 모임 어떠세요 ?</div>
            <button onClick={onClick}>내가 모임 만들기 !</button>
        </div>
    );
}
