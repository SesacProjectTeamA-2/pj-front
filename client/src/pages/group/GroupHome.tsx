import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/components/titles.scss';
import '../../styles/scss/components/buttons.scss';

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
        <div className="section">
            <div className="group-sub-container">
                <div className="title1">코딩학당</div>

                <button className="btn-fixed" onClick={onClick}>
                    1등 입니다 ~ !
                </button>
            </div>
        </div>
    );
}
