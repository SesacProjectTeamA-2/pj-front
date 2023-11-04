import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import '../../styles/scss/pages/myPage.scss';

import Nickname from '../../components/common/Nickname';
import Introduce from '../../components/myPage/Introduce';
import CharacterList from '../../components/common/CharacterList';
import InterestedList from '../../components/common/InterestedList';
import Phrase from '../../components/myPage/Phrase';
import SetMainList from '../../components/myPage/SetMainList';
import ProfilePic from '../../components/myPage/ProfilePic';
import PsnCoverImg from '../../components/myPage/PsnCoverImg';
import Quit from '../../components/myPage/Quit';

export default function MyPage() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser'); // 토큰 값

    // 사용자 데이터 가져오기
    const getUserData = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/api/user/mypage`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('user', res);
            });
    };
    useEffect(() => {
        getUserData();
    }, []);

    /////////////////////////////////////

    // 1. 닉네임
    const [input, setInput] = useState<string | number>('');
    // console.log('닉네임', input);

    // 1-2. 닉네임 중복검사 결과
    const [isUsing, setIsUsing] = useState<boolean>(true);

    // 1-3. 닉네임 중복검사 메시지
    const [msg, setMsg] = useState<string>('');

    // 2. 자기소개
    const [content, setContent] = useState<string | number>('');
    // console.log('자기소개', content);

    // 3. 선택한 캐릭터
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
        null
    );
    const selectCharacter = (characterSrc: string): void => {
        setSelectedCharacter(characterSrc);
    };
    // console.log('캐릭터 src', selectedCharacter);

    // 4. 관심사 배열
    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);
    // console.log(selectedArr[0]);
    // console.log(selectedArr[1]);
    // console.log(selectedArr[2]);

    // 전체 그룹 불러와야 함

    // 5. 선택한 dDay id
    const [dDayPin, setDdayPin] = useState<number | null>(0);
    const handleCheckDday = (groupId: number): void => {
        setDdayPin(groupId);
    };
    // console.log('dDayPin', dDayPin);

    // 6. 선택한 그룹 id
    const [donePin, setDonePin] = useState<number | null>(0);
    const handleCheckDone = (groupId: number): void => {
        setDonePin(groupId);
    };
    // console.log('donePin', donePin);

    //  7. dDay 설정: y/ 설정하지 않았을 경우, 빈값(null)"
    const [checkDday, setCheckDday] = useState<string | null>(null);
    useEffect(() => {
        dDayPin === 0 && donePin === 0 ? setCheckDday(null) : setCheckDday('y');
        // console.log(checkDday);
    }, [dDayPin, donePin]);

    // 8. 명언 모드
    // 8-1. 적은 명언 내용
    const [phraseCtt, setPhraseCtt] = useState<string | number>(
        '여름은 가을로부터 떨어진다'
    );
    // console.log('명언', phraseCtt);

    // 8-2. 선택한 명언 모드
    const [phraseModeBtnVal, setPhraseModeBtnVal] = useState<string>('');
    const phraseSelect = (e: React.ChangeEvent<HTMLElement>): void => {
        const phraseModeBtn: HTMLElement = e.target as HTMLElement;
        setPhraseModeBtnVal(phraseModeBtn.getAttribute('value') || '');
    };
    // useEffect(() => {
    //     console.log('phraseModeBtnVal', phraseModeBtnVal);
    // }, [phraseModeBtnVal]);

    // 1. 사용자 데이터 수정
    interface patchedUserDataItf {
        uName: string;
        uDesc: string;
        uPhrase: string;
        uCategory1: string;
        uCategory2: string;
        uCategory3: string;
        //   설정 안 했을 경우 null
        uSetDday: string | null;
        uMainDday: number;
        uMainGroup: number;
        result: boolean;
        message: boolean;
    }
    // const patchedUserData = {
    //     //캐릭터값, 대표사진 필요
    //     uName: input,
    //     uDesc: content,
    //     uPhrase:
    //         '작성하지 않을 시(null), 랜덤 명언/ 작성할 경우 해당 문구 출력',
    //     uCategory1: selectedArr[0],
    //     uCategory2: selectedArr[1],
    //     uCategory3: selectedArr[2],
    //     uSetDday: checkDday,
    //     uMainDday: dDayPin,
    //     uMainGroup: donePin,
    //     result: 'false(닉네임이 중복되는 경우)',
    //     message: isUsing,
    //     //  'false(이미 존재하는 닉네임입니다)/ true(회원정보 수정 완료)',
    // };

    // const patchUserData = async () => {
    //     const res = await axios
    //         .patch(
    //             `${process.env.REACT_APP_DB_HOST}/api/user`,
    //             patchedUserData,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${uToken}`,
    //                 },
    //             }
    //         )
    //         .then((res) => {
    //             console.log('user', res);
    //         });
    // };
    // useEffect(() => {
    //     patchUserData();
    // }, []);

    // 2. 회원 탈퇴
    // DELETE 요청 함수 작성 필요 + Quit에 prop으로 넘기기

    return (
        <div className="section">
            {/* 로그인 안 했을 때: 로그인 버튼 보임 + 채팅 버튼 안 보임 <br></br>
                로그인 했을 때: 로그인 버튼 안 보임 + 채팅 버튼/프로필 보임
                <br></br>ㄴ 관리자일 때: Management 버튼 추가로 보임 */}
            <div className="myPage-div-one">
                <div className="myPage-div-one-one">
                    <ProfilePic />
                </div>
                <div className="myPage-div-one-two">
                    <Nickname input={input} setInput={setInput} />
                    {msg}
                    <Introduce content={content} setContent={setContent} />
                </div>
            </div>

            <div className="myPage-div-two">
                <br></br>
                <h3 className="myPage-p">내 캐릭터</h3>
                <CharacterList
                    selectedCharacter={selectedCharacter}
                    setSelectedCharacter={setSelectedCharacter}
                    selectCharacter={selectCharacter}
                />
            </div>

            <div className="myPage-div-three">
                <div className="myPage-div-three-one">
                    <h3 className="myPage-p">관심분야</h3>
                    <p>최대 3개</p>
                    <InterestedList
                        selectedArr={selectedArr}
                        setSelectedArr={setSelectedArr}
                        num={3}
                    />
                </div>
                <div className="myPage-div-three-two">
                    <h3 className="myPage-p">명언</h3>
                    <Phrase
                        phraseCtt={phraseCtt}
                        setPhraseCtt={setPhraseCtt}
                        phraseModeBtnVal={phraseModeBtnVal}
                        setPhraseModeBtnVal={setPhraseModeBtnVal}
                        phraseSelect={phraseSelect}
                    />
                </div>
            </div>

            <div className="myPage-div-four">
                <h3 className="myPage-h3">메인화면 설정</h3>
                <SetMainList
                    setDdayPin={setDdayPin}
                    dDayPin={dDayPin}
                    handleCheckDday={handleCheckDday}
                    setDonePin={setDonePin}
                    donePin={donePin}
                    handleCheckDone={handleCheckDone}
                />
                <PsnCoverImg />
            </div>

            <div className="myPage-div-five">
                <div className="myPage-div-five-one">
                    <h3 className="myPage-p">회원탈퇴</h3>
                </div>
                <div className="myPage-div-five-two">
                    <Quit />
                </div>
            </div>

            <div className="myPage-div-six">
                <button
                    className="btn-fixed"
                    id="myPage-edit-btn"
                    type="submit"
                >
                    수정 완료
                </button>
            </div>
        </div>
    );
}
