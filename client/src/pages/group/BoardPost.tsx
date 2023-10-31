import React from 'react';
import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

import '../../styles/scss/pages/group/post.scss';

import GroupHeader from '../../components/group/content/GroupHeader';
import Editor from './Editor';

export default function BoardPost() {
    // 1. 클릭한 곳 default 값
    // 1) Header - tilte
    // 2) select
    // 3) Link to

    // 2. select 변경 시 변경

    return (
        <div className="section section-group">
            {/* title 값 넘겨 받기 ! */}
            <GroupHeader title={'공지사항'} groupName={'코딩학당'} />
            <div className="post-container">
                <div className="noti-content post-header title5">
                    <div>종류</div>
                    <select>
                        {/* default : + 누른 페이지 */}
                        {/* select 값에 따라 Link to 달라아야 함 */}

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
                    <Editor />
                    <textarea
                        className="editor"
                        placeholder="내용을 작성해주세요"
                    ></textarea>
                </div>
            </div>
            <div>
                {/* default : + 누른 페이지 */}
                <Link to="/group/noti/1">
                    <button className="btn-lg">작성 완료</button>
                </Link>
            </div>
        </div>
    );
}
