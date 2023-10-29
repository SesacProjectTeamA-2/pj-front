import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/scss/pages/user/login.scss';

import GoogleLogin from '../../components/login/GoogleLogin';
import NaverLogin from '../../components/login/NaverLogin';
import KakaoLogin from '../../components/login/KakaoLogin';
import { GoogleLoginButton } from 'react-social-login-buttons';

export default function Login() {
    // const onClick = async () => {
    // const res = await axios.get(
    //     `${process.env.REACT_APP_DB_HOST}/user/login/kakao`
    // );
    // console.log(res.data);
    //     console.log('환경변수 >>>', process.env.REACT_APP_DB_HOST);
    // };

    return (
        <div className="section">
            <div className="login-wrapper">
                <h1 id="login-h1">안녕하세요!</h1>
                <GoogleLogin
                    style={{ marginTop: '20%' }}
                    onClick={(): void => console.log('google')}
                    align="center"
                ></GoogleLogin>
                {/* <GoogleLoginButton /> */}
                <KakaoLogin
                    style={{ marginTop: '2%' }}
                    onClick={(): void => console.log('naver')}
                    align="center"
                />
                <NaverLogin
                    style={{ marginTop: '2%' }}
                    onClick={(): void => console.log('naver')}
                    align="center"
                />
                <button id="link-join-btn">
                    <Link to="/join" style={{ textDecoration: 'none' }}>
                        <p>회원이 아니신가요?</p>
                    </Link>
                </button>
            </div>
        </div>
    );
}
