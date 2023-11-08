import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Cookies } from 'react-cookie';

import Modal from 'react-modal';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';

import TextField from '@mui/material/TextField';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import Divider from '@mui/material/Divider';

import '../../../styles/scss/components/modal.scss';

import Dday from '../Dday';

//-- Redux
// import { useDispatch, useSelector } from 'react-redux';
// import { MissionStateType, RootStateType } from '../../../types/types';
// import { addMission } from '../../../store/slices/missionSlice';

interface MissionAddModalProps {
    addModalSwitch: boolean;
    setAddModalSwitch: (value: boolean) => void;
    action: string;
}

export default function MissionAddModal({
    addModalSwitch,
    setAddModalSwitch,
    action,
    missionList,
    setMissionList,
    setInput,
    input,
    gDday,
}: any) {
    //] 1. 그룹 생성
    //-- action = 미션생성

    //] 2. 그룹 홈
    //-- action = 미션수정

    const cookie = new Cookies();
    const uToken = cookie.get('isUser'); // 토큰 값

    //--redux
    // const missionState = useSelector((state: RootStateType) => state.mission);
    // const dispatch = useDispatch();

    const { gSeq } = useParams();
    const nvg = useNavigate();

    const closeModalHandler = () => {
        setAddModalSwitch(false);
    };
    console.log('missionList - ADD MODAL', missionList);

    const [missionInput, setMissionInput] = useState({
        // 새로 추가하는 미션
        id: missionList.length + 1,
        mTitle: '',
        mContent: '',
        mLevel: 1,
        mSeq: null,
        gDday,
        // completed: false,
    });

    // const [gDday, setGDday] = useState('');

    const { mTitle, mContent, mLevel } = missionInput;
    // const { mTitle, mContent, mLevel } = missionList;

    // 난이도 계산
    for (let mission of missionList) {
        switch (mission.mLevel) {
            case '5': {
                mission.mStar = '⭐️⭐️⭐️';
                break;
            }
            case '3': {
                mission.mStar = '⭐️⭐️';
                break;
            }
            case 1: {
                mission.mStar = '⭐️';
                break;
            }
            default:
                break;
        }
    }

    ///// 이벤트 ////////
    const onChange = (e: any) => {
        const { name, value } = e.target;
        setMissionInput({ ...missionInput, [name]: value });
    };

    /////////// 추가 //////////////

    const oneMissionAddHandler = () => {
        const newMissions = [...missionList, missionInput];
        setMissionList(newMissions);

        // 입력 필드 초기화
        setMissionInput({
            // id: Object.keys(missionList).length + 1,
            id: missionList.length + 2,
            mTitle: '',
            mContent: '',
            mLevel: 1,
            mSeq: null,
            gDday,
            // completed: false,
        });
    };

    const [targetDate, setTargetDate] = useState(''); // 오늘 날짜로 수정

    console.log('missionList', missionList);

    // useEffect(() => {
    //     setTargetDate(`D-${gDday}`);
    // }, []);

    console.log('day', gDday);

    interface EditMode {
        [key: number]: boolean;
    }

    const [editMode, setEditMode] = useState<EditMode>({});
    const [editedContents, setEditedContents] = useState<{
        [key: number]: string;
    }>({});

    const handleEditChange = (e: any, targetId: number) => {
        const { name, value } = e.target;

        // setEditedContents((prevContents) => ({
        //     ...prevContents,
        //     [targetId]: value,
        // }));

        setMissionInput({ ...missionInput, [name]: value });

        console.log('<<<<<<MissionInput>>>>>>>>>>>', missionInput);
    };

    console.log('editedContents', editedContents);
    if (action === '미션수정') {
        for (let i = 0; i < missionList.length; i++) {
            missionList[i].id = i + 1;
        }
    }

    //] 최종으로 버튼 클릭 시
    const missionAddDoneHandler = () => {
        setAddModalSwitch(false);
        setTargetDate(targetDate);

        if (action === '미션생성') {
            setInput({
                ...input,
                missionArray: missionList,
                gDday: targetDate,
            });

            console.log(
                '<<<<<<input : 그룹 생성에서 기존 Input>>>>>>>>>>>',
                input
            );
        }

        // {
        //     "mSeq": 3,
        //     "gDday": "2023-12-24",
        //     "mTitle": "운동하기",
        //     "mContent": "일주일에 한번 헬스장",
        //     "mLevel": 5
        //   }

        //; 미션 수정 (PATCH, POST, DELETE)
        // missionList 최종 데이터만 보내기
        if (action === '미션수정') {
            // console.log('------------');

            const patchMissionListHandler = async () => {
                try {
                    await axios
                        .patch(
                            `${process.env.REACT_APP_DB_HOST}/mission/${gSeq}`,
                            missionList,
                            {
                                headers: {
                                    Authorization: `Bearer ${uToken}`,
                                },
                            }
                        )
                        .then((res) => {
                            console.log('patched', res.data);
                            // nvg(`/group/home/${gSeq}`);
                            window.location.reload();
                        });
                } catch (err) {
                    console.log(err);
                }
            };

            patchMissionListHandler();
            console.log('?????????????????????');
        }
    };

    //=== 수정 ===
    const [missionInputs, setMissionInputs] = useState(
        // 개별 input 관리 위한 함수
        missionList.map((mission: any) => ({
            id: mission.id,
            mTitle: mission.mTitle,
            mContent: mission.mContent,
            mLevel: mission.mLevel,
            mSeq: mission.mSeq,
            gDday: mission.gDday,
        }))
    );
    console.log('missionInputs ADD MODAL', missionInputs);

    const editHandler = (targetId: number) => {
        const editedMissionIndex = missionInputs.findIndex(
            (mission: any) => mission.id === targetId
        );

        console.log(targetId, editedMissionIndex);

        if (editedMissionIndex !== -1) {
            // 수정할 미션을 찾았을 때, 해당 미션 정보를 수정합니다.
            const updatedMissionInputs = [...missionInputs];

            updatedMissionInputs[editedMissionIndex] = {
                ...updatedMissionInputs[editedMissionIndex],
                mTitle: missionInput.mTitle,
                mContent: missionInput.mContent,
                mLevel: missionInput.mLevel,
            };
            setMissionInputs(updatedMissionInputs);
        }
    };

    // 각 미션 내용 저장 상태 배열
    // const [missionContentList, setMissionContentList] = useState(
    //     missionList.map((mission: any) => mission.mContent)
    // );
    // console.log('missionContentList', missionContentList);

    //  수정 시 onChange Event
    const handleMissionTitleChange = (missionId: any, newContent: any) => {
        // missionId에 해당하는 미션 제목 new Title로 변경
        const updatedMissionList = missionList.map((mission: any) => {
            if (mission.id === missionId) {
                return { ...mission, mTitle: newContent };
            } else {
                return mission;
            }
        });
        setMissionList(updatedMissionList);
    };

    const handleMissionContentChange = (missionId: any, newContent: any) => {
        // missionId에 해당하는 미션 내용 newContent로 변경
        const updatedMissionList = missionList.map((mission: any) => {
            if (mission.id === missionId) {
                return { ...mission, mContent: newContent };
            } else {
                return mission;
            }
        });
        setMissionList(updatedMissionList);
    };

    ////////////////////// 삭제////////////////////////
    const deleteHandler = (targetId: number) => {
        const filtered = missionList.filter(
            (mission: any) => targetId !== mission.id
        );
        console.log('targetId, filtered', targetId, filtered);
        setMissionList(filtered);
    };

    return (
        <div className="modal-mission-add-container">
            <Modal
                className="modal-style"
                overlayClassName="overlay"
                isOpen={addModalSwitch}
                onRequestClose={() => setAddModalSwitch(false)}
                ariaHideApp={false}
            >
                <div className="modal-mission-add-upper">
                    <div
                        className="modal-mission-add-close"
                        onClick={closeModalHandler}
                    >
                        <img
                            className="modal-mission-add-close-icon"
                            src="/asset/icons/close.svg"
                            alt="close-icon"
                        />
                    </div>
                    <div className="title3 modal-title-mission-create">
                        {action === '미션생성'
                            ? '미션 생성하기'
                            : '미션 수정하기'}
                    </div>
                </div>

                <div className="modal-mission-add-content">
                    <div className="title5 modal-mission-header">
                        <div className="modal-mission-title">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 1, width: '40ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <TextField
                                    id="title-basic"
                                    label="미션 제목"
                                    variant="standard"
                                    name="mTitle"
                                    onChange={onChange}
                                    value={mTitle}
                                />
                            </Box>
                        </div>
                        <FormControl fullWidth>
                            <InputLabel
                                variant="standard"
                                htmlFor="uncontrolled-native"
                            >
                                난이도
                            </InputLabel>
                            <NativeSelect
                                // defaultValue={1}
                                inputProps={{
                                    name: 'mLevel',
                                    id: 'uncontrolled-native',
                                }}
                                onChange={onChange}
                                value={mLevel}
                            >
                                <option value={1}>⭐️</option>
                                <option value={3}>⭐️⭐️</option>
                                <option value={5}>⭐️⭐️⭐️</option>
                            </NativeSelect>
                        </FormControl>
                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 4, width: '67ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField
                            id="filled-multiline-flexible"
                            label="인증 방법"
                            multiline
                            maxRows={4}
                            variant="filled"
                            name="mContent"
                            value={mContent}
                            onChange={onChange}
                        />
                    </Box>

                    <button
                        onClick={oneMissionAddHandler}
                        className="btn-md modal-btn-add"
                    >
                        미션 추가
                    </button>

                    <div className="modal-mission-list">
                        <div className="modal-mission-list-header">
                            <div className="title4">Mission List</div>
                            {/* 모임장 - 그룹 홈에서 마감기한 수정가능 */}
                            <div className="group-create-content">
                                <div className="dday-title">마감일</div>

                                <Dday
                                    targetDate={targetDate}
                                    setTargetDate={setTargetDate}
                                    gDday={gDday}
                                />
                            </div>
                        </div>

                        {/* <Divider /> */}

                        <br />
                        <List
                            sx={{
                                width: '100%',
                                bgcolor: 'background.paper',
                            }}
                        >
                            <div className="modal-mission-list-text">
                                {action === '미션생성' ? (
                                    !missionList.length ? (
                                        '현재 미션이 없습니다.'
                                    ) : (
                                        <>
                                            {/* 미션생성 모달 */}

                                            {missionList.map((mission: any) => {
                                                return (
                                                    <div key={mission.id}>
                                                        <Divider component="li" />

                                                        <ListItem
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'row',
                                                            }}
                                                        >
                                                            {/* <ListItemText
                                                                primary={`미션 ${mission.id}. ${mission.mTitle} ${mission.mLevel}`}
                                                                secondary={`${mission.mContent}`}
                                                            /> */}
                                                            {/* <TextField
                                                                label={`미션 ${mission.id}. ${mission.mTitle} ${mission.mStar}`}
                                                                variant="standard"
                                                                fullWidth
                                                                name={`mTitle-${mission.id}`}
                                                                value={
                                                                    mission.mContent
                                                                }
                                                                onChange={(e) =>
                                                                    handleMissionContentChange(
                                                                        mission.id,
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                            />
                                                             */}

                                                            {/* 제목, 내용 div */}
                                                            <div
                                                                style={{
                                                                    display:
                                                                        'flex',
                                                                    flexBasis:
                                                                        '70%',
                                                                    flexDirection:
                                                                        'column',
                                                                    justifyContent:
                                                                        'space-between',
                                                                    margin: '0.8rem',
                                                                }}
                                                            >
                                                                <h3
                                                                    style={{
                                                                        marginBottom:
                                                                            '1rem',
                                                                    }}
                                                                >
                                                                    미션
                                                                    {
                                                                        mission.id
                                                                    }{' '}
                                                                    | 난이도{' '}
                                                                    {
                                                                        mission.mLevel
                                                                    }
                                                                </h3>
                                                                {/* 제목 */}
                                                                <TextField
                                                                    label={`미션 ${mission.id} 제목`}
                                                                    variant="standard"
                                                                    name={`mTitle-${mission.id}`}
                                                                    fullWidth
                                                                    value={
                                                                        mission.mTitle
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleMissionTitleChange(
                                                                            mission.id,
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    style={{
                                                                        marginBottom:
                                                                            '0.4rem',
                                                                    }}
                                                                />

                                                                {/* 내용 */}
                                                                <TextField
                                                                    label={`미션 ${mission.id} 인증 방법 `}
                                                                    variant="standard"
                                                                    name={`mTitle-${mission.id}`}
                                                                    fullWidth
                                                                    value={
                                                                        mission.mContent
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleMissionContentChange(
                                                                            mission.id,
                                                                            e
                                                                                .target
                                                                                .value
                                                                        )
                                                                    }
                                                                    style={{
                                                                        marginBottom:
                                                                            '0.4rem',
                                                                    }}
                                                                />
                                                            </div>

                                                            {/* 버튼 */}
                                                            <div
                                                                style={{
                                                                    display:
                                                                        'flex',
                                                                    flexDirection:
                                                                        'row',
                                                                    justifyContent:
                                                                        'center',
                                                                    flexBasis:
                                                                        '30%',
                                                                }}
                                                            >
                                                                <button
                                                                    className="modal-mission-edit-btn btn-sm"
                                                                    onClick={() =>
                                                                        editHandler(
                                                                            mission.id
                                                                        )
                                                                    }
                                                                >
                                                                    수정
                                                                </button>
                                                                {/* </div>
                                                            <div> */}
                                                                <button
                                                                    className="modal-mission-delete-btn btn-sm"
                                                                    onClick={() =>
                                                                        deleteHandler(
                                                                            mission.id
                                                                        )
                                                                    }
                                                                >
                                                                    삭제
                                                                </button>
                                                            </div>
                                                        </ListItem>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    )
                                ) : (
                                    <>
                                        {/* 미션수정 모달 */}
                                        {/* 미션 옆에 숫자 */}
                                        {missionList.map((mission: any) => {
                                            return (
                                                <div key={mission.id}>
                                                    <Divider component="li" />

                                                    <ListItem
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection:
                                                                'row',
                                                        }}
                                                    >
                                                        {/* 제목, 내용 div */}
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexBasis:
                                                                    '70%',
                                                                flexDirection:
                                                                    'column',
                                                                justifyContent:
                                                                    'space-between',
                                                                margin: '0.8rem',
                                                            }}
                                                        >
                                                            <h3
                                                                style={{
                                                                    marginBottom:
                                                                        '1rem',
                                                                }}
                                                            >
                                                                미션
                                                                {mission.id} |
                                                                난이도{' '}
                                                                {mission.mLevel}
                                                            </h3>
                                                            {/* 제목 */}
                                                            <TextField
                                                                label={`미션 ${mission.id} 제목`}
                                                                variant="standard"
                                                                name={`mTitle-${mission.id}`}
                                                                fullWidth
                                                                value={
                                                                    mission.mTitle
                                                                }
                                                                onChange={(e) =>
                                                                    handleMissionTitleChange(
                                                                        mission.id,
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                style={{
                                                                    marginBottom:
                                                                        '0.4rem',
                                                                }}
                                                            />

                                                            {/* 내용 */}
                                                            <TextField
                                                                label={`미션 ${mission.id} 인증 방법 `}
                                                                variant="standard"
                                                                name={`mTitle-${mission.id}`}
                                                                fullWidth
                                                                value={
                                                                    mission.mContent
                                                                }
                                                                onChange={(e) =>
                                                                    handleMissionContentChange(
                                                                        mission.id,
                                                                        e.target
                                                                            .value
                                                                    )
                                                                }
                                                                style={{
                                                                    marginBottom:
                                                                        '0.4rem',
                                                                }}
                                                            />
                                                        </div>

                                                        {/* btn div */}
                                                        <div
                                                            style={{
                                                                display: 'flex',
                                                                flexDirection:
                                                                    'row',
                                                                justifyContent:
                                                                    'center',
                                                                flexBasis:
                                                                    '30%',
                                                            }}
                                                        >
                                                            <button
                                                                className="modal-mission-edit-btn btn-sm"
                                                                onClick={() =>
                                                                    editHandler(
                                                                        mission.id
                                                                    )
                                                                }
                                                            >
                                                                수정
                                                            </button>

                                                            <button
                                                                className="modal-mission-delete-btn btn-sm"
                                                                onClick={() =>
                                                                    deleteHandler(
                                                                        mission.id
                                                                    )
                                                                }
                                                            >
                                                                삭제
                                                            </button>
                                                        </div>
                                                    </ListItem>
                                                </div>
                                            );
                                        })}
                                    </>
                                )}
                            </div>
                        </List>
                    </div>
                </div>
                <div className="modal-mission-btn-container">
                    <button
                        onClick={missionAddDoneHandler}
                        className="btn-md modal-btn-done"
                    >
                        {action === '미션생성' ? '생성 완료' : '수정 완료'}
                    </button>
                </div>
            </Modal>
        </div>
    );
}
