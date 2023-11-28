import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Cookies } from 'react-cookie';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

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
    const { gSeq } = useParams();

    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const getGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);

                setGName(res.data.groupName);
            });
    };

    useEffect(() => {
        getGroup();
    }, []);

    const [gName, setGName] = useState('');

    const doneHandler = () => {
        alert(`${gName}을 ${action}하셨습니다 !`);

        // [추후] 강제퇴장 멘트 작성

        setChoiceModalSwitch(false);
    };

    // 모달창 닫기
    const closeModalHandler = () => {
        setChoiceModalSwitch(false);
    };

    //=== 모임장 위임 ===
    const [selectedMemberId, setSelectedMemberId] = useState(0);
    const [selectedMemberName, setSelectedMemberName] = useState('');

    const patchLeader = async () => {
        const input = { newLeaderUSeq: selectedMemberId };

        if (!selectedMemberId) {
            alert('모임장 권한 넘길 멤버를 클릭해주세요.');
            return;
        }

        try {
            await axios
                .patch(
                    `${process.env.REACT_APP_DB_HOST}/group/leader/${gSeq}`,
                    input,
                    {
                        headers: {
                            Authorization: `Bearer ${uToken}`,
                        },
                    }
                )
                .then((res) => {
                    console.log(res.data);

                    alert(
                        `${selectedMemberName} 님에게 모임장을 위임하였습니다.`
                    );
                    window.location.reload();
                });
        } catch (err) {
            console.log(err);
            alert('모임장 위임에 실패하였습니다.');
        }
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
                    <div>
                        <div className="modal-line"></div>
                    </div>
                    <ModalMemberList
                        action={action}
                        setChoiceModalSwitch={setChoiceModalSwitch}
                        closeModalHandler={closeModalHandler}
                        selectedMemberId={selectedMemberId}
                        setSelectedMemberId={setSelectedMemberId}
                        selectedMemberName={selectedMemberName}
                        setSelectedMemberName={setSelectedMemberName}
                    />
                    <div className="mission-cancel-btn-container">
                        {action === '모임장 권한 넘기기' ? (
                            <button
                                onClick={patchLeader}
                                className="btn-md leader-patch-btn"
                            >
                                {action}
                            </button>
                        ) : action === '강제 퇴장' ? (
                            <button
                                // onClick={missionCancelDone}
                                className="btn-md mission-cancel-done-btn"
                            >
                                {action}
                            </button>
                        ) : (
                            ''
                        )}
                        <button
                            onClick={closeModalHandler}
                            className="btn-md mission-cancel-back-btn"
                        >
                            취소
                        </button>
                    </div>
                    {/* <div className="modal-form">
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
                    </div> */}
                    {/* <div className="mission-cancel-btn-container">
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
                    </div> */}
                </div>
            </Modal>
        </div>
    );
}
