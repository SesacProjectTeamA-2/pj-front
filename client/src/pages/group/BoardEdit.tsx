import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import Editor from './Editor';

import GroupHeader from '../../components/group/content/GroupHeader';
import { MissionType } from 'src/types/types';

export default function BoardEdit() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq, gbSeq } = useParams();

    console.log(gSeq, gbSeq);

    interface Mission {
        // mSeq: number;
        mTitle: string;
        mContent: string;
        mLevel: number;
        // map: string;
    }

    const [missionList, setMissionList] = useState<Mission[]>();

    useEffect(() => {
        const getGroup = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            );

            setMissionList(res.data.groupMission);
        };

        getGroup();
    }, []);

    console.log('>>>>>>', missionList);

    const [board, setBoard] = useState({
        gbSeq: Number(gbSeq),
        gbTitle: '',
        gbContent: '',
        // gbCategory: 'notice', // [참고] 게시글 수정은 카테고리 변경 불가
    });

    // const [selected, setSelected] = useState<string>('');

    //gbTitle state 관리
    const getValue = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setBoard({
            ...board,
            [name]: value,
        });

        // console.log(board);
        // console.log(name, value);
    };

    // //select 태그 state관리
    // const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    //     // console.log('setSelected 전',board);

    //     const selectedValue = e.target.value;
    //     setSelected(selectedValue);

    //     setBoard({
    //         ...board,
    //         gbCategory: selectedValue,
    //     });

    //     // console.log('Selected:', e.target.value);
    //     // console.log('setSelected 후', board);
    // };

    //gbContent관리
    const handleEditorChange = (value: string) => {
        setBoard({
            ...board,
            gbContent: value, // 에디터의 내용을 업데이트
        });
        // console.log(board);
    };

    // 게시물 edit
    const boardEditHandler = async () => {
        const res = await axios.patch(
            `${process.env.REACT_APP_DB_HOST}/board/edit/${gbSeq}`,
            board,
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );
        console.log(res);

        // [추후] input 입력 안했을 시, 로직

        // [추후] 수정한 모임 홈 화면으로 이동
    };

    console.log(board);

    return (
        <div className="section section-group">
            {/* [추후] title 값 넘겨 받기 ! */}
            {/* params 가져와서 : free */}
            <GroupHeader title={'공지사항'} groupName={'코딩학당'} />
            <div className="post-container">
                <div className="noti-content post-header title5">
                    <div>종류</div>
                    {/* [참고] 게시글 수정은 카테고리 변경 불가 */}
                    {/* <select onChange={handleSelect} value={selected}> */}
                    {/* <option value="notice">공지사항</option>
                        <option value="free">자유/질문</option>
                        {missionList?.map(
                            (mission: MissionType, idx: number) => {
                                return (
                                    <>
                                        <option value={`mission${idx}`}>
                                            {mission.mTitle}
                                        </option>
                                    
                                    </>
                                );
                            }
                        )}
                    </select> */}
                    <div className="post-title">
                        <div>제목</div>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요."
                            onChange={getValue}
                            name="gbTitle"
                            required
                        />
                    </div>
                </div>
                <div>
                    <Editor
                        value={board.gbContent}
                        onChange={handleEditorChange}
                    />
                </div>
            </div>
            <div>
                {/* default : + 누른 페이지 */}
                {/* <Link to="/group/noti/1"> */}
                <button className="btn-lg" onClick={boardEditHandler}>
                    작성 완료
                </button>
                {/* </Link> */}
            </div>
        </div>
    );
}
