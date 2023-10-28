import React from 'react';
import '../../styles/scss/pages/group/groupBoard.scss';

export default function GroupNoti() {
    return (
        <div className="section">
            <div className="group-header title2">
                <div>공지사항</div>
                <div>코딩학당</div>
            </div>
            <div className="noti-container">
                <div className="noti-header">
                    <div>No.</div>
                    <div>제목</div>
                    <div>작성자</div>
                    <div>날짜</div>
                </div>
                <div className="noti-content">
                    <ul>
                        <li>
                            <div>1</div>
                            <div>
                                [필독] 가입 시 채팅방에 간단한 인사말 남겨주세요
                                !
                            </div>
                            <div>달려라하니</div>
                            <div>2023.10.28</div>
                        </li>
                        <li>
                            <div>1</div>
                            <div>
                                [필독] 가입 시 채팅방에 간단한 인사말 남겨주세요
                                !
                            </div>
                            <div>달려라하니</div>
                            <div>2023.10.28</div>
                        </li>
                        <li>
                            <div>1</div>
                            <div>
                                [필독] 가입 시 채팅방에 간단한 인사말 남겨주세요
                                !
                            </div>
                            <div>달려라하니</div>
                            <div>2023.10.28</div>
                        </li>
                        <li>
                            <div>1</div>
                            <div>
                                [필독] 가입 시 채팅방에 간단한 인사말 남겨주세요
                                !
                            </div>
                            <div>달려라하니</div>
                            <div>2023.10.28</div>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <img src="/asset/icons/plus.svg" className="plus-fixed" />
            </div>
        </div>
    );
}
