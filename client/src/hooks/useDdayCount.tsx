import React, { useState, useEffect } from 'react';

export default function useDdayCount(targetDate: string) {
    const [dday, setDday] = useState('');

    useEffect(() => {
        if (targetDate) {
            const countDownDate = new Date(targetDate).getTime();
            const now = new Date().getTime();
            const countDown = countDownDate - now;
            const days = Math.floor(countDown / (1000 * 60 * 60 * 24)) + 1;

            if (days > 0) {
                setDday('D-' + days);
            } else if (days == 0) {
                setDday('D-day');
            } else if (days < 0) {
                setDday('D+' + String(days).slice(1, 2));
            }
        }
    }, [targetDate]);

    return dday;
}

// export default function useDdayCount(date: string) {
//     const [targetDate, setTargetDate] = useState(date); // 오늘 날짜로 수정

//     const Countdown = (targetDate: Date): number[] => {
//         const countDownDate = new Date(targetDate).getTime();

//         const [countDown, setCountDown] = useState(
//             countDownDate - new Date().getTime()
//         );

//         useEffect(() => {
//             const timer = setInterval(() => {
//                 setCountDown(countDownDate - new Date().getTime());
//             }, 1000);

//             return () => {
//                 clearInterval(timer); // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
//             };
//         }, [countDownDate]);

//         return getReturnValues(countDown);
//     };

//     const getReturnValues = (countDown: number) => {
//         // calculate time left
//         let days = Math.floor(countDown / (1000 * 60 * 60 * 24)) + 1;

//         // [추후] 지울 예정
//         const hours = Math.floor(
//             (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//         );
//         const minutes = Math.floor(
//             (countDown % (1000 * 60 * 60)) / (1000 * 60)
//         );
//         const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

//         return [days, hours, minutes, seconds];
//     };

//     const [days, hours, minutes, seconds] = Countdown(new Date(targetDate));

//     const [dday, setDday] = useState(days);
//     let [adjustedDday, setAdjustedDday] = useState('');

//     useEffect(() => {
//         setDday(days);

//         adjustedDday = String(days);

//         if (days > 0) {
//             setAdjustedDday('D-' + days);
//         } else if (days == 0) {
//             setAdjustedDday('D-day');
//         } else if (days < 0) {
//             setAdjustedDday('D+' + String(days).slice(1, 2));
//         }
//     }, [days]);

//     return adjustedDday;
// }
