import React, { useEffect, useState } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { MissionStateType, RootStateType } from '../../../types/types';
import { addMission } from '../../../store/slices/missionSlice';

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
}: any) {
    const missionState = useSelector((state: RootStateType) => state.mission);
    const dispatch = useDispatch();

    // const [listLength, setMissionList] = useState(missionState.length);

    // const missionList: any[] = missionState;

    // const [missionList, setMissionList] =
    //     useState<MissionStateType[]>(missionState);
    // const [missionList, setMissionList] = useState(missionState);

    const closeModalHandler = () => {
        setAddModalSwitch(false);
    };

    const [missionInput, setMissionInput] = useState({
        id: missionList.length + 1,
        mTitle: '',
        mContent: '',
        mLevel: 1,
        // completed: false,
    });

    const [gDday, setGDday] = useState('');

    const { mTitle, mContent, mLevel } = missionInput;

    const onChange = (e: any) => {
        const { name, value } = e.target;
        setMissionInput({ ...missionInput, [name]: value });
    };

    console.log('list', missionList.length);

    const oneMissionAddHandler = () => {
        console.log(missionInput);
        dispatch(addMission(missionInput));

        const newMissions = [...missionList, missionInput];
        // missionList.push(input);

        setMissionList(newMissions);

        // 입력 필드 초기화
        setMissionInput({
            // id: Object.keys(missionState).length + 1,
            id: missionList.length + 1,
            mTitle: '',
            mContent: '',
            mLevel: 1,
            // completed: false,
        });
    };

    console.log('missionState', missionState);
    console.log('missionList', missionList);

    const [targetDate, setTargetDate] = useState(''); // 오늘 날짜로 수정

    const missionAddDoneHandler = () => {
        setAddModalSwitch(false);

        // 1. 모임 생성 - 미션 추가하기

        // 2. 모임 상세 - 미션 수정하기
        //     1) 새로운 미션 추가하기
        //     2) 기존 미션 수정 / 삭제

        // input : 그룹 생성할 때의 input
        const newMissionArray = [...input.missionArray, ...missionList];
        setTargetDate(targetDate);

        // console.log('!!', input.missionArray);
        // console.log('##', missionList);

        setInput({
            ...input,
            missionArray: newMissionArray,
            gDday: targetDate,
        });
    };

    //=== 수정 ===

    const editHandler = (targetId: number) => {};
    const deleteHandler = (targetId: number) => {};

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
                                defaultValue={1}
                                inputProps={{
                                    name: 'nLevel',
                                    id: 'uncontrolled-native',
                                }}
                                onChange={onChange}
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
                                            {missionList.map((mission: any) => {
                                                return (
                                                    <div key={mission.id}>
                                                        <Divider component="li" />

                                                        <ListItem>
                                                            <ListItemText
                                                                primary={`미션 ${mission.id}. ${mission.mTitle} ${mission.mLevel}`}
                                                                secondary={`${mission.mContent}`}
                                                            />
                                                            <div>
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
                                                            </div>
                                                            <div>
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
                                        {missionState.map((mission: any) => {
                                            return (
                                                <div key={mission.id}>
                                                    <Divider component="li" />

                                                    <ListItem></ListItem>
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
