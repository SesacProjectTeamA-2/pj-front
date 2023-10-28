import React from 'react';
import GroupHeader from '../../components/group/content/GroupHeader';

export default function GroupBoard() {
    return (
        <div className="section section-group">
            <GroupHeader title={'자유/질문'} groupName={'코딩학당'} />
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
