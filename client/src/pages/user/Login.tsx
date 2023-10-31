import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/scss/pages/user/login.scss';

import GoogleLoginBtn from '../../components/login/GoogleLoginBtn';
import NaverLoginBtn from '../../components/login/NaverLoginBtn';
import KakaoLoginBtn from '../../components/login/KakaoLoginBtn';
// import { GoogleLoginButton } from 'react-social-login-buttons';

export default function Login() {
    const googleLogin = (): void => {
        window.location.href = 'http://localhost:8888/api/user/login/google';
    };
    const kakaoLogin = (): void => {
        window.location.href =
            'http://localhost:8888/api/user/login/kakao/authorize';
    };
    const naverLogin = (): void => {
        window.location.href = 'http://localhost:8888/api/user/login/naver';
    };

    return (
        <div className="section">
            <div className="login-wrapper">
                <h1 id="login-h1">안녕하세요!</h1>

                <GoogleLoginBtn
                    style={{ marginTop: '20%' }}
                    onClick={() => googleLogin()}
                    align="center"
                ></GoogleLoginBtn>
                {/* <GoogleLoginButton /> */}

                <KakaoLoginBtn
                    style={{ marginTop: '2%' }}
                    onClick={(): void => kakaoLogin()}
                    align="center"
                />

                <NaverLoginBtn
                    style={{ marginTop: '2%' }}
                    onClick={(): void => naverLogin()}
                    align="center"
                />

                {/* <button id="link-join-btn">
                    <Link to="/join" style={{ textDecoration: 'none' }}>
                        <p>회원이 아니신가요?</p>
                    </Link>
                </button> */}
            </div>
        </div>
    );
}
