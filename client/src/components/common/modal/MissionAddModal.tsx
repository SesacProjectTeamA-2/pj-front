import React, { useState } from 'react';
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
import { useSelector } from 'react-redux';
import { MissionStateType, RootStateType } from '../../../types/types';

interface MissionAddModalProps {
    addModalSwitch: boolean;
    setAddModalSwitch: (value: boolean) => void;
    action: string;
}

export default function MissionAddModal({
    addModalSwitch,
    setAddModalSwitch,
    action,
}: MissionAddModalProps) {
    const missionState = useSelector((state: RootStateType) => state.mission);
    // interface MissionType {
    //     id: number;
    //     name: string;
    //     proof: string;
    //     level: string;
    // }

    // const missionList: MissionType[] = [
    //     {
    //         id: 1,
    //         name: '알고리즘',
    //         proof: '문제에 대한 코드를 제출합니다.',
    //         level: '⭐️⭐️⭐️',
    //     },
    //     {
    //         id: 2,
    //         name: '블로깅',
    //         proof: '게시물 링크를 올립니다.',
    //         level: '⭐️⭐️',
    //     },
    //     {
    //         id: 3,
    //         name: '모각코',
    //         proof: '게시물 링크를 올립니다.',
    //         level: '⭐️',
    //     },
    // ];

    const [missionList, setMissionList] = useState(missionState);

    console.log(missionList);

    const closeModalHandler = () => {
        setAddModalSwitch(false);
    };

    const addMissionModalHandler = () => {
        console.log(addModalSwitch);
    };

    const [input, setInput] = useState({
        id: 1,
        name: '',
        proof: '',
        level: '',
    });

    const oneMissionAddHandler = () => {};

    const editHandler = () => {};

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
                                    name: 'level',
                                    id: 'uncontrolled-native',
                                }}
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
                        />
                    </Box>

                    <button
                        onClick={addMissionModalHandler}
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
                                <Dday />
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
                                    '현재 미션이 없습니다.'
                                ) : (
                                    <>
                                        {missionList.map(
                                            (mission: MissionStateType) => {
                                                return (
                                                    <div key={mission.id}>
                                                        <ListItem>
                                                            <ListItemText
                                                                primary={`미션 ${mission.id}. ${mission.name} ${mission.level}`}
                                                                secondary={`${mission.description}`}
                                                            />
                                                            <div>
                                                                <button className="modal-mission-edit-btn btn-sm">
                                                                    수정
                                                                </button>
                                                            </div>
                                                        </ListItem>
                                                        <Divider component="li" />
                                                    </div>
                                                );
                                            }
                                        )}

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
                        onClick={closeModalHandler}
                        className="btn-md modal-btn-done"
                    >
                        {action === '미션생성' ? '생성 완료' : '수정 완료'}
                    </button>
                </div>
            </Modal>
        </div>
    );
}
