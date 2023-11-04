import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Cookies } from 'react-cookie';

import { grey } from '@mui/material/colors';
import { Button, ButtonGroup } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import '../../styles/scss/layout/header.scss';

import Dday from './Dday';

export default function Header(props: any) {
    const theme = createTheme({
        palette: {
            primary: {
                main: grey[200],
            },
            secondary: grey,
        },
    });

    // 리사이즈 이벤트에 따라 너비값 측정
    const [myWidth, setMyWidth] = useState<number>(0);
    window.onresize = () => {
        setMyWidth(window.innerWidth);
        // console.log(myWidth);
    };

    // 헤더 메뉴 보여주기
    const [isVisibleMobile, setIsVisibleMobile] = useState<boolean>(true);
    const toggleVal = (): void => {
        if (myWidth < 800) {
            setIsVisibleMobile((prev) => !prev);
        }
    };
    useEffect(() => {
        console.log('isVisibleMobile', isVisibleMobile);
    }, [isVisibleMobile]);

    //=== 쿠키 설정 ===
    const [isCookie, setIsCookie] = useState(false); // 쿠키 유무

    const cookie = new Cookies();
    const uToken = cookie.get('isUser'); // 토큰 값

    // console.log('@@@@@@@', uToken);
    // if (Object.keys(allCookies).length !== 0) {
    //     setIsCookie(true);
    // }

    useEffect(() => {
        if (cookie.get('isUser')) {
            setIsCookie(true);
        } else setIsCookie(false);
    }, [cookie]);

    const nvg = useNavigate();
    const logoutHandler = () => {
        cookie.remove('isUser');
        nvg('/');
    };

    return (
        <>
            <div className="header-container">
                {/* 로고 */}
                <div className="header-divOne">
                    <Link to="/">
                        <div className="logo-container">
                            <img
                                src="/asset/logo.svg"
                                className="logo-img"
                                alt="logo"
                            />
                        </div>
                    </Link>
                </div>

                {/* 디데이, 메뉴  */}
                <div className="header-divTwo pcMode">
                    <Dday />
                    {/* [추후] 대표 디데이 설정  
                    redux에서 date 값 꺼내와서 디데이 커스텀훅 => 디데이 값만 보이게 */}

                    <nav className="header-nav ">
                        <ThemeProvider theme={theme}>
                            <ButtonGroup
                                aria-label="outlined button group"
                                variant="outlined"
                                // color="secondary"
                                sx={{ p: 1 }}
                            >
                                <Link to="/main">
                                    <Button className="menu-button">
                                        Main
                                    </Button>
                                </Link>

                                <Link to="/mission">
                                    <Button className="menu-button">
                                        Mission
                                    </Button>
                                </Link>
                                {/* <li> */}
                                <Link to="/group">
                                    <Button className="menu-button">
                                        Group
                                    </Button>
                                </Link>
                                {/* </li> */}
                                {/* 관리자만 보이는 버튼 */}
                                <Link to="/management/users">
                                    <Button className="menu-button">
                                        Management
                                    </Button>
                                </Link>
                            </ButtonGroup>
                        </ThemeProvider>
                        {/* {!isCookie ? '쿠키 없음' : '쿠키 있음'} */}

                        <ul className="menu">
                            {!isCookie ? (
                                <li>
                                    {/* 비로그인 시 */}
                                    <ThemeProvider theme={theme}>
                                        <Link to="/login">
                                            <Button
                                                aria-label="outlined button group"
                                                variant="outlined"
                                                className="menu-button"
                                            >
                                                Login
                                            </Button>
                                        </Link>
                                    </ThemeProvider>
                                </li>
                            ) : (
                                <>
                                    <img
                                        src="/asset/icons/logout.svg"
                                        alt="logout"
                                        onClick={logoutHandler}
                                        id="logout-btn"
                                    />
                                    <li>
                                        <Link to="/mypage">
                                            <img
                                                src="/asset/images/user.svg"
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                }}
                                                alt="userImg"
                                            ></img>
                                        </Link>
                                    </li>
                                    <li id="chat-li">
                                        <img
                                            src="/asset/icons/chat.svg"
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                            }}
                                            alt="chatImg"
                                            onClick={() => props.showChatting()}
                                        />
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>

                {/* 메뉴 탭 버튼 */}
                <div className="tab-menu-div">
                    <button id="tab-menu-btn" onClick={() => toggleVal()}>
                        <img src="/asset/icons/menu.svg" alt="tabMenu" />
                    </button>
                </div>
            </div>

            {/* 모바일일 때 메뉴 바*/}
            <div
                className="header-divTwo mobMode "
                style={{
                    display: isVisibleMobile && myWidth < 800 ? 'flex' : 'none',
                }}
            >
                {' '}
                <nav className="header-nav ">
                    <ul className="menu">
                        <Dday />
                        <li>
                            <Link to="/main">
                                <button className="menu-button">Main</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/mission">
                                <button className="menu-button">Mission</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/group">
                                <button className="menu-button">Group</button>
                            </Link>
                        </li>

                        <li>
                            {/* 관리자만 보이는 버튼 */}
                            <Link to="/management/users">
                                <button className="menu-button">
                                    Management
                                </button>
                            </Link>
                        </li>
                        {!isCookie ? (
                            <li>
                                {/* 비로그인 시 */}
                                <Link to="/login">
                                    <button className="menu-button">
                                        Login
                                    </button>
                                </Link>
                            </li>
                        ) : (
                            <>
                                <li>
                                    {/* 로그인 시 */}

                                    <img
                                        src="/asset/icons/logout.svg"
                                        alt="logout"
                                        onClick={logoutHandler}
                                        id="logout-btn"
                                    />
                                    <Link to="/mypage">
                                        <img
                                            src="/asset/images/user.svg"
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                            }}
                                            alt="userImg"
                                        ></img>
                                    </Link>
                                </li>
                            </>
                        )}
                        <li id="chat-li">
                            <img
                                src="/asset/icons/chat.svg"
                                style={{ width: '40px', height: '40px' }}
                                alt="chatImg"
                                onClick={() => props.showChatting()}
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
