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
import { Divider } from '@mui/material';
// import SetMainList from '../../components/myPage/SetMainList';
// import PsnCoverImg from '../../components/myPage/PsnCoverImg';

export default function MyPage() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser'); // 토큰 값

    // 1. 사용자 데이터 가져오기
    const getUserData = async () => {
        await axios
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
                if (userImg !== null) {
                    // 사진 값 있으면 그 값으로
                    setUserImgSrc(userImg);
                } else {
                    // 없으면 디폴트 사진으로 (hoisting)
                    setUserImgSrc('/asset/images/user.svg');
                }
                setInput(nickname);
                setContent(coverLetter);
                // 선택 안 하면 undefined 들어있어서 선택이 안 됨
                //값 있을 때만 실행하도록 조건문 넣었음
                //myPage getUserInfo: undefined가 껴있으면(1개 | 2개 선택된 상태) undefined에 값 들어갈 수 있게 해야
                // if (category1 && category2 && category3) {

                // 수정 된 값 반영이 오는 데이터에 안 되고 있음
                const ctgrArr = [category1, category2, category3];
                console.log('ctgr', ctgrArr);
                for (let ctgr of ctgrArr) {
                    if (ctgr === 'undefined') {
                        console.log('ctgr', ctgr);
                    }
                }
                setSelectedArr([category1, category2, category3]);
                // }

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

    const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formData = new FormData(); // 사진 담을 formData 객체 생성
        // console.log('e.target.files ', e.target.files);

        if (e.target.files && e.target.files[0]) {
            formData.append('image', e.target.files[0]);

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
                    getUserData(); // 바로 수정된 프로필 사진으로 동기화
                });
        } catch (err) {
            console.log(err);
        }
    };

    // 1. 닉네임
    const [input, setInput] = useState<string>('');

    // 2. 자기소개
    const [content, setContent] = useState<string>('');

    // 3. 선택한 캐릭터
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
        null
    );
    const selectCharacter = (characterSrc: string): void => {
        setSelectedCharacter(characterSrc);
    };

    // 4. 관심사 배열
    // 선택 값 배열
    const [selectedArr, setSelectedArr] = useState<Array<any>>(
        new Array(3).fill(undefined)
    );
    useEffect(() => {
        if (setSelectedArr.length !== 0) {
            setSelectedArr(selectedArr);
        }
    }, [selectedArr, setSelectedArr]);
    // 여기선 값 잘 반영 됨
    // useEffect(() => {
    //     console.log(selectedArr);
    //     console.log(selectedArr.length);
    // }, [selectedArr]);

    // 5. 선택한 dDay id
    const [dDayPin, setDdayPin] = useState<number>(0);
    const handleCheckDday = (groupId: number): void => {
        setDdayPin(groupId);
    };

    // 6. 선택한 그룹 id
    const [donePin, setDonePin] = useState<number>(0);
    const handleCheckDone = (groupId: number): void => {
        setDonePin(groupId);
    };

    //  7. dDay 설정: y | 설정하지 않았을 경우: 빈값(null)
    const [checkDday, setCheckDday] = useState<string | null>(null);
    useEffect(() => {
        dDayPin === 0 && donePin === 0 ? setCheckDday(null) : setCheckDday('y');
    }, [dDayPin, donePin]);

    // 8. 명언 모드
    // 8-1. 적은 명언 내용
    const [phraseCtt, setPhraseCtt] = useState<string | null>('');

    // 8-2. 선택한 명언 모드
    const [phraseModeBtnVal, setPhraseModeBtnVal] =
        useState<string>('recommend');
    const phraseSelect = (e: React.ChangeEvent<HTMLElement>): void => {
        const phraseModeBtn: HTMLElement = e.target as HTMLElement;
        setPhraseModeBtnVal(phraseModeBtn.getAttribute('value') || '');
    };

    useEffect(() => {
        if (phraseModeBtnVal === 'recommend') {
            // 추천 모드일 때 빈 값을 보냄
            setPhraseCtt(null);
        }
    }, [phraseModeBtnVal]);

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
    }
    const patchedUserData: patchedUserDataItf = {
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
    };
    useEffect(() => {
        console.log('patchedUserData >>>>', patchedUserData);
    });

    const patchUserData = async () => {
        try {
            await axios
                .patch(
                    `${process.env.REACT_APP_DB_HOST}/user/mypage`,

                    patchedUserData,
                    {
                        headers: {
                            Authorization: `Bearer ${uToken}`,
                        },
                    }
                )
                .then((res) => {
                    toast.success(res.data.message, {
                        duration: 2000,
                    });
                });
        } catch (err) {
            console.log(err);
        }
    };

    // const checkDuplicate = (): void => {
    //     axios
    //         .post(`${process.env.REACT_APP_DB_HOST}/user/register`, input, {
    //             headers: {
    //                 Authorization: `Bearer ${uToken}`,
    //             },
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         });
    // };

    // 3. 회원 탈퇴
    // DELETE 요청 함수 작성 필요 + Quit에 prop으로 넘기기

    return (
        <div className="section">
            {/* 로그인 안 했을 때: 로그인 버튼 보임 + 채팅 버튼 안 보임 <br></br>
                로그인 했을 때: 로그인 버튼 안 보임 + 채팅 버튼/프로필 보임
                <br></br> 관리자일 때: Management 버튼 추가로 보임 */}
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

                <Divider style={{ width: '80%', margin: '2rem' }} />

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

            <Divider style={{ width: '80%', marginBottom: '4rem' }} />

            <div className="myPage-div-five">
                <div className="myPage-div-five-one">
                    <h3 className="myPage-p">회원탈퇴</h3>
                </div>
                <div className="myPage-div-five-two">
                    <Quit />
                </div>
            </div>

            {/* <div className="myPage-div-six"> */}
            <div className="btn-fixed-wrapper">
                <button
                    className="btn-fixed"
                    id="myPage-edit-btn"
                    onClick={() => patchUserData()}
                >
                    수정 완료
                </button>
            </div>
            {/* </div> */}
        </div>
    );
}
