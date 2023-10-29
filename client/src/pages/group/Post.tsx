import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/pages/group/post.scss';

import GroupHeader from '../../components/group/content/GroupHeader';

export default function Post() {
    return (
        <div className="section section-group">
            <GroupHeader title={'공지사항'} groupName={'코딩학당'} />
            <div className="noti-container post-container">
                <div className="noti-content post-header title5">
                    <div>종류</div>
                    <select>
                        <option>공지사항</option>
                        <option>자유/질문</option>
                        <option>미션1</option>
                        <option>미션2</option>
                        <option>미션3</option>
                    </select>
                    <div className="post-title">
                        <div>제목</div>
                        <input type="text" placeholder="제목을 입력해주세요." />
                    </div>
                </div>
                <div>
                    {/* [추후] 에디터가 들어갈 부분입니다. */}
                    <textarea placeholder="내용을 작성해주세요"></textarea>
                </div>
            </div>
            <div>
                <button className="btn-md">작성 완료</button>
            </div>
        </div>
    );
}
