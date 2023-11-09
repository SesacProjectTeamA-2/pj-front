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

    // interface Mission {
    //     id: number;
    //     mTitle: string;
    //     mContent: string;
    //     mLevel: number;
    //     map: string;
    //     completed: boolean;
    // }

    // const [missionList, setMissionList] = useState<Mission[]>([]);

    const [missionInput, setMissionInput] = useState({
        id: missionList.length + 1,
        mTitle: '',
        mContent: '',
        mLevel: 1,
        // completed: false,
    });

    const [gDday, setGDday] = useState('');

    // const [input, setInput] = useState({
    //     id: Object.keys(missionState).length + 1,
    //     mTitle: '',
    //     mContent: '',
    //     mLevel: 1,
    //     map: '', // map 필드 추가
    //     completed: false,
    // });

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

    //=== 수정 ===

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

    const editHandler = (targetId: number) => {
        console.log(targetId);

        // const editEventHandler = (e) => {
        //     const { title, ...rest } = todoItem;
        //     setTodoItem({
        //         title: e.target.value,
        //         ...rest,
        //     });
        // };

        // setEditMode(!editMode);

        console.log('ppppp', missionInput);

        // if(!editMode) {
        // const updatedMissionList = missionList.map((mission: any) => {
        //         if (mission.id === targetId) {
        //             // targetId와 일치하는 미션을 찾아 업데이트
        //             return {
        //                 ...mission,
        //                 [name]: value,
        //             };
        //         }
        //         return mission; // 다른 미션은 변경하지 않음
        //     });

        //     // 업데이트된 미션 목록을 상태에 설정
        //     setMissionList(updatedMissionList);
        // }

        setEditMode((prevEditMode: any) => ({
            ...prevEditMode,
            [targetId]: !prevEditMode[targetId],
        }));

        console.log(editMode);
    };

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

    console.log(editedContents);
    console.log('MissionList>>>>>', missionList);

    const missionAddDoneHandler = () => {
        setAddModalSwitch(false);

        const newMissionArray = [...input.missionArray, ...missionList];
        setTargetDate(targetDate);

        console.log('!!', input.missionArray);
        console.log('##', missionList);

        setInput({
            ...input,
            missionArray: newMissionArray,
            gDday: targetDate,
        });
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
                                    )
                                ) : (
                                    <>
                                        {missionState.map((mission: any) => {
                                            return (
                                                <div key={mission.id}>
                                                    <Divider component="li" />

                                                    <ListItem>
                                                        {editMode[
                                                            mission.id
                                                        ] ? (
                                                            <>
                                                                <input
                                                                    style={{
                                                                        width: '6rem',
                                                                    }}
                                                                    placeholder={`${mission.mTitle}`}
                                                                    value={
                                                                        editedContents[
                                                                            mission
                                                                                .id
                                                                        ] ||
                                                                        mission.mTitle
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleEditChange(
                                                                            e,
                                                                            mission.id
                                                                        )
                                                                    }
                                                                    // onChange={(e) =>
                                                                    //     handleEditChange(
                                                                    //         mission.id,
                                                                    //         e.target
                                                                    //             .value
                                                                    //     )
                                                                    // }

                                                                    name="mTitle"
                                                                    id={
                                                                        mission.id
                                                                    }
                                                                />

                                                                <input
                                                                    placeholder={`${mission.mTitle}`}
                                                                    value={
                                                                        editedContents[
                                                                            mission
                                                                                .id
                                                                        ] ||
                                                                        mission.mContent
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleEditChange(
                                                                            e,
                                                                            mission.id
                                                                        )
                                                                    }
                                                                    // onChange={(e) =>
                                                                    //     handleEditChange(
                                                                    //         mission.id,
                                                                    //         e.target
                                                                    //             .value
                                                                    //     )
                                                                    // }

                                                                    name={
                                                                        'mContent'
                                                                    }
                                                                    id={
                                                                        mission.id
                                                                    }
                                                                />
                                                                <NativeSelect
                                                                    defaultValue={
                                                                        mission.mLevel
                                                                    }
                                                                    inputProps={{
                                                                        name: 'mLevel',
                                                                        id: 'uncontrolled-native',
                                                                    }}
                                                                    onChange={(
                                                                        e
                                                                    ) =>
                                                                        handleEditChange(
                                                                            e,
                                                                            mission.id
                                                                        )
                                                                    }
                                                                >
                                                                    <option
                                                                        value={
                                                                            1
                                                                        }
                                                                    >
                                                                        ⭐️
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            3
                                                                        }
                                                                    >
                                                                        ⭐️⭐️
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            5
                                                                        }
                                                                    >
                                                                        ⭐️⭐️⭐️
                                                                    </option>
                                                                </NativeSelect>
                                                            </>
                                                        ) : (
                                                            <ListItemText
                                                                primary={`미션 ${mission.id}. ${mission.mTitle} ${mission.mLevel}`}
                                                                secondary={`${mission.mContent}`}
                                                            />
                                                        )}
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

                                        {/* <ListItem>
                                            <ListItemText
                                                primary="미션 2. 블로깅 ⭐️⭐️"
                                                secondary="게시물 링크를 올립니다."
                                            />
                                            <div>
                                                <button
                                                    className="modal-mission-edit-btn btn-sm"
                                                    onClick={editHandler}
                                                >
                                                    수정
                                                </button>
                                            </div>
                                        </ListItem>
                                        <Divider component="li" />
                                        <ListItem>
                                            <ListItemText
                                                primary="미션 3. 모각코 ⭐️"
                                                secondary="문제에 대한 코드를 제출합니다."
                                            />
                                            <div>
                                                <button className="modal-mission-edit-btn btn-sm">
                                                    수정
                                                </button>
                                            </div>
                                        </ListItem> */}
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
