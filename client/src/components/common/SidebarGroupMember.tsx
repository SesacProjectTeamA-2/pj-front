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
                    탈퇴하시겠습니까?
                </Modal>
            </ul>
        </div>
    );
}
