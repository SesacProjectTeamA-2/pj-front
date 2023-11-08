import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { Cookies } from 'react-cookie';
import axios from 'axios';

import Modal from 'react-modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import '../../../styles/scss/components/modal.scss';

export default function SuccessModal({
    successModalSwitch,
    setSuccessModalSwitch,
    action,
    groupName,
    gSeq,
}: // choiceModalSwitchHandler,
any) {
    //=== 성공 모달창 ===
    //] 1. 모임 생성

    //] 2. 모임 수정 완료

    //] 3. 마이페이지 수정 완료

    //] 4. 게시글 작성 완료

    const nvg = useNavigate();

    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    // const getGroup = async () => {
    //     const res = await axios
    //         .get(`${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`, {
    //             headers: {
    //                 Authorization: `Bearer ${uToken}`,
    //             },
    //         })
    //         .then((res) => {
    //             console.log(res.data);

    //             setGName(res.data.groupName);
    //         });
    // };

    // useEffect(() => {
    //     getGroup();
    // }, []);

    // const [gName, setGName] = useState('');

    const doneHandler = () => {
        alert(`${action}했습니다 !`);

        // [추후] 강제퇴장 멘트 작성

        setSuccessModalSwitch(false);
    };

    // 모달창 닫기
    const closeModalHandler = () => {
        setSuccessModalSwitch(false);

        if (action === '모임을 생성') {
            nvg('/group');
        }

        if (action === '공지사항을 작성') {
            nvg(`/board/${gSeq}/notice`);
        }
    };

    return (
        <div>
            <Modal
                className="warning-modal-style"
                overlayClassName="overlay"
                isOpen={successModalSwitch}
                onRequestClose={() => setSuccessModalSwitch(false)}
                ariaHideApp={false}
            >
                <div onClick={closeModalHandler}>
                    <img
                        className="modal-mission-add-close-icon"
                        src="/asset/icons/close.svg"
                        alt="close-icon"
                    />
                </div>
                {/* <div className="modal-mission-cancel-content"> */}
                <div className="modal-mission-cancel-content leave-modal-content">
                    <div className="modal-cancel-title-container leave-modal-container">
                        <div className="title1">
                            {action === '모임 생성'
                                ? `${groupName} ${action}했습니다 !`
                                : action === '자유/질문을 작성'
                                ? `자유/질문 게시글을 작성했습니다 !`
                                : `${action}했습니다 !`}
                        </div>
                    </div>

                    <div className="mission-cancel-btn-container">
                        <button
                            onClick={closeModalHandler}
                            className="btn-md mission-cancel-back-btn"
                        >
                            확인
                        </button>
                    </div>
                </div>
                {/* </div> */}
            </Modal>
        </div>
    );
}
