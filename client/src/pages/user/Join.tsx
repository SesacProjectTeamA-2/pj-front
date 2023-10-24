import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/scss/pages/join.scss';

export default function Join() {
    return (
        <div>
            <h1>회원 가입</h1>

            <div>닉네임</div>
            <input type="text" />

            <div>관심 분야</div>

            <h5>캐릭터를 선택해주세요.</h5>
            <div>
                <img src="/asset/images/rabbit2.png" />
                <img src="/asset/images/dog2.png" />
                <img src="/asset/images/cat2.svg" />
                <img src="/asset/images/sqr2.svg" />
            </div>

            <br />
            <Link to="/main">
                <button>가입 완료 !</button>
            </Link>
        </div>
    );
}
