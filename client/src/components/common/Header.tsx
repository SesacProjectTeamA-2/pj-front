import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/header.scss';
import Dday from './Dday';

export default function Header(props: any) {
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

            <div className="header-divTwo">
                <Dday />

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
                            src="/asset/images/user.svg"
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
