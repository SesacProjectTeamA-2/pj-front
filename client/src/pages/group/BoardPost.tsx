import React, { useState, ChangeEvent, useEffect } from 'react';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import 'react-quill/dist/quill.snow.css';
import { Link, useParams } from 'react-router-dom';

import '../../styles/scss/pages/group/post.scss';

import GroupHeader from '../../components/group/content/GroupHeader';
import Editor from './Editor';
import { GroupDetailType, MissionType } from 'src/types/types';
import SuccessModal from 'src/components/common/modal/SucessModal';

export default function BoardPost() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq, gCategory, mSeq } = useParams();

    interface Mission {
        // mSeq: number;
        mTitle: string;
        mContent: string;
        mLevel: number;
        // map: string;
    }

    const [missionList, setMissionList] = useState<Mission[]>();

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

        setMissionSelected(
            String(res.data.groupMission[Number(mSeq) - 1]?.mSeq)
        );
    };

    // const getGroupMission = async () => {
    //     const res = await axios
    //         .get(`${process.env.REACT_APP_DB_HOST}/mission/group/${gSeq}`, {
    //             headers: {
    //                 Authorization: `Bearer ${uToken}`,
    //             },
    //         })
    //         .then((res) => {
    //             setMissionList(res.data.groupMission);
    //         });
    // };

    useEffect(() => {
        getGroup();
        // getGroupMission();
    }, []);

    console.log('missionList', missionList);

    // useEffect(() => {
    //     setMissionList(groupDetail.groupMission);
    // }, [groupDetail.groupMission]);

    // 1. 클릭한 곳 default 값
    // 1) Header - tilte
    // 2) select
    // 3) Link to
    // 2. select 변경 시 변경
    const [board, setBoard] = useState<any>({
        gSeq: Number(gSeq),
        gbTitle: '',
        gbContent: '',
        gbCategory: gCategory,
        mSeq: null,
    });

    const [missionSelected, setMissionSelected] = useState<string>('');
    const [selected, setSelected] = useState<string>(
        gCategory || missionSelected
    );

    // useEffect(() => {
    //     if (gCategory === 'mission') {
    //         setSelected(missionSelected);
    //     }
    // });

    console.log('missionSelected', missionSelected);

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

    //] select 태그 state관리
    const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setSelected(selectedValue);

        console.log('**********');

        // setBoard((prevBoard: any) => ({
        //     ...prevBoard,
        //     gbCategory: selectedValue,
        //     mSeq: null,
        // }));
        // console.log('setSelected 전', selectedValue);

        if (selectedValue === 'notice') {
            setBoard((prevBoard: any) => ({
                ...prevBoard,
                gbCategory: selectedValue,
                mSeq: null,
            }));
        } else if (selectedValue === 'free') {
            setBoard({
                ...board,
                gbCategory: 'free',
                mSeq: null,
            });
        } else {
            setBoard({
                ...board,
                gbCategory: 'mission',
                mSeq: Number(selectedValue),
            });
        }
        console.log('Selected:', e.target.value);
        // console.log('setSelected 후', board);
    };

    //gbContent관리
    const handleEditorChange = (value: string) => {
        setBoard({
            ...board,
            gbContent: value, // 에디터의 내용을 업데이트
        });
        // console.log(board);
    };

    //] 게시물 작성 완료 모달창
    const [successModalSwitch, setSuccessModalSwitch] = useState(false);

    const successHandler = () => {
        setSuccessModalSwitch(true);
    };

    // 정보 post
    const boardPostHandler = async () => {
        const res = await axios
            .post(`${process.env.REACT_APP_DB_HOST}/board/create`, board, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res);
                successHandler();
            });

        // [추후] input 입력 안했을 시, 로직

        // [추후] 수정한 모임 홈 화면으로 이동
    };

    console.log(board);

    const [postMenu, setPostMenu] = useState(gCategory);

    console.log('!!!!!!!!!!!', postMenu);

    useEffect(() => {
        setPostMenu(gCategory);
    }, []);

    if (postMenu === 'notice') {
        setPostMenu('공지사항');
    } else if (postMenu === 'free') {
        setPostMenu('자유/질문');
    } else if (postMenu === 'mission') {
        setPostMenu('미션');
    }

    return (
        <div className="section section-group">
            <div className="post-container">
                <div className="noti-content post-header title5">
                    <div className="select-box">
                        <div>종류</div>
                        <select
                            onChange={handleSelect}
                            value={selected}
                            // value={postMenu}
                            // defaultChecked={gCategory}
                        >
                            {/* default : + 누른 페이지 */}
                            {/* select 값에 따라 Link to 달라아야 함 */}

                            <option value="notice">공지사항</option>
                            <option value="free">자유/질문</option>

                            {missionList?.map((mission: any, idx: number) => {
                                return (
                                    <option value={mission.mSeq} key={idx}>
                                        {mission.mTitle}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

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
                <button className="editor-post-btn" onClick={boardPostHandler}>
                    작성 완료
                </button>
                {/* </Link> */}

                <SuccessModal
                    successModalSwitch={successModalSwitch}
                    setSuccessModalSwitch={setSuccessModalSwitch}
                    action={`${postMenu}을 작성`}
                    gSeq={gSeq}
                />
            </div>
        </div>
    );
}
