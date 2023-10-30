import React from 'react';
import Modal from 'react-modal';
import Box from '@mui/material/Box';

import '../../../styles/scss/components/modal.scss';

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
                    <div onClick={closeModalHandler}>
                        <img
                            className="modal-mission-add-close-icon"
                            src="/asset/icons/close.svg"
                            alt="close-icon"
                        />
                    </div>
                    <div className="title5 modal-cancel-header">
                        <div className="title3">미션 완료를 취소합니다.</div>
                        <div className="title5 cancel-modal-description">
                            멤버가 잘못된 인증을 했을 경우, 미션완료를
                            취소합니다.
                        </div>
                    </div>
                    <div>
                        <div>그룹명</div>
                        <div>멤버 리스트</div>
                    </div>
                    <div>
                        <div>어떤 이유로 미션완료 인증이 안되나요 ?</div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
