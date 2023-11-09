import React, { useState, ChangeEvent, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import Editor from './Editor';

import GroupHeader from '../../components/group/content/GroupHeader';
import { MissionType } from 'src/types/types';

export default function BoardMissionEdit() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq, mSeq, gbSeq } = useParams();

    console.log(gSeq, gbSeq);

    interface Mission {
        // mSeq: number;
        mTitle: string;
        mContent: string;
        mLevel: number;
        // map: string;
    }

    const [missionList, setMissionList] = useState<any>([]);

    const getGroup = async () => {
        const res = await axios
            .get(`${process.env.REACT_APP_DB_HOST}/group/detail/${gSeq}`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                setMissionList(res.data.groupMission);
            });
    };

    useEffect(() => {
        getGroup();
    }, []);

    console.log('>>>>>>', missionList);

    const [missionBoard, setMissionBoard] = useState<any>([]);

    //] 미션 게시글 조회
    const getBoardMission = async () => {
        const res = await axios
            .get(
                `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/mission/${mSeq}/${gbSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                console.log('========', res.data.groupInfo);
                setMissionBoard(res.data.groupInfo);

                const { gbTitle, gbContent } = res.data.groupInfo;

                setBoard({
                    gbTitle,
                    gbContent,
                });
            });
    };

    useEffect(() => {
        getBoardMission();
    }, []);

    // 미션 제목
    let missionTitle = '';

    for (let mission of missionList) {
        if (mission.mSeq === Number(mSeq)) {
            missionTitle = mission.mTitle;
        }
    }

    const [board, setBoard] = useState<any>({
        gbSeq: Number(gbSeq),
        gbTitle: '',
        gbContent: '',
    });

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
            <GroupHeader title={`미션 ${missionTitle}`} groupName={''} />
            <div className="post-container">
                <div className="noti-content post-header title5">
                    <div className="post-title">
                        <div>제목</div>
                        <input
                            type="text"
                            placeholder="제목을 입력해주세요."
                            onChange={getValue}
                            name="gbTitle"
                            required
                            value={board.gbTitle}
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
                <button className="editor-post-btn" onClick={boardEditHandler}>
                    작성 완료
                </button>
                {/* </Link> */}
            </div>
        </div>
    );
}
