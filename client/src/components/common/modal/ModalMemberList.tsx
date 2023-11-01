//=== 모달용 멤버 리스트 ===
// 모임장 제외, 멤버 한 명 선택 가능

import React, { useState } from 'react';

export default function ModalMemberList({ action }: any) {
    interface MemberType {
        id: number;
        name: string;
        img: string;
    }

    const memberList: MemberType[] = [
        {
            id: 1,
            name: '멤버1',
            img: '/asset/images/sqr1.svg',
        },
        {
            id: 2,
            name: '멤버2',
            img: '/asset/images/sqr1.svg',
        },
        {
            id: 3,
            name: '멤버3',
            img: '/asset/images/sqr1.svg',
        },
        {
            id: 4,
            name: '멤버4',
            img: '/asset/images/sqr1.svg',
        },
        {
            id: 5,
            name: '멤버5',
            img: '/asset/images/sqr1.svg',
        },
        {
            id: 6,
            name: '멤버6',
            img: '/asset/images/sqr1.svg',
        },
    ];

    const [selectedMemberId, setSelectedMemberId] = useState(0);

    const listClickHandler = (id: number) => {
        setSelectedMemberId(id);
    };

    return (
        <div className="modal-member-list-container">
            {/* 모임장 제외 멤버 리스트 */}
            <ul className="list-unstyled modal-member-list-ul">
                {memberList.map((member) => {
                    return (
                        <label
                            key={member.id}
                            onClick={() => listClickHandler(member.id)}
                            className="modal-member-list-label"
                            style={{
                                backgroundColor:
                                    action === '강제 퇴장' &&
                                    selectedMemberId === member.id
                                        ? '#e20606'
                                        : action === '미션인증 취소' &&
                                          selectedMemberId === member.id
                                        ? '#e20606'
                                        : action === '모임장 권한 넘기기' &&
                                          selectedMemberId === member.id
                                        ? '#ed8d8d'
                                        : 'white',

                                color:
                                    selectedMemberId === member.id
                                        ? 'white'
                                        : 'black',

                                cursor: 'pointer',
                            }}
                        >
                            <input
                                className="mission-cancel-modal-memeber-input"
                                type="radio"
                                name="missionType"
                            />
                            <div className="ranking-list">
                                <img src={member.img} />
                                <div className="cur-ranking-content">
                                    <div className="title4">{member.name}</div>
                                </div>
                            </div>
                        </label>
                    );
                })}
            </ul>
        </div>
    );
}
