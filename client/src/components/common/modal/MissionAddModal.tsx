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

interface MissionAddModalProps {
    addModalSwitch: boolean;
    setAddModalSwitch: (value: boolean) => void;
}

export default function MissionAddModal({
    addModalSwitch,
    setAddModalSwitch,
}: MissionAddModalProps) {
    interface MissionType {
        id: number;
        name: string;
        proof: string;
        level: string;
    }

    const missionList: MissionType[] = [
        {
            id: 1,
            name: '알고리즘',
            proof: '문제에 대한 코드를 제출합니다.',
            level: '⭐️⭐️⭐️',
        },
        {
            id: 2,
            name: '블로깅',
            proof: '게시물 링크를 올립니다.',
            level: '⭐️⭐️',
        },
        {
            id: 3,
            name: '모각코',
            proof: '게시물 링크를 올립니다.',
            level: '⭐️',
        },
    ];

    const closeModalHandler = () => {
        setAddModalSwitch(false);
    };

    const addMissionModalHandler = () => {
        console.log(addModalSwitch);
    };

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
                <div onClick={closeModalHandler}>
                    <img
                        className="modal-mission-add-close-icon"
                        src="/asset/icons/close.svg"
                        alt="close-icon"
                    />
                </div>
                <div className="modal-mission-add-content">
                    <div className="title3">미션 수정하기</div>
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
                                defaultValue={3}
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
                        <div className="title4">Mission List</div>
                        <List
                            sx={{
                                width: '100%',
                                bgcolor: 'background.paper',
                            }}
                        >
                            <ListItem>
                                <ListItemText
                                    primary="미션 1. 알고리즘 ⭐️⭐️⭐️"
                                    secondary="문제에 대한 코드를 제출합니다."
                                />
                                <div>
                                    <button className="modal-mission-edit-btn btn-sm">
                                        수정
                                    </button>
                                </div>
                            </ListItem>

                            <Divider component="li" />
                            <ListItem>
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
                            </ListItem>
                        </List>

                        {/* 모임장 - 그룹 홈에서 마감기한 수정가능 */}
                        <div className="group-create-content">
                            <Dday />
                        </div>

                        <button
                            onClick={closeModalHandler}
                            className="btn-md modal-btn-done"
                        >
                            수정 완료
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
