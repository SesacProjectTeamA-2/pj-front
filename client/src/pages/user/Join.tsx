import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/pages/user/join.scss';

import Nickname from '../../components/common/Nickname';
import CharacterList from '../../components/common/CharacterList';
import InterestedList from '../../components/common/InterestedList';

export default function Join() {
    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);

    return (
        <div className="section">
            <h1 className="join-title">회원 가입</h1>

            <form action="/api/user/register" method="post">
                <div className="nickname-sub-div">
                    <h3 id="nickname-h3">닉네임</h3>
                    {/* 수정 버튼 => 인풋으로 돌려도 됨 */}
                    <Nickname />
                </div>

                <div className="interested-div">
                    <div className="interested-div-one">
                        <h3>관심 분야</h3>
                        <p>최대 3개</p>
                    </div>
                    <div className="interested-div-two">
                        <InterestedList
                            selectedArr={selectedArr}
                            setSelectedArr={setSelectedArr}
                            num={3}
                        />
                    </div>
                </div>

                <div className="character-sub-div">
                    <h3>캐릭터를 선택해주세요.</h3>
                    <CharacterList />
                </div>
            </form>

            <Link to="/main">
                <button id="join-btn" className="btn-fixed">
                    시작하기
                </button>
            </Link>
        </div>
    );
}
