import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/header.scss';

export default function Header(props: any) {
    const [targetDate, setTargetDate] = useState('2023-11-01'); // 오늘 날짜로 수정

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
            setAdjustedDday('-' + days);
        } else if (days == 0) {
            setAdjustedDday('D-day');
        } else if (days < 0) {
            setAdjustedDday('+' + String(days).slice(1, 2));
        }
    }, [days]);

    return (
        <div className="header-container">
            <div className="header-divOne">
                <Link to="/">
                    <div className="logo-container">
                        {/* <div className="logo-text">MOTI</div> */}
                        <img
                            src="/asset/1.png"
                            className="logo-img"
                            alt="logo"
                        />
                    </div>
                </Link>
            </div>

            <div>{adjustedDday}</div>

            <div className="header-divTwo">
                <input
                    type="date"
                    id="date-input"
                    onChange={(e) => setTargetDate(e.target.value)}
                />
                <nav>
                    <Link to="/main">
                        <button className="menu-button">Main</button>
                    </Link>
                    <Link to="/mission">
                        <button className="menu-button">Mission</button>
                    </Link>
                    <Link to="/group">
                        <button className="menu-button">Group</button>
                    </Link>

                    {/* 관리자만 보이는 버튼 */}
                    <Link to="/management/users">
                        <button className="menu-button">Management</button>
                    </Link>

                    {/* 비로그인 시 */}
                    <Link to="/login">
                        <button className="menu-button">Login</button>
                    </Link>
                    {/* 로그인 시 */}

                    <Link to="/mypage">
                        <img
                            src="/asset/images/user.png"
                            style={{ width: '40px', height: '40px' }}
                            alt="userImg"
                        ></img>
                    </Link>
                    <img
                        src="/asset/icons/chat.svg"
                        style={{ width: '40px', height: '40px' }}
                        alt="chatImg"
                        onClick={() => props.showChatting()}
                    />
                </nav>
            </div>
        </div>
    );
}
