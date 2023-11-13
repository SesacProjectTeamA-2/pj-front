import React from 'react';

import '../../styles/scss/pages/user/login.scss';

import GoogleLoginBtn from '../../components/login/GoogleLoginBtn';
import NaverLoginBtn from '../../components/login/NaverLoginBtn';
import KakaoLoginBtn from '../../components/login/KakaoLoginBtn';
import { Button } from '@mui/material';
// import TesterLoginBtn from '../../components/login/TesterLoginBtn';

export default function Login() {
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
                <h1 id="login-h1">안녕하세요!</h1>
                {/* <TesterLoginBtn
                    style={{ marginTop: '20%' }}
                    onClick={() => googleLogin()}
                    align="center"
                    className="googleLoginBtn"
                ></TesterLoginBtn> */}
                <Button>테스터용 로그인 임시버튼</Button>

                <GoogleLoginBtn
                    style={{ marginTop: '20%' }}
                    onClick={() => googleLogin()}
                    align="center"
                    className="googleLoginBtn"
                ></GoogleLoginBtn>

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
