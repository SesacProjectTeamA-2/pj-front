import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../../styles/scss/pages/group/groupCreate.scss';

import MissionAddModal from '../../components/common/modal/MissionAddModal';
import InterestedList from '../../components/common/InterestedList';
import Dday from '../../components/common/Dday';

export default function GroupEdit() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const [addModalSwitch, setAddModalSwitch] = useState(false);

    const [selectedArr, setSelectedArr] = useState<string[]>([]);

    const [input, setInput] = useState({
        gSeq: 1, // 추후 수정
        gName: '',
        gDesc: '',
        gDday: '',
        gCategory: '',
        gCoverImg: '',
        gMaxMem: 1,
        missionArray: '',
    });

    const { gName, gDesc, gDday, gCategory, gCoverImg, gMaxMem, missionArray } =
        input;

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const missionAddHandler = () => {
        setAddModalSwitch(true);
    };

    //] 그룹 수정 요청
    const groupEditHandler = async () => {
        const res = await axios.patch(
            `${process.env.REACT_APP_DB_HOST}/group`,
            input,
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );
        console.log(res.data);

        // [추후] input 입력 안했을 시, 로직

        // [추후] 수정한 모임 홈 화면으로 이동
    };

    //=== 관심 분야 ===
    interface Interested {
        id: string;
        category: string;
        val: string;
    }
    const interestedArr: Interested[] = [
        { id: 'tag-radio-ex', category: '운동', val: 'ex' },
        { id: 'tag-radio-re', category: '독서', val: 're' },
        { id: 'tag-radio-lan', category: '언어', val: 'lan' },
        { id: 'tag-radio-cert', category: '자격증', val: 'cert' },
        { id: 'tag-radio-st', category: '스터디', val: 'st' },
        { id: 'tag-radio-eco', category: '경제', val: 'eco' },
        { id: 'tag-radio-it', category: 'IT', val: 'it' },
        { id: 'tag-radio-etc', category: '기타', val: 'etc' },
    ];

    const [selectedInterestId, setSelectedInterestId] = useState('');

    // 분야 타입 선택
    const interestTypeHandler = (id: string) => {
        setSelectedInterestId(id);
    };

    //=== 미션 ===
    interface Mission {
        id: number;
        mTitle: string;
        mContent: string;
        mLevel: number;
        map: string;
        completed: boolean;
    }

    const [missionList, setMissionList] = useState<Mission[]>([]);

    return (
        <div className="section group-create-contianer title5">
            <div className="title2">모임 수정하기</div>
            <div className="group-create-content group-create-title">
                <div className="title-wrapper">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="filled-basic"
                            label="모임명"
                            variant="filled"
                            onChange={onChange}
                            name="gName"
                        />
                        {/* <TextField
                            id="standard-basic"
                            label="모임명"
                            variant="standard"
                        /> */}
                    </Box>
                </div>
                <div className="group-create-img">
                    <div className="group-img-title">대표 이미지</div>
                    <Button
                        style={{
                            backgroundColor: '#ed8d8d',
                            fontSize: '1rem',
                        }}
                        variant="contained"
                    >
                        추가
                    </Button>
                    {/* [추후] gCoverImg 이미지 파일 추가 */}
                </div>
            </div>
            <div className="group-create-content">
                <div>분야</div>
                {interestedArr.map((interest: Interested) => {
                    return (
                        <div key={interest.id}>
                            <label
                                onClick={() => interestTypeHandler(interest.id)}
                                className="tag-btn"
                                style={{
                                    background:
                                        selectedInterestId === interest.id
                                            ? '#ED8D8D'
                                            : 'white',
                                    color:
                                        selectedInterestId === interest.id
                                            ? 'white'
                                            : 'gray',
                                    border:
                                        selectedInterestId === interest.id
                                            ? '1px solid #ED8D8D'
                                            : ' #acacac',
                                }}
                            >
                                <input
                                    type="radio"
                                    name="gCategory"
                                    className="tag-radio"
                                    value={interest.val}
                                    onChange={onChange}
                                />
                                {interest.category}
                            </label>
                        </div>
                    );
                })}
            </div>
            <div className="group-create-content description-container">
                <div>모임 설명</div>
                <textarea
                    className="description"
                    placeholder="500자 이내로 입력하세요."
                    onChange={onChange}
                    name="gDesc"
                ></textarea>
            </div>

            <div className="group-create-content">
                <div>제한 인원</div>
                <input
                    defaultValue={1}
                    className="limit-number"
                    type="number"
                    onChange={onChange}
                    name="gMaxMem"
                />
                <div className="max-number">최대 00명</div>
            </div>

            <div className="group-create-content mission-wrapper">
                <div>Mission</div>
                <div className="mission-container">
                    <div onClick={missionAddHandler}>
                        <img src="/asset/icons/plus.svg" />
                    </div>
                    <div>팀원들과 어떤 것을 하고 싶나요 ?</div>
                    {/* [추후] 미션 추가되면 리스트 형식으로 추가 */}
                </div>
            </div>

            {addModalSwitch ? (
                <MissionAddModal
                    addModalSwitch={addModalSwitch}
                    setAddModalSwitch={setAddModalSwitch}
                    action={'미션수정'}
                    missionList={missionList}
                    setMissionList={setMissionList}
                    setInput={setInput}
                    input={input}
                    gDday={gDday}
                />
            ) : null}

            {/* <Link to="/group/home/1"> */}
            <button className="btn-fixed" onClick={groupEditHandler}>
                모임 수정완료 !
            </button>
            {/* </Link> */}
        </div>
    );
}
