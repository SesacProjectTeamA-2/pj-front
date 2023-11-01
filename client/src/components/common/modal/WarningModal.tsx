import React from 'react';
import Modal from 'react-modal';

import '../../../styles/scss/components/modal.scss';

export default function WarningModal({
    warningModalSwitch,
    setWarningModalSwitch,
    action,
}: any) {
    const doneHandler = () => {
        alert(`[코딩학당] 모임을 ${action}하셨습니다 !`);
        setWarningModalSwitch(false);
    };

    // 모달창 닫기
    const closeModalHandler = () => {
        setWarningModalSwitch(false);
    };

    return (
        <div className="modal-mission-add-container">
            <Modal
                className="warning-modal-style"
                overlayClassName="overlay"
                isOpen={warningModalSwitch}
                onRequestClose={() => setWarningModalSwitch(false)}
                ariaHideApp={false}
            >
                <div onClick={closeModalHandler}>
                    <img
                        className="modal-mission-add-close-icon"
                        src="/asset/icons/close.svg"
                        alt="close-icon"
                    />
                </div>
                <div className="modal-mission-cancel-content leave-modal-content">
                    <div className="modal-cancel-title-container leave-modal-container">
                        <div className="title1">🚨</div>
                        <div className="title3">
                            {action === '삭제'
                                ? `게시글을 ${action}하시겠습니까 ?`
                                : `[코딩학당] 모임을 정말 ${action}하시겠습니까 ?`}
                        </div>
                        <div className="title5 cancel-modal-description">
                            모임의 활동 정보가 모두 사라지며 복구되지 않습니다.
                        </div>
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
                            취 소
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
