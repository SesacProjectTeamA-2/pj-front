import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/scss/pages/user/join.scss';

import Nickname from '../../components/common/Nickname';
import CharacterList from '../../components/common/CharacterList';
import InterestedList from '../../components/common/InterestedList';

export default function Join() {
    // 전달할 사용자 가입 정보
    interface userInfoItf {
        uEmail: string;
        uName: string;
        uCharImg: string | null;
        // uCategory1: string | null;
        // uCategory2: string | null;
        // uCategory3: string | null;
    }

    // 관심사 배열
    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);

    // 1. 회원가입 url에서 user 정보 가져오기
    const curPath: string = window.location.href;
    const urlParams: any = new URLSearchParams(curPath);
    // console.log('params', urlParams);

    const uEmail: string = urlParams.get('userEmail');
    const uName: string = urlParams.get('userName');
    // console.log(uEmail, uName);

    // 2. 사용자 선택 캐릭터 이미지 값 설정
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
        null
    );
    const selectCharacter = (characterSrc: string): void => {
        setSelectedCharacter(characterSrc);
    };

    const userInfo: userInfoItf = {
        uEmail: uEmail,
        uName: uName,
        uCharImg: selectedCharacter,
        // uCategory1: selectedArr[0],
        // uCategory2: selectedArr[1],
        // uCategory3: selectedArr[2],
    };

    const register = (): void => {
        console.log('register!');
        axios
            .post('http://localhost:8888/api/user/register', userInfo)
            .then((res) => {
                console.log(res.data);
            });
    };

    return (
        <div className="section">
            <h1 className="join-title">회원 가입</h1>

            {/* <form action="/api/user/register" method="post"> */}
            <div className="nickname-sub-div">
                <h3 id="nickname-h3">닉네임</h3>
                <Nickname uName={uName} />
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
                <CharacterList
                    selectedCharacter={selectedCharacter}
                    setSelectedCharacter={setSelectedCharacter}
                    selectCharacter={selectCharacter}
                />
            </div>
            {/* </form> */}

            <Link to="/main">
                <button
                    id="join-btn"
                    className="btn-fixed"
                    onClick={() => register()}
                >
                    시작하기
                </button>
            </Link>
        </div>
    );
}
