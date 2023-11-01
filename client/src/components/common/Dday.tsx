import React, { useEffect, useState } from 'react';

import '../../styles/scss/components/dday.scss';

//=== [추후] days => redux에 값 저장하기

export default function Dday() {
    const [targetDate, setTargetDate] = useState(''); // 오늘 날짜로 수정

    const Countdown = (targetDate: Date): number[] => {
        const countDownDate = new Date(targetDate).getTime();

        const [countDown, setCountDown] = useState(
            countDownDate - new Date().getTime()
        );

        useEffect(() => {
            const timer = setInterval(() => {
                setCountDown(countDownDate - new Date().getTime());
            }, 1000);

            return () => {
                clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
            };
        }, [countDownDate]);

        return getReturnValues(countDown);
    };

    const getReturnValues = (countDown: number) => {
        // calculate time left
        let days = Math.floor(countDown / (1000 * 60 * 60 * 24)) + 1;

        // [추후] 지울 예정
        const hours = Math.floor(
            (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (countDown % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

        return [days, hours, minutes, seconds];
    };

    const [days, hours, minutes, seconds] = Countdown(new Date(targetDate));

    const [dday, setDday] = useState(days);
    let [adjustedDday, setAdjustedDday] = useState('');

    useEffect(() => {
        setDday(days);
        console.log('dday', dday);
        console.log('daysss', days);

        adjustedDday = String(days);

        if (days > 0) {
            setAdjustedDday('D-' + days);
        } else if (days == 0) {
            setAdjustedDday('D-day');
        } else if (days < 0) {
            setAdjustedDday('D+' + String(days).slice(1, 2));
        }
    }, [days]);

    return (
        <div className="dday-container">
            <input
                type="date"
                id="date-input"
                onChange={(e) => setTargetDate(e.target.value)}
            />
            <div id="dday-text">{adjustedDday}</div>
        </div>
    );
}
