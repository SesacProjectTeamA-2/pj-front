import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/scss/pages/join.scss';
import Character from '../../components/myPage/Character';

export default function Join() {
    return (
        <div>
            <h1 className="title">회원 가입</h1>

            <div className="label">닉네임</div>
            <input type="text" />

            <div className="label">관심 분야</div>
            <div className="maximum">최대 3개</div>

            <h5 className="label character">캐릭터를 선택해주세요.</h5>
            <Character />

            <br />
            <Link to="/main">
                <button>가입 완료 !</button>
            </Link>
        </div>
    );
}
