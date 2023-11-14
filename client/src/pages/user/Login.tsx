import React from 'react';

import '../../styles/scss/pages/user/login.scss';

import GoogleLoginBtn from '../../components/login/GoogleLoginBtn';
import NaverLoginBtn from '../../components/login/NaverLoginBtn';
import KakaoLoginBtn from '../../components/login/KakaoLoginBtn';
import TesterLoginBtn from '../../components/login/TesterLoginBtn';
import { Button } from '@mui/material';

export default function Login() {
    const testLogin = (testNum: number): void => {
        window.location.href = `${process.env.REACT_APP_DB_HOST}/user/login/test?testNum=${testNum}`;
    };
    const googleLogin = (): void => {
        window.location.href = `${process.env.REACT_APP_DB_HOST}/user/login/google`;
    };

    const kakaoLogin = (): void => {
        window.location.href = `${process.env.REACT_APP_DB_HOST}/user/login/kakao/authorize`;
    };
    const naverLogin = (): void => {
        window.location.href = `${process.env.REACT_APP_DB_HOST}/user/login/naver`;
    };

    return (
        <div className="section">
            <div className="login-wrapper">
                <p id="login-p">Motimates와 목표를 이뤄볼까요?</p>

                <TesterLoginBtn
                    style={{ marginTop: '20%', width: '60%' }}
                    onClick={() => testLogin(1)}
                    // onClick={() => testLogin(2)}
                    align="center"
                    className="loginBtn"
                ></TesterLoginBtn>

                <GoogleLoginBtn
                    style={{ marginTop: '2%', width: '60%' }}
                    onClick={() => googleLogin()}
                    align="center"
                    className="loginBtn"
                ></GoogleLoginBtn>

                <KakaoLoginBtn
                    style={{ marginTop: '2%', width: '60%' }}
                    onClick={(): void => kakaoLogin()}
                    align="center"
                    className="loginBtn"
                />

                <NaverLoginBtn
                    style={{ marginTop: '2%', width: '60%' }}
                    onClick={(): void => naverLogin()}
                    align="center"
                    className="loginBtn"
                />
            </div>
        </div>
    );
}
