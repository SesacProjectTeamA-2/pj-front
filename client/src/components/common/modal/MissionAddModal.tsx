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
    console.log('missionList', missionList);

    const [missionInput, setMissionInput] = useState({
        // 새로 추가하는 미션
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

    // console.log('missionInput', missionInput);

    // const [nextMissionId, setNextMissionId] = useState(missionList.length + 1);
    // useEffect(() => {
    //     setNextMissionId(missionList.length + 1);
    // }, [nextMissionId]);

    // console.log('nextMissionId', nextMissionId);

    const oneMissionAddHandler = () => {
        // 새로운 미션을 미션 리스트에 추가
        // console.log(missionInput);
        // dispatch(addMission(missionInput));

        const newMissions = [...missionList, missionInput];
        setMissionList(newMissions);

        // 입력 필드 초기화
        setMissionInput({
            // id: Object.keys(missionList).length + 1,
            id: missionList.length + 2,
            mTitle: '',
            mContent: '',
            mLevel: 1,
            // completed: false,
        });
    };

    console.log('missionList', missionList);

    const [targetDate, setTargetDate] = useState(''); // 오늘 날짜로 수정

    // const [editMode, setEditMode] = useState([]);

    // const [editMode, setEditMode] = useState({});
    // const [editedContent, setEditedContent] = useState({}); // 추가: 수정된 내용을 관리

    interface EditMode {
        [key: number]: boolean;
    }

    const [editMode, setEditMode] = useState<EditMode>({});
    const [editedContents, setEditedContents] = useState<{
        [key: number]: string;
    }>({});

    // const editHandler = (targetId: number) => {
    //     console.log(targetId);
    //     // setEditMode(!editMode);

    //     console.log('ppppp', missionInput);

    //     // if(!editMode) {
    //     // const updatedMissionList = missionList.map((mission: any) => {
    //     //         if (mission.id === targetId) {
    //     //             // targetId와 일치하는 미션을 찾아 업데이트
    //     //             return {
    //     //                 ...mission,
    //     //                 [name]: value,
    //     //             };
    //     //         }
    //     //         return mission; // 다른 미션은 변경하지 않음
    //     //     });

    //     //     // 업데이트된 미션 목록을 상태에 설정
    //     //     setMissionList(updatedMissionList);
    //     // }

    //     setEditMode((prevEditMode: any) => ({
    //         ...prevEditMode,
    //         [targetId]: !prevEditMode[targetId],
    //     }));

    //     console.log(editMode);
    // };

    const handleEditChange = (e: any, targetId: number) => {
        const { name, value } = e.target;

        // setEditedContents((prevContents) => ({
        //     ...prevContents,
        //     [targetId]: value,
        // }));

        setMissionInput({ ...missionInput, [name]: value });

        console.log('<<<<<<MissionInput>>>>>>>>>>>', missionInput);

        // const updatedMissionList = missionList.map((mission: any) => {
        //     if (mission.id === targetId) {
        //         // targetId와 일치하는 미션을 찾아 업데이트
        //         return {
        //             ...mission,
        //             [name]: value,
        //         };
        //     }
        //     return mission; // 다른 미션은 변경하지 않음
        // });

        // // 업데이트된 미션 목록을 상태에 설정
        // setMissionList(updatedMissionList);
    };

    console.log('editedContents', editedContents);

    const missionAddDoneHandler = () => {
        // 최종으로 버튼 클릭 시
        setAddModalSwitch(false);
        setTargetDate(targetDate);

        // input : 그룹 생성할 때의 input
        // const newMissionArray = [...input.missionArray, ...missionList];
        // const newMissionArray = [...missionList];
        // console.log(' newMissionArray', newMissionArray);

        console.log('input', input);
        // console.log('missionArray - AddModal', input.missionArray);
        console.log('##', missionList);

        setInput({
            ...input,
            missionArray: missionList,
            gDday: targetDate,
        });

        console.log('<<<<<<input : 그룹 생성에서 기존 Input>>>>>>>>>>>', input);
    };

    //=== 수정 ===

    // const editHandler = (e: React.MouseEvent, targetId: number) => {
    const [missionInputs, setMissionInputs] = useState(
        // 개별 input 관리 위한 함수
        missionList.map((mission: any) => ({
            id: mission.id,
            mTitle: mission.mTitle,
            mContent: mission.mContent,
            mLevel: mission.mLevel,
        }))
    );
    const editHandler = (targetId: number) => {
        const editedMissionIndex = missionInputs.findIndex(
            (mission: any) => mission.id === targetId
        );

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

    const handleMissionContentChange = (missionId: any, newContent: any) => {
        // missionId에 해당하는 미션의 내용을 newContent로 변경
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
                                                            {/* <ListItemText
                                                                primary={`미션 ${mission.id}. ${mission.mTitle} ${mission.mLevel}`}
                                                                secondary={`${mission.mContent}`}
                                                            /> */}
                                                            <TextField
                                                                label={`미션 ${mission.id}. ${mission.mTitle} ${mission.mLevel}`}
                                                                variant="standard"
                                                                fullWidth
                                                                name={`mTitle-${mission.id}`}
                                                                // name={`mContent-${mission.id}`}
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
                                        {/* 미션 옆에 숫자 */}
                                        {missionList.map((mission: any) => {
                                            return (
                                                <div key={mission.id}>
                                                    <Divider component="li" />

                                                    {/* 여기 */}
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
                                                                    editHandler(
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
