import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/layout/header.scss';

export default function Header(props: any) {
    return (
        <div className="header-container">
            <Link to="/">
                <h1>로고</h1>
            </Link>
            <nav>
                <Link to="/main">
                    <button>Main</button>
                </Link>
                <Link to="/mission">
                    <button>Mission</button>
                </Link>
                <Link to="/group">
                    <button>Group</button>
                </Link>

                {/* 관리자만 보이는 버튼 */}
                <Link to="/management">
                    <button>Management</button>
                </Link>

                {/* 비로그인 시 */}
                <Link to="/login">
                    <button>Login</button>
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
    );
}
