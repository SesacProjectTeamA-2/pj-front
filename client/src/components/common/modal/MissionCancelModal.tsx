import React from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../../../styles/scss/components/modal.scss';
import ModalMemberList from './ModalMemberList';

// import MemberList from '../../group/home/MemberList';

interface MissionCancelModalProps {
    missionCancelModalSwitch: boolean;
    setMissionCancelModalSwitch: (value: boolean) => void;
}

export default function MissionCancelModal({
    missionCancelModalSwitch,
    setMissionCancelModalSwitch,
}: MissionCancelModalProps) {
    const closeModalHandler = () => {
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
                <div className="modal-mission-cancel-content">
                    <div className="title5 modal-cancel-header">
                        <div onClick={closeModalHandler}>
                            <img
                                className="modal-mission-add-close-icon"
                                src="/asset/icons/close.svg"
                                alt="close-icon"
                            />
                        </div>
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
                            {/* [추후] btn으로 할지 ? div로 할지 ? */}
                            {/* [추후] 하나만 클릭 가능하게 - 아닌 것은 회색으로 */}
                            <button className="btn-sm">미션 1. 알고리즘</button>
                            <button className="btn-sm">미션 2. 블로깅</button>
                            <button className="btn-sm">미션 3. 모각코</button>
                        </div>
                        <ModalMemberList />
                    </div>
                    <div>
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
                                label="어떤 이유로 미션완료 인증이 안되나요 ?"
                                multiline
                                maxRows={4}
                                variant="filled"
                            />
                        </Box>
                    </div>
                    <div className="mission-cancel-btn-container">
                        <button className="btn-md mission-cancel-done-btn">
                            미션완료 취소
                        </button>
                        <button className="btn-md mission-cancel-back-btn">
                            돌아가기
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
