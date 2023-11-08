import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import toast from 'react-hot-toast';

import '../../styles/scss/pages/myPage.scss';

import Nickname from '../../components/common/Nickname';
import Introduce from '../../components/myPage/Introduce';
import CharacterList from '../../components/common/CharacterList';
import InterestedList from '../../components/common/InterestedList';
import Phrase from '../../components/myPage/Phrase';
import ProfilePic from '../../components/myPage/ProfilePic';
import Quit from '../../components/myPage/Quit';
import SetMainList from '../../components/myPage/SetMainList';
import PsnCoverImg from '../../components/myPage/PsnCoverImg';

export default function MyPage() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser'); // 토큰 값

    // 1. 사용자 데이터 가져오기
    const getUserData = async () => {
        await axios
            // .get('http://localhost:8888/api/user/mypage', {
            .get(`${process.env.REACT_APP_DB_HOST}/user/mypage`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('user', res.data);
                const {
                    userImg,
                    nickname,
                    coverLetter,
                    character,
                    category1,
                    category2,
                    category3,
                    mainDday,
                    phrase,
                    setDday,
                    setMainGroup,
                } = res.data;

                // 데이터 베이스 내 정보 화면에 띄우기
                if (userImg !== '0') {
                    // 사진 값 있으면 그 값으로
                    setUserImgSrc(userImg);
                } else {
                    // 없으면 디폴트 사진으로 (hoisting)
                    setUserImgSrc(userImgSrc);
                }
                setInput(nickname);
                setContent(coverLetter);
                if (category1 && category2 && category3) {
                    // 선택 안 하면 null 값 들어있어서 값 있을 때만 실행하도록 조건문 넣었음
                    setSelectedArr([category1, category2, category3]);
                }
                setSelectedCharacter(character);

                setPhraseCtt(phrase);
                setDdayPin(mainDday);
                setCheckDday(setDday);
                setDonePin(setMainGroup);
            });
    };
    useEffect(() => {
        getUserData();
    }, []);

    //////////// props, 데이터 선언 /////////////
    // 0. 사용자 이미지
    const [userImgSrc, setUserImgSrc] = useState<any>('/asset/images/user.svg'); // 문자열 변수
    // console.log('바꾸기 전 userImgSrc', userImgSrc);

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // if (e.target.files && e.target.files[0]) {
        //     // setUserImgSrc(e.target.files[0]); // 바꾼 이미지 값으로
        //     console.log('바꾼 후 UserImgSrc >> ', userImgSrc);
        // }

        const formData = new FormData(); // 사진 담을 formData 객체 생성
        // console.log('e.target.files ', e.target.files);

        if (e.target.files && e.target.files[0]) {
            formData.append('image', e.target.files[0]);
            formData.append('apple', 'apple');

            for (let val of formData.values()) {
                // => tsConfig ver : es6 변경
                console.log('formData ', val);
            }
            sendImg(formData);
        }
    };

    const sendImg = (formData: any): void => {
        const cookie = new Cookies();
        const uToken = cookie.get('isUser'); // 토큰 값

        try {
            axios
                .patch(
                    `${process.env.REACT_APP_DB_HOST}/user/mypage/userImg`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${uToken}`,
                        },
                    }
                )
                .then((res) => {
                    console.log('post', res.data);
                    getUserData(); // 이거 해야 바로 수정된 프로필 사진으로 동기화 : 하지만 저장되지 않은 다른 값들은 초기화 돼서 옴 ㅜ
                });
        } catch (err) {
            console.log(err);
        }
    };

    // 1. 닉네임
    const [input, setInput] = useState<string>('');
    // console.log('닉네임', input);

    // 2. 자기소개
    const [content, setContent] = useState<string>('');
    // console.log('자기소개', content);

    // 3. 선택한 캐릭터
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
        null
    );
    const selectCharacter = (characterSrc: string): void => {
        setSelectedCharacter(characterSrc);
    };
    // console.log('캐릭터 src MY_PAGE', selectedCharacter);

    // 4. 관심사 배열
    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);
    // console.log(selectedArr[0]);
    // console.log(selectedArr[1]);
    // console.log(selectedArr[2]);
    useEffect(() => {
        console.log(selectedArr);
    }, [selectedArr]);

    // 5. 선택한 dDay id
    const [dDayPin, setDdayPin] = useState<number>(0);
    const handleCheckDday = (groupId: number): void => {
        setDdayPin(groupId);
    };
    // console.log('dDayPin', dDayPin);

    // 6. 선택한 그룹 id
    const [donePin, setDonePin] = useState<number>(0);
    const handleCheckDone = (groupId: number): void => {
        setDonePin(groupId);
    };
    // console.log('donePin', donePin);

    //  7. dDay 설정: y/ 설정하지 않았을 경우, 빈값(null)"
    const [checkDday, setCheckDday] = useState<string | null>(null);
    useEffect(() => {
        dDayPin === 0 && donePin === 0 ? setCheckDday(null) : setCheckDday('y');
        // console.log('checkDday', checkDday);
    }, [dDayPin, donePin]);

    // 8. 명언 모드
    // 8-1. 적은 명언 내용
    const [phraseCtt, setPhraseCtt] = useState<string>('');
    // console.log('명언', phraseCtt);

    // 8-2. 선택한 명언 모드
    // 기본값: 내가 적을래요
    const [phraseModeBtnVal, setPhraseModeBtnVal] = useState<string>('self');
    const phraseSelect = (e: React.ChangeEvent<HTMLElement>): void => {
        const phraseModeBtn: HTMLElement = e.target as HTMLElement;
        setPhraseModeBtnVal(phraseModeBtn.getAttribute('value') || '');
    };

    // useEffect(() => {
    //     console.log('phraseModeBtnVal', phraseModeBtnVal);
    // }, [phraseModeBtnVal]);

    //////////////// 수정 | 탈퇴 //////////////////
    // 2. 사용자 데이터 수정

    interface patchedUserDataItf {
        // uImg:any
        uName: string;
        uDesc: string;
        uPhrase: string | null;
        uCategory1: string;
        uCategory2: string;
        uCategory3: string;
        uCharImg: string | null;

        // 제거한 컴포넌트
        uSetDday: string | null;
        uMainDday: number;
        uMainGroup: number;
        // userImg: any;
        // result: boolean;
        // message: boolean;
    }
    const patchedUserData: patchedUserDataItf = {
        // uImg:userImgSrc,
        uName: input,
        uDesc: content,
        uPhrase: phraseCtt,
        uCategory1: selectedArr[0],
        uCategory2: selectedArr[1],
        uCategory3: selectedArr[2],
        uCharImg: selectedCharacter,

        // 제거 컴포넌트
        uSetDday: checkDday,
        uMainDday: 1,
        uMainGroup: 1,
        // uMainDday: dDayPin,
        // uMainGroup: donePin,

        // userImg: formData,
        // result: true,
        // message: true,
        //  'false(이미 존재하는 닉네임입니다)/ true(회원정보 수정 완료)',
    };
    useEffect(() => {
        console.log('patchedUserData >>>>', patchedUserData);
    });

    const patchUserData = async () => {
        try {
            await axios
                .patch(
                    `${process.env.REACT_APP_DB_HOST}/user/mypage`,
                    // 'http://localhost:8888/api/user/mypage',

                    patchedUserData,
                    {
                        headers: {
                            Authorization: `Bearer ${uToken}`,
                            // 'Content-Type': 'multipart/form-data',
                        },
                    }
                )
                .then((res) => {
                    console.log('patched', res.data.message);
                    toast.success(res.data.message);
                    console.log('patchedData2', patchedUserData);
                });
        } catch (err) {
            console.log(err);
        }
    };

    // 3. 회원 탈퇴
    // DELETE 요청 함수 작성 필요 + Quit에 prop으로 넘기기

    return (
        <div className="section">
            {/* 로그인 안 했을 때: 로그인 버튼 보임 + 채팅 버튼 안 보임 <br></br>
                로그인 했을 때: 로그인 버튼 안 보임 + 채팅 버튼/프로필 보임
                <br></br>ㄴ 관리자일 때: Management 버튼 추가로 보임 */}
            <div className="myPage-div-one">
                <div className="myPage-div-one-one">
                    <ProfilePic
                        userImgSrc={userImgSrc}
                        setUserImgSrc={setUserImgSrc}
                        handlerChange={handlerChange}
                        sendImg={sendImg}
                    />
                </div>
                <div className="myPage-div-one-two">
                    <Nickname input={input} setInput={setInput} />
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

            {/* dDay / 커버 이미지 뺌 */}
            {/* <div className="myPage-div-four"> */}
            {/* <h3 className="myPage-h3">메인화면 설정</h3>
                <SetMainList
                    setDdayPin={setDdayPin}
                    dDayPin={dDayPin}
                    handleCheckDday={handleCheckDday}
                    setDonePin={setDonePin}
                    donePin={donePin}
                    handleCheckDone={handleCheckDone}
                /> */}
            {/* <PsnCoverImg /> */}
            {/* </div> */}

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
                    onClick={() => patchUserData()}
                >
                    수정 완료
                </button>
            </div>
        </div>
    );
}
