//=== 모달용 멤버 리스트 ===
// 모임장 제외, 멤버 한 명 선택 가능

import React from 'react';

export default function ModalMemberList() {
    const listClickHandler = () => {};

    return (
        <div className="modal-member-list-container">
            {/* 모임장 제외 멤버 리스트 */}
            <ul className="list-unstyled modal-member-list-ul">
                {/* [추후] 클릭한 li의 border만 변경되어야 */}
                <li onClick={listClickHandler}>
                    <div className="ranking-list">
                        <img src="/asset/images/sqr1.svg" />

                        <div className="cur-ranking-content">
                            <div className="title4">닉네임</div>
                            <div>자기소개입니다.</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="ranking-list">
                        <img src="/asset/images/sqr1.svg" />

                        <div className="cur-ranking-content">
                            <div className="title4">닉네임</div>
                            <div>자기소개입니다.</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="ranking-list">
                        <img src="/asset/images/sqr1.svg" />

                        <div className="cur-ranking-content">
                            <div className="title4">닉네임</div>
                            <div>자기소개입니다.</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="ranking-list">
                        <img src="/asset/images/sqr1.svg" />

                        <div className="cur-ranking-content">
                            <div className="title4">닉네임</div>
                            <div>자기소개입니다.</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="ranking-list">
                        <img src="/asset/images/sqr1.svg" />

                        <div className="cur-ranking-content">
                            <div className="title4">닉네임</div>
                            <div>자기소개입니다.</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="ranking-list">
                        <img src="/asset/images/sqr1.svg" />

                        <div className="cur-ranking-content">
                            <div className="title4">닉네임</div>
                            <div>자기소개입니다.</div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="ranking-list">
                        <img src="/asset/images/sqr1.svg" />

                        <div className="cur-ranking-content">
                            <div className="title4">닉네임</div>
                            <div>자기소개입니다.</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
