import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

import { grey } from '@mui/material/colors';
import { Button, ButtonGroup, Divider } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../styles/scss/layout/header.scss';

// dDay 제거
// import Dday from './Dday';

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
    const [myWidth, setMyWidth] = useState<number>(window.innerWidth);
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

    useEffect(() => {
        if (cookie.get('isUser')) {
            setIsCookie(true);
        } else setIsCookie(false);
    }, [cookie]);

    const nvg = useNavigate();
    const logoutHandler = () => {
        cookie.remove('isUser');
        cookie.remove('token');
        nvg('/');
        // alert('로그아웃!');
        window.location.reload();
    };

    // 프로필 사진 가져오기
    const [userImgSrc, setUserImgSrc] = useState<any>('/asset/images/user.svg'); // 문자열 변수

    const getUserData = async () => {
        await axios
            .get(`${process.env.REACT_APP_DB_HOST}/user/mypage`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('getUserData 로그인 후 ', res.data);
                const { userImg } = res.data; //null

                if (userImg !== null && userImg !== undefined) {
                    // user가 업로드한 값이 있을 때
                    setUserImgSrc(userImg);
                    console.log('userImgSrc 있음', userImgSrc);
                } else {
                    // user가 업로드한 값이 없거나 undefined일 때
                    setUserImgSrc('/asset/images/user.svg');
                    console.log('userImgSrc 없음', userImgSrc);
                }
            })
            .catch((err) => {
                console.log('error 발생: ', err);
            });
    };
    // console.log(window.location.pathname);

    useEffect(() => {
        if (cookie.get('isUser')) {
            getUserData();
            console.log('HEADER 로그인 상태');
        } else {
            console.log('HEADER 비로그인 상태');
            return;
        }
    }, [window.location.pathname]);

    // 초대장 링크 입력 후 버튼 클릭 시 그 그룹으로 이동
    const [grpInput, setGrpInput] = useState<string>('');
    const grpInputObj = {
        gLink: grpInput,
    };
    const goInvited = (): void => {
        axios
            .post(
                `${process.env.REACT_APP_DB_HOST}/group/joinByLink`,
                grpInputObj,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                const { success, msg } = res.data;
                success ? toast.success(msg) : toast.error(msg);
                setGrpInput('');
            });
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
                    {/* <Dday /> */}
                    {/* [추후] 대표 디데이 설정  
                    redux에서 date 값 꺼내와서 디데이 커스텀훅 => 디데이 값만 보이게 */}

                    <nav className="header-nav ">
                        <ThemeProvider theme={theme}>
                            <input
                                type="text"
                                id="grpSearch-input"
                                value={grpInput}
                                placeholder="초대 링크를 넣어보세요"
                                onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                ) => setGrpInput(e.target.value)}
                            />
                            <img
                                src="/asset/icons/search.svg"
                                id="grpSearch-btn"
                                onClick={(e: React.MouseEvent) => goInvited()}
                                alt="search"
                            ></img>
                            <ButtonGroup
                                aria-label="outlined button group"
                                variant="outlined"
                                sx={{ p: 1 }}
                            >
                                <Link to="/main">
                                    <Button className="menu-button">
                                        MAIN
                                    </Button>
                                </Link>

                                <Link to="/group">
                                    <Button className="menu-button">
                                        GROUP
                                    </Button>
                                </Link>
                                {/* </li> */}
                                {/* 관리자만 보이는 버튼 */}
                                {/* <Link to="/management/users">
                                    <Button className="menu-button">
                                        Management
                                    </Button>
                                </Link> */}
                            </ButtonGroup>
                        </ThemeProvider>

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
                                                src={userImgSrc}
                                                style={{
                                                    width: '40px',
                                                    height: '40px',
                                                }}
                                                alt="userImg"
                                                className="myPage-btn"
                                            ></img>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </nav>
                </div>

                {/* 메뉴 탭 버튼 */}
                <div className="tab-menu-div">
                    <button id="tab-menu-btn" onClick={() => toggleVal()}>
                        <img src="/asset/icons/Menu.svg" alt="tabMenu" />
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
                        {/* <Dday /> */}
                        <li>
                            <Link to="/main">
                                <button className="menu-button">MAIN</button>
                            </Link>
                        </li>
                        {/* <li>
                            <Link to="/mission">
                                <button className="menu-button">Mission</button>
                            </Link>
                        </li> */}
                        <li>
                            <Link to="/group">
                                <button className="menu-button">GROUP</button>
                            </Link>
                        </li>

                        {/* 관리자만 보이는 버튼 */}
                        {/* <li>
                            <Link to="/management/users">
                                <button className="menu-button">
                                    Management
                                </button>
                            </Link>
                        </li> */}

                        {/* 로그인/비로그인 구분 */}
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
                                            src={userImgSrc}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                            }}
                                            className="myPage-btn"
                                            alt="userImg"
                                        ></img>
                                    </Link>
                                </li>
                            </>
                        )}
                        {/* 채팅 컴포넌트 */}
                        {/* <li id="chat-li">
                            <img
                                src="/asset/icons/chat.svg"
                                style={{ width: '40px', height: '40px' }}
                                alt="chatImg"
                                onClick={() => props.showChatting()}
                                id="chat-btn"
                            />
                        </li> */}
                    </ul>
                </nav>
            </div>
        </>
    );
}
