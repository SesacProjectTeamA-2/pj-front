import React, { useState } from 'react';
import 'animate.css';
import '../../styles/scss/pages/user/login.scss';

import GoogleLoginBtn from '../../components/login/GoogleLoginBtn';
import NaverLoginBtn from '../../components/login/NaverLoginBtn';
import KakaoLoginBtn from '../../components/login/KakaoLoginBtn';

export default function Login() {
    const testLogin1 = (testNum: number): void => {
        window.location.href = `${process.env.REACT_APP_DB_HOST}/user/login/test?testNum=${testNum}`;
    };

    const testLogin2 = (testNum: number): void => {
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

    const [isHingeAnimated, setIsHingeAnimated] = useState(false);

    const toggleHingeAnimation = () => {
        setIsHingeAnimated(!isHingeAnimated);
    };

    return (
        <div className="section">
            <p
                id="welcome"
                onClick={toggleHingeAnimation}
                className={`${isHingeAnimated ? 'animate__hinge' : ''}`}
            >
                welcome
            </p>
            <div className="login">
                <div className="form">
                    <form className="login-form">
                        <button
                            className="guest-btn"
                            onClick={() => testLogin1(1)}
                        >
                            GUEST 1
                        </button>

                        <button
                            className="guest-btn"
                            onClick={() => testLogin2(2)}
                        >
                            GUEST 2
                        </button>

                        <GoogleLoginBtn
                            onClick={() => googleLogin()}
                            align="center"
                            className="loginBtn"
                        ></GoogleLoginBtn>

                        <KakaoLoginBtn
                            onClick={(): void => kakaoLogin()}
                            align="center"
                            className="loginBtn"
                        />

                        <NaverLoginBtn
                            onClick={(): void => naverLogin()}
                            align="center"
                            className="loginBtn"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}
