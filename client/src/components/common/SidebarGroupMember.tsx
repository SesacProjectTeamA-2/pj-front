//=== 멤버 그룹 사이드바 ===

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import '../../styles/scss/layout/sidebarGroup.scss';
import '../../styles/scss/components/modal.scss';

export default function SideBarGroupMember() {
    const [modalSwitch, setModalSwitch] = useState(false);

    // 모달 열기/닫기 핸들러 함수
    const toggleModal = () => {
        setModalSwitch(!modalSwitch);
    };

    return (
        <div>
            <ul className="title5 member-menu">
                <li className="member-leave" onClick={toggleModal}>
                    탈 퇴
                </li>
                {/* <Modal isOpen={true}>모달입니다.</Modal> */}
                <Modal
                    className="modal-style"
                    overlayClassName="overlay"
                    isOpen={modalSwitch}
                    onRequestClose={() => setModalSwitch(false)}
                    ariaHideApp={false}
                >
                    <div className="modal-mission-cancel-content">
                        <div className="title5 modal-cancel-header">
                            <div onClick={toggleModal}>
                                <img
                                    className="modal-mission-add-close-icon"
                                    src="/asset/icons/close.svg"
                                    alt="close-icon"
                                />
                            </div>
                            <div className="modal-cancel-title-container">
                                <div className="title3">🚨</div>
                                <div className="title3">
                                    [코딩학당] 모임을 정말 탈퇴하시겠습니까 ?
                                </div>
                                <div className="title5 cancel-modal-description">
                                    모임의 활동 정보가 모두 사라지며 복구되지
                                    않습니다.
                                </div>
                            </div>
                        </div>

                        <div className="mission-cancel-btn-container">
                            <button className="btn-md mission-cancel-done-btn">
                                탈 퇴
                            </button>
                            <button className="btn-md mission-cancel-back-btn">
                                취 소
                            </button>
                        </div>
                    </div>
                </Modal>
            </ul>
        </div>
    );
}
