import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../../styles/scss/pages/group/groupCreate.scss';

import MissionAddModal from '../../components/common/modal/MissionAddModal';
import InterestedList from '../../components/common/InterestedList';
import Dday from '../../components/common/Dday';
import { GroupDetailType } from 'src/types/types';
import { Divider, ListItem, ListItemText } from '@mui/material';
import ImgGroupEdit from './ImgGroupEdit';
import SuccessModal from 'src/components/common/modal/SuccessModal';

export default function GroupEdit() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq } = useParams();
    const nvg = useNavigate();

    const [addModalSwitch, setAddModalSwitch] = useState(false);

    const [selectedArr, setSelectedArr] = useState<string[]>([]);

    const missionAddHandler = () => {
        setAddModalSwitch(true);
    };

    //] 그룹 생성 완료 모달창
    const [successModalSwitch, setSuccessModalSwitch] = useState(false);

    const successHandler = () => {
        setSuccessModalSwitch(true);
    };

    //; 모임 세부정보 (GET)
    const [groupDetail, setGroupDetail] = useState<any>({
        // grInformation: '',
        // groupCategory: '',
        // groupCoverImg: '',
        // groupDday: 0,
        // groupMaxMember: 0,
        // groupMission: [],
        // groupName: '',
        // isJoin: false,
        // isLeader: false,
        // memberImg: [],
        // memberNickname: [],
        // result: false,
    });

    const getGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('요청결과', res.data);

                setGroupDetail(res.data);

                const {
                    groupName,
                    grInformation,
                    groupDday,
                    groupCategory,
                    groupCoverImg,
                    groupMaxMember,
                    groupMission,
                } = res.data;

                setInput({
                    gSeq, // 추후 수정
                    gName: groupName,
                    gDesc: grInformation,
                    gDday: groupDday,
                    gCategory: groupCategory,
                    gCoverImg: groupCoverImg,
                    gMaxMem: groupMaxMember,
                    missionArray: groupMission,
                });

                setSelectedInterestId(groupCategory);
                setMissionList(groupMission);
            });
        // setGroupName(groupName);
    };

    useEffect(() => {
        getGroup();
    }, []);

    console.log('그룹 세부사항 GET', groupDetail);
    console.log('날짜 디폴트 설정 전 날짜', groupDetail.gDday);

    // console.log('groupName', groupName); // 이건 잘 찍힘

    // 유효성 검사?: 날짜 미제출 방지를 위한 디폴트 설정
    const today = new Date();
    today.setDate(today.getDate() + 7); // 오늘 날짜로부터 7일 후
    const defaultDday = today.toISOString().split('T')[0];

    const [input, setInput] = useState({
        gSeq,
        gName: '',
        gDesc: '',
        gDday: defaultDday,
        gCategory: '',
        gCoverImg: '',
        gMaxMem: 1,
        missionArray: [],
    });

    console.log('날짜 디폴트 설정 후 날짜', input.gDday);

    const onChange = (e: any) => {
        const { name, value } = e.target;
        // setInput({ ...input, [name]: value });

        // 유효성 검사: 모임명
        if (name === 'gName' && value.length > 15) {
            toast.error('15자 이내의 모임명을 입력해주세요!');

            const slicedInput = value.slice(0, 15);
            setInput({ ...input, [name]: slicedInput });
            e.target.focus();
            return;
        } else {
            setInput({ ...input, [name]: value });
        }

        // 유효성 검사: 모임 설명
        if (name === 'gDesc' && value.length > 500) {
            toast.error('500자 이내의 모임 설명을 입력해주세요!');
            const slicedInput = value.slice(0, 500);
            setInput({ ...input, [name]: slicedInput });
            e.target.focus();
            return;
        } else {
            setInput({ ...input, [name]: value });
        }

        // 유효성 검사: 모임 인원
        if (name === 'gMaxMem') {
            const intValue = parseInt(value, 10); // 입력값을 정수로 변환

            if (isNaN(intValue) || intValue < 1) {
                // 숫자가 아니거나 1 미만인 경우
                toast.error('모임 인원은 1명 이상부터 가능합니다!');
                setInput({ ...input, [name]: 1 }); // 기본값으로 설정
                // 해당 input에 포커스를 이동
                e.target.value = '1'; // 입력값을 1로 설정
                e.target.focus();
                return;
            } else if (isNaN(intValue) || intValue > 100) {
                // 숫자가 아니거나 1 미만인 경우
                toast.error('모임 인원은 100명 미만으로 가능합니다!');
                setInput({ ...input, [name]: 1 }); // 기본값으로 설정
                // 해당 input에 포커스를 이동
                e.target.value = '1'; // 입력값을 1로 설정
                e.target.focus();
                return;
            }
        }
    };

    console.log('input', input);

    //; 모임 수정 (PATCH)
    const groupEditHandler = async () => {
        // 유효성 검사: 그룹 카테고리 미설정 방지
        console.log('제출 전 날짜 ', input.gDday);

        if (!input.gCategory) {
            toast.error('그룹의 카테고리를 선택해주세요!');
            return;
        }
        //유효성 검사: 모임명 미입력 방지
        if (!input.gName) {
            toast.error('모임명을 입력해주세요!');

            const gNameInput = document.querySelector(
                'input[name="gName"]'
            ) as HTMLInputElement | null;
            if (gNameInput) {
                gNameInput.focus();
            }

            return; // 함수 실행 중지
        }
        //유효성 검사: 모임설명 미입력 방지
        if (!input.gDesc) {
            toast.error('모임 설명을 입력해주세요!');

            const gDescInput = document.querySelector(
                'input[name="gDesc"]'
            ) as HTMLInputElement | null;
            if (gDescInput) {
                gDescInput.focus();
            }

            return; // 함수 실행 중지
        }

        const res = await axios
            .patch(`${process.env.REACT_APP_DB_HOST}/group`, input, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);

                successHandler();
            });
    };

    //=== 관심 분야 ===
    interface Interested {
        id: string;
        category: string;
        val: string;
    }
    const interestedArr: Interested[] = [
        { id: 'ex', category: '운동', val: 'ex' },
        { id: 're', category: '독서', val: 're' },
        { id: 'lan', category: '언어', val: 'lan' },
        { id: 'cert', category: '자격증', val: 'cert' },
        { id: 'st', category: '스터디', val: 'st' },
        { id: 'eco', category: '경제', val: 'eco' },
        { id: 'it', category: 'IT', val: 'it' },
        { id: 'etc', category: '기타', val: 'etc' },
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

    console.log(missionList);
    return (
        <div className="section group-create-contianer title5">
            <div className="title2">모임 수정하기</div>
            <div className="group-create-content group-create-title">
                <Toaster />

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
                            value={input.gName}
                            required
                        />
                    </Box>
                </div>
                {/* <div className="group-create-img"> */}
                {/* <div className="group-img-title">대표 이미지</div> */}
                {/* <Button
                        style={{
                            backgroundColor: '#ed8d8d',
                            fontSize: '1rem',
                        }}
                        variant="contained"
                    >
                        추가
                    </Button> */}
                {/* <ImgGroupEdit gSeq={gSeq} /> */}
                {/* [추후] gCoverImg 이미지 파일 추가 */}
                {/* </div> */}
            </div>
            <div className="group-create-content">
                <div style={{ whiteSpace: 'nowrap' }}>분야</div>
                <div className="group-category">
                    {interestedArr.map((interest: Interested) => {
                        return (
                            <div key={interest.id}>
                                <label
                                    onClick={() =>
                                        interestTypeHandler(interest.id)
                                    }
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
            </div>
            <div className="group-create-content description-container">
                <div style={{ marginRight: '5%' }}>모임 설명</div>
                <textarea
                    className="description"
                    placeholder="500자 이내로 입력하세요."
                    onChange={onChange}
                    name="gDesc"
                    value={input.gDesc}
                    required
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
                    value={input.gMaxMem}
                />
            </div>

            {/* <div className="group-create-content mission-wrapper">
                <div>Mission</div>
                <div className="mission-container">
                    <div onClick={missionAddHandler}>
                        <img src="/asset/icons/plus.svg" alt="plus mission" />
                    </div>

                    <div className="mission-list-container">
                        {missionList.length > 0 ? (
                            missionList.map((mission: any, idx) => {
                                return (
                                    <div key={idx}>
                                        <ListItem>
                                            <ListItemText
                                                primary={`미션 ${idx + 1}. ${
                                                    mission.mTitle
                                                } ${mission.mLevel}`}
                                                secondary={`${mission.mContent}`}
                                            />
                                        </ListItem>
                                        <Divider component="li" />
                                    </div>
                                );
                            })
                        ) : (
                            <div>팀원들과 어떤 것을 하고 싶나요 ?</div>
                        )}
                    </div>
                </div>
            </div> */}

            {addModalSwitch ? (
                <MissionAddModal
                    addModalSwitch={addModalSwitch}
                    setAddModalSwitch={setAddModalSwitch}
                    action={'미션수정'}
                    missionList={missionList}
                    setMissionList={setMissionList}
                    setInput={setInput}
                    input={input}
                    gDday={input.gDday}
                />
            ) : null}

            <SuccessModal
                successModalSwitch={successModalSwitch}
                setSuccessModalSwitch={setSuccessModalSwitch}
                action={'모임을 수정'}
                gSeq={gSeq}
            />

            {/* <Link to="/group/home/1"> */}
            <div className="btn-fixed-wrapper">
                <button className="btn-fixed" onClick={groupEditHandler}>
                    모임 수정완료 !
                </button>
            </div>
            {/* </Link> */}
        </div>
    );
}
