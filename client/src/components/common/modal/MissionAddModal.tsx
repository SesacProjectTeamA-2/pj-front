import React from 'react';

import '../../../styles/scss/components/modal.scss';

interface MissionAddModalProps {
    setAddModal: (value: boolean) => void;
}

export default function MissionAddModal({ setAddModal }: MissionAddModalProps) {
    const closeModalHandler = () => {
        setAddModal(false);
    };

    const addMissionModalHandler = () => {
        setAddModal(false);
    };

    return (
        <div className="modal-mission-add-container">
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
        </div>
    );
}
