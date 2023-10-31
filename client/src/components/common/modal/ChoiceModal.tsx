import React, { useState } from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../../../styles/scss/components/modal.scss';
import ModalMemberList from './ModalMemberList';

export default function ChoiceModal({
    choiceModalSwitch,
    setChoiceModalSwitch,
    choiceModalSwitchHandler,
    action,
}: any) {
    const doneHandler = () => {
        alert(`[코딩학당] 모임을 ${action}하셨습니다 !`);

        // [추후] 강제퇴장 멘트 작성

        setChoiceModalSwitch(false);
    };

    // 모달창 닫기
    const closeModalHandler = () => {
        setChoiceModalSwitch(false);
    };

    return (
        <div>
            <Modal
                className="modal-style"
                overlayClassName="overlay"
                isOpen={choiceModalSwitch}
                onRequestClose={() => setChoiceModalSwitch(false)}
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
                            <div className="title3">{action}</div>
                            <div className="title5 cancel-modal-description">
                                {action === '모임장 권한 넘기기'
                                    ? '누구에게 모임의 모든 권한을 넘길까요 ?'
                                    : action === '강제 퇴장'
                                    ? '누구를 모임에서 강제로 퇴장할까요 ?'
                                    : ''}
                            </div>
                        </div>
                    </div>
                    <ModalMemberList action={action} />
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
                                label="이유가 무엇인가요 ?"
                                multiline
                                maxRows={4}
                                variant="filled"
                            />
                        </Box>
                    </div>
                    <div className="mission-cancel-btn-container">
                        <button
                            onClick={doneHandler}
                            className="btn-md mission-cancel-done-btn"
                        >
                            {action}
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
