import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/pages/join.scss';

import Nickname from '../../components/common/Nickname';
import CharacterList from '../../components/common/CharacterList';
import InterestedList from '../../components/common/InterestedList';

export default function Join() {
    return (
        <div className="section">
            <h1 className="join-title">회원 가입</h1>
            <br />

            <div className="nickname-sub-div">
                <h3>닉네임</h3>
                <Nickname />
            </div>
            <br />

            <div className="interested-div">
                <h3>관심 분야</h3>
                <p>최대 3개</p>
                <InterestedList />
            </div>
            <br />

            <div className="character-sub-div">
                <h3>캐릭터를 선택해주세요.</h3>
                <CharacterList />
            </div>
            <br />

            <Link to="/main">
                <button id="join-btn">시작하기</button>
            </Link>
        </div>
    );
}
