import React, { useState, ChangeEvent } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import 'react-quill/dist/quill.snow.css';
import { Link } from 'react-router-dom';

import '../../styles/scss/pages/group/post.scss';

import GroupHeader from '../../components/group/content/GroupHeader';
import Editor from './Editor';

export default function BoardPost() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');
    // console.log('왜 안되는가');
    // 1. 클릭한 곳 default 값
    // 1) Header - tilte
    // 2) select
    // 3) Link to
    // 2. select 변경 시 변경
    const [board, setBoard] = useState({
        select: '',
        title: '',
        content: '',
    });
    const [selected, setSelected] = useState<string>('');

    const getValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setBoard({
            ...board,
            [name]: value,
        });

        console.log(board);
        // console.log(name, value);
    };

    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log('Selected:', e.target.innerText); // 수정: e.target.innerText를 사용하여 옵션 내용 가져오기
        setSelected(e.target.value);
    };

    const handleEditorChange = (value: string) => {
        setBoard({
            ...board,
            content: value, // 에디터의 내용을 업데이트
        });
        console.log(value);
    };

    const boardPostHandler = async () => {
        const res = await axios.post(
            `${process.env.REACT_APP_DB_HOST}/board/create`,
            board,
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );
        console.log(res.data);

        // [추후] input 입력 안했을 시, 로직

        // [추후] 수정한 모임 홈 화면으로 이동
    };

    return (
        <div className="section section-group">
            {/* title 값 넘겨 받기 ! */}
            <GroupHeader title={'공지사항'} groupName={'코딩학당'} />
            <div className="post-container">
                <div className="noti-content post-header title5">
                    <div>종류</div>
                    <select onChange={handleSelect} value={selected}>
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
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요."
                            onChange={getValue}
                            name="title"
                            required
                        />
                    </div>
                </div>
                <div>
                    {/* [추후] 에디터가 들어갈 부분입니다. */}
                    <Editor
                        value={board.content}
                        onChange={handleEditorChange}
                    />
                    {/* <textarea
                        className="editor"
                        placeholder="내용을 작성해주세요"
                    ></textarea> */}
                </div>
            </div>
            <div>
                {/* default : + 누른 페이지 */}
                <Link to="/group/noti/1">
                    <button className="btn-lg" onClick={boardPostHandler}>
                        작성 완료
                    </button>
                </Link>
            </div>
        </div>
    );
}
