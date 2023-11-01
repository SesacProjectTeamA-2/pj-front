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
        window.location.href =
            'http://13.124.147.68:8888/api/user/login/google';
    };
    const kakaoLogin = (): void => {
        window.location.href =
            'http://13.124.147.68:8888/api/user/login/kakao/authorize';
    };
    const naverLogin = (): void => {
        window.location.href = 'http://13.124.147.68:8888/api/user/login/naver';
    };

    return (
        <div className="section">
            <div className="login-wrapper">
                <h1 id="login-h1">안녕하세요!</h1>

                <GoogleLoginBtn
                    style={{ marginTop: '20%' }}
                    onClick={() => googleLogin()}
                    align="center"
                    className="googleLoginBtn"
                ></GoogleLoginBtn>
                {/* <GoogleLoginButton /> */}

                <KakaoLoginBtn
                    style={{ marginTop: '2%' }}
                    onClick={(): void => kakaoLogin()}
                    align="center"
                    className="kakaoLoginBtn"
                />

                <NaverLoginBtn
                    style={{ marginTop: '2%' }}
                    onClick={(): void => naverLogin()}
                    align="center"
                    className="naverLoginBtn"
                />
            </div>
        </div>
    );
}
