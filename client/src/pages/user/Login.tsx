import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/scss/pages/user/login.scss';

export default function Login() {
    const onClick = async () => {
        // const res = await axios.get(
        //     `${process.env.REACT_APP_DB_HOST}/user/login/kakao`
        // );
        // console.log(res.data);
        console.log('환경변수 >>>', process.env.REACT_APP_DB_HOST);
    };

    return (
        <div className="section">
            <h1>안녕하세요!</h1>
            {/* <div className="google-btn-div">
            </div>
            <div className="kakao-btn-div">
            </div> 
            <div className="naver-btn-div">
            </div> */}
            <img src="/asset/images/googleLogin-img.png" alt="" className="a" />
            <button className="login-btn" id="google-btn"></button>
            {/* <img src="/asset/images/kakaoLogin-img.png" alt="" className="a" />
            <img src="/asset/images/naverLogin-img.png" alt="" className="a" /> */}

            <button>
                <Link to="/join">회원이 아니신가요?</Link>
            </button>
        </div>
    );
}
