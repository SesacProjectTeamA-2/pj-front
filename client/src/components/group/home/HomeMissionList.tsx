import React from 'react';

export default function HomeMissionList() {
    return (
        <div className="wrapper">
            <div className="upper-content">
                <div className="title2">진행 중인 미션</div>
                <div className="title2">D-3</div>
            </div>
            <div className="main-content">
                <ul>
                    <li className="mission-li">
                        <div className="mission-element">알고리즘</div>
                        <div>인증방법은 문제를 풀고 코드를 제출해주세요 !</div>
                    </li>
                    <li className="mission-li">
                        <div className="mission-element">블로깅</div>
                        <div>인증방법을 적어주세요 !</div>
                    </li>
                    <li className="mission-li">
                        <div className="mission-element">모각코</div>
                        <div>인증방법을 적어주세요 !</div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
