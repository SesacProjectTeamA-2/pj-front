import React from 'react';
import Modal from 'react-modal';

import '../../../styles/scss/components/modal.scss';

interface MissionAddModalProps {
    addModalSwitch: boolean;
    setAddModalSwitch: (value: boolean) => void;
}

export default function MissionAddModal({
    addModalSwitch,
    setAddModalSwitch,
}: MissionAddModalProps) {
    const closeModalHandler = () => {
        setAddModalSwitch(false);
    };

    const addMissionModalHandler = () => {
        setAddModalSwitch(false);
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
                <div onClick={closeModalHandler}>
                    <img
                        className="modal-mission-add-close-icon"
                        src="/asset/icons/close.svg"
                        alt="close-icon"
                    />
                </div>
                <div className="modal-mission-add-content">
                    <div className="title4">미션 추가하기</div>
                    <div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                    </div>
                    <button onClick={addMissionModalHandler} className="btn-md">
                        미션 추가
                    </button>
                </div>
            </Modal>
        </div>
    );
}
