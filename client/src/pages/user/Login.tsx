import React from 'react';
import axios from 'axios';

import '../../styles/scss/pages/user/login.scss';
import { Link } from 'react-router-dom';

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
            <button onClick={onClick}>구글</button>
            <button>네이버</button>
            <button>카카오</button>
            <button>
                <Link to="/join">회원 가입</Link>
            </button>
        </div>
    );
}
