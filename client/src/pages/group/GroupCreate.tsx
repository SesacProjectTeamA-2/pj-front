import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../../styles/scss/pages/group/groupCreate.scss';

import InterestedList from '../../components/common/InterestedList';
import MissionAddModal from '../../components/common/modal/MissionAddModal';
import Dday from '../../components/common/Dday';

export default function GroupCreate() {
    const [addModalSwitch, setAddModalSwitch] = useState(false);

    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);

    const [input, setInput] = useState({
        gName: '',
        gDesc: '',
        gDday: '',
        gCategory: '',
        gCoverImg: '',
        mTitle: [],
        mContent: [],
        mLevel: 1,
    });

    const {
        gName,
        gDesc,
        gDday,
        gCategory,
        gCoverImg,
        mTitle,
        mContent,
        mLevel,
    } = input;

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const missionAddHandler = () => {
        setAddModalSwitch(true);
    };

    console.log('!!!!!!!!', selectedArr);

    const testGroup = {
        gName: 'Node 스터디 (중복 안됩니다!)',
        gDesc: 'Node.js 스터디 모임입니다!',
        gDday: '2023-10-28',
        gMaxMem: 10,
        gCategory: 'st',
        gCoverImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1_J07ruu0QuBhaD6HSDkvbQdW_OOENXmiA&usqp=CAU',
        mTitle: ['Node.js 강의 듣기'],
        mContent: ['Node.js 강의 쳅터 1 듣고 오기'],
        mLevel: 5,
    };

    const groupCreateHandler = async (newGroup: any) => {
        console.log(newGroup);
        // console.log(`${process.env.REACT_APP_DB_HOST}`);
        // const res = await axios.post(
        //     `${process.env.REACT_APP_DB_HOST}/group`,
        //     newGroup
        // );
        // console.log(res.data);
    };

    //; /group
    //] POST
    //-- req
    // {
    //     "gName": "Node 스터디 (중복 안됩니다!)",
    //     "gDesc": "Node.js 스터디 모임입니다!",
    //     "gDday": "2023-10-28",
    //     "gMaxMem": 10,
    //     "gCategory": "st",
    //     "gCoverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1_J07ruu0QuBhaD6HSDkvbQdW_OOENXmiA&usqp=CAU",
    //     "mTitle": "Node.js 강의 듣기",
    //     "mContent": "Node.js 강의 쳅터 1 듣고 오기",
    //     "mLevel": 5
    //   }

    //-- res
    // {
    //     "isSuccess": true,
    //     "msg": "성공"
    //   }

    //] PATCH
    //-- req
    //     {
    //   "gSeq": 1,
    //   "gName": "정보처리기사 실기 대비반 (중복 안됩니다!)",
    //   "gDesc": "정보처리기사 실기 대비 오프라인 모임입니다!",
    //   "gDday": "2023-10-31",
    //   "gMaxMem": 20,
    //   "gCategory": "cert",
    //   "gCoverImg": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVnwfCZtvVrf0NdXWT4YQp_aVEFlZ5-kuUfw&usqp=CAU"
    // }

    //-- res
    // {
    //     "isSuccess": true,
    //     "msg": "성공"
    //   }

    //] DELETE
    //-- req
    // {
    //   "gSeq": 1
    // }

    //-- res
    // {
    //     "isSuccess": true,
    //     "msg": "성공"
    //   }

    return (
        <div className="section group-create-contianer title5">
            <div className="title2">어떤 모임을 생성하고 싶나요 ?</div>
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
                        />
                        {/* <TextField
                            id="standard-basic"
                            label="모임명"
                            variant="standard"
                        /> */}
                    </Box>
                </div>
                <div className="group-create-img">
                    <div>대표 이미지</div>
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
                <InterestedList
                    selectedArr={selectedArr}
                    setSelectedArr={setSelectedArr}
                    num={1}
                />
            </div>

            <div className="group-create-content description-container">
                <div>모임 설명</div>
                <textarea
                    className="description"
                    placeholder="500자 이내로 입력하세요."
                    onChange={onChange}
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

            <div className="group-create-content">
                <div className="dday-title">마감일</div>
                <Dday />
                {/* [추후] 디데이값 받아오기 */}
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
                    action={'미션생성'}
                />
            ) : null}

            {/* <Link to="/group/home/1"> */}
            <button
                className="btn-fixed"
                onClick={() => groupCreateHandler(testGroup)}
            >
                모임 시작하기 !
            </button>
            {/* </Link> */}
        </div>
    );
}
