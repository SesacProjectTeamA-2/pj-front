import React, { useState } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../../../styles/scss/components/modal.scss';
import ModalMemberList from './ModalMemberList';
import { useSelector } from 'react-redux';
import {
    MissionListType,
    MissionStateType,
    RootStateType,
} from '../../../types/types';

// interface MissionCancelModalProps {
//     missionCancelModalSwitch: boolean;
//     setMissionCancelModalSwitch: (value: boolean) => void;
// }

export default function MissionCancelModal({
    missionCancelModalSwitch,
    setMissionCancelModalSwitch,
}: any) {
    // interface MissionType {
    //     id: number;
    //     name: string;
    //     selected: boolean;
    // }

    // const missionList: MissionType[] = [
    //     {
    //         id: 1,
    //         name: '알고리즘',
    //         selected: true,
    //     },
    //     {
    //         id: 2,
    //         name: '블로깅',
    //         selected: false,
    //     },
    //     {
    //         id: 3,
    //         name: '모각코',
    //         selected: false,
    //     },
    // ];

    const missionList = useSelector((state: RootStateType) => state.mission);

    const [selectedMissionId, setSelectedMissionId] = useState(1);

    // 모달창 닫기
    const closeModalHandler = () => {
        setMissionCancelModalSwitch(false);
    };

    // 미션 타입 선택
    const missionTypeHandler = (id: number) => {
        console.log(id);
        setSelectedMissionId(id);
    };

    // 미션 인증완료 취소 완료
    const missionCancelDone = () => {
        alert('[000]님의 [미션 1. 알고리즘] 완료 인증이 취소되었습니다 !');
        setMissionCancelModalSwitch(false);
    };

    return (
        <div>
            <Modal
                className="modal-style"
                overlayClassName="overlay"
                isOpen={missionCancelModalSwitch}
                onRequestClose={() => setMissionCancelModalSwitch(false)}
                ariaHideApp={false}
            >
                <div onClick={closeModalHandler}>
                    <img
                        className="modal-mission-add-close-icon"
                        src="/asset/icons/close.svg"
                        alt="close-icon"
                    />
                </div>
                <div className="modal-mission-cancel-content">
                    <div className="title5 modal-cancel-header">
                        <div className="modal-cancel-title-container">
                            <div className="title3">
                                미션 완료를 취소합니다.
                            </div>
                            <div className="title5 cancel-modal-description">
                                멤버가 잘못된 인증을 했을 경우, 미션완료를
                                취소합니다.
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="mission-cancel-modal-mission-list">
                            {missionList.map((mission: MissionStateType) => {
                                return (
                                    <div key={mission.id}>
                                        <label
                                            onClick={() =>
                                                missionTypeHandler(mission.id)
                                            }
                                            style={{
                                                backgroundColor:
                                                    selectedMissionId ===
                                                    mission.id
                                                        ? '#ed8d8d'
                                                        : '#acacac',
                                            }}
                                        >
                                            <input
                                                type="radio"
                                                name="missionType"
                                            />
                                            <div>
                                                미션 {mission.id}.{' '}
                                                {mission.mTitle}
                                            </div>
                                        </label>
                                    </div>
                                );
                            })}
                        </div>
                        <ModalMemberList action="미션인증 취소" />
                    </div>
                    <div>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': {
                                    width: '67ch',
                                },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="filled-multiline-flexible"
                                label="어떤 이유로 미션완료 인증이 안되나요 ?"
                                multiline
                                maxRows={4}
                                variant="filled"
                            />
                        </Box>
                    </div>
                    <div className="mission-cancel-btn-container">
                        <button
                            onClick={missionCancelDone}
                            className="btn-md mission-cancel-done-btn"
                        >
                            미션완료 취소
                        </button>
                        <button
                            onClick={closeModalHandler}
                            className="btn-md mission-cancel-back-btn"
                        >
                            돌아가기
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
