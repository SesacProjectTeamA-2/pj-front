import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';

import '../../styles/scss/pages/group/groupPostDetail.scss';
import { TextField } from '@mui/material';

import GroupHeader from '../../components/group/content/GroupHeader';
import GroupContentFooter from '../../components/group/content/GroupContentFooter';
import WarningModal from '../../components/common/modal/WarningModal';

export default function GroupMissionDetail() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    // 0. 프로필 사진 가져오기
    const [userImgSrc, setUserImgSrc] = useState<any>('/asset/images/user.svg'); // 문자열 변수

    const getUserData = async () => {
        await axios
            .get(`${process.env.REACT_APP_DB_HOST}/user/mypage`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log('getUserData 로그인 후 ', res.data);
                const { userImg } = res.data; //null

                if (userImg !== null || userImg !== undefined) {
                    //user가 업로드한 값 없으면 기본 이미지
                    setUserImgSrc(userImg);
                    console.log('userImgSrc 있음', userImgSrc);
                } else if (userImg) {
                    setUserImgSrc('/asset/images/user.svg');
                    console.log('userImgSrc 없음', userImgSrc);
                } else {
                    console.log('암것도 아님', userImgSrc);
                }
            })
            .catch((err) => {
                console.log('error 발생: ', err);
            });
    };
    // console.log(window.location.pathname);

    useEffect(() => {
        if (cookie.get('isUser')) {
            getUserData();
            console.log('HEADER 로그인');
        } else {
            console.log('HEADER 비로그인');
            return;
        }
    }, []);

    const { gSeq, mSeq, gbSeq, gCategory } = useParams();

    console.log(gSeq, mSeq, gbSeq, gCategory);

    // //; 게시글 조회 (GET)
    // const [notiList, setNotiList] = useState<any>([]);
    // const [missionList, setFreeList] = useState<any>([]);

    // //; 게시글 삭제 (DELETE)
    const nvg = useNavigate();

    const boardDeleteHandler = async (gbSeq: number) => {
        const res = await axios
            .delete(`${process.env.REACT_APP_DB_HOST}/board/delete/${gbSeq}`, {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                nvg(-1);
            });
    };

    //] 2. 미션게시글
    const [missionList, setMissionList] = useState<any>([]);

    // 미션 게시글 조회
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
                console.log('========', res.data);
                setMissionList(res.data.groupInfo);
                setCommentList(res.data.groupInfo.tb_groupBoardComments);
            });
    };

    useEffect(() => {
        getBoardMission();
    }, []);

    console.log('MMMMM', missionList);

    // 메뉴 선택
    const [menu, setMenu] = useState('');

    // 경고 공통 모달
    const [warningModalSwitch, setWarningModalSwitch] = useState(false);

    const warningModalSwitchHandler = (menu: string) => {
        setMenu(menu);
        setWarningModalSwitch(!warningModalSwitch);
    };

    //] 댓글

    const [commentList, setCommentList] = useState<any>([]);

    console.log('commentList', commentList);

    const [commentInput, setCommentInput] = useState({
        gbSeq,
        gbcContent: '',
    });

    const commentOnChange = (e: any) => {
        setCommentInput({
            ...commentInput,
            gbcContent: e.target.value,
        });
    };

    //; 댓글 등록 (POST)
    const postCommentHandler = async () => {
        const res = await axios.post(
            `${process.env.REACT_APP_DB_HOST}/comment/create/${gbSeq}`,
            commentInput,
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );

        console.log(res.data);
        // window.location.reload();
        getBoardMission();

        // setFreeList(res.data.groupInfo);
    };

    // [추후] 수정 input 추가
    let gbcSeq = Number(useParams());
    const [commentEditInput, setCommentEditInput] = useState({
        gbcSeq,
        gbcContent: '',
    });

    const commentEditOnChange = (e: any) => {
        setCommentEditInput({
            ...commentEditInput,
            gbcContent: e.target.value,
        });
    };

    // [임시] test용
    // const commentEditTestInput = {
    //     gbcSeq: 1,
    //     gbcContent: '댓글 수정합니다 !!!',
    // };

    //; 댓글 수정 (PATCH)
    const commentEditHandler = async (gbcSeq: number) => {
        // console.log(gbcSeq);

        const res = await axios.patch(
            `${process.env.REACT_APP_DB_HOST}/comment/edit/${gbcSeq}`,

            // commentEditInput,
            { gbcContent: commentEditInput.gbcContent },
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );
        if (res.data) {
            setCommentList((prevComments: any) =>
                prevComments.map((comment: any) =>
                    comment.gbcSeq === gbcSeq
                        ? { ...comment, gbcContent: commentInput.gbcContent }
                        : comment
                )
            );
            setCommentEditInput({ gbcSeq: 0, gbcContent: '' });
        }
    };

    //; 댓글 삭제 (DELETE)
    const commentDeleteHandler = async (gbcSeq: number) => {
        console.log(gbcSeq);

        const res = await axios
            .delete(
                `${process.env.REACT_APP_DB_HOST}/comment/delete/${gbcSeq}`,
                // commentEditTestInput, // [임시 test용]
                // [추후] commentEditInput으로 변경
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setCommentList(
                    commentList.filter((cmt: any) => cmt.gbcSeq !== gbcSeq)
                );
                getBoardMission();
            });
    };

    return (
        <div className="section section-group">
            {/* <GroupHeader
                // [ 추후 ] 넘버링 id 추가
                // title={`미션 1. ${missionArr[0]}`}
                title={`${gCategory}`}
                groupName={''}
            /> */}

            <div className="post-detail-container">
                <div className="post-detail-header-container">
                    <div className="post-detail-header">
                        <div className="post-detail-profile">
                            <img
                                className="profile-img"
                                src={userImgSrc}
                                alt="profile"
                            />
                            <div>
                                <div className="title4">
                                    {missionList?.gbTitle}
                                </div>
                                <div>
                                    {missionList?.tb_groupUser?.tb_user.uName}
                                </div>
                            </div>
                        </div>
                        <div className="date">{missionList?.createdAt}</div>
                    </div>
                    <div className="writer-menu">
                        {/* gSeq, gbSeq */}
                        <Link to={`/board/${gSeq}/edit/${gSeq}`}>
                            <div>수정</div>
                        </Link>
                        {/* [추후] 게시글 삭제 경고 모달 추가 */}
                        {/* <div onClick={() => warningModalSwitchHandler('삭제')}> */}
                        <div onClick={() => boardDeleteHandler(Number(gbSeq))}>
                            삭제
                        </div>
                        {/* </div> */}
                    </div>
                </div>

                {warningModalSwitch ? (
                    <WarningModal
                        warningModalSwitch={warningModalSwitch}
                        setWarningModalSwitch={setWarningModalSwitch}
                        warningModalSwitchHandler={warningModalSwitchHandler}
                        action={menu}
                    />
                ) : null}

                {/* 경고 공통 모달 */}
                {/* <WarningModal
                    warningModalSwitch={warningModalSwitch}
                    setWarningModalSwitch={setWarningModalSwitch}
                    warningModalSwitchHandler={warningModalSwitchHandler}
                    action={menu}
                /> */}

                <div className="post-detail-content-container">
                    <div
                        className="post-detail-content"
                        dangerouslySetInnerHTML={{
                            __html: missionList?.gbContent,
                        }}
                    />

                    {/* 댓글 수, 반응 수 */}
                    <GroupContentFooter
                        commentCount={
                            missionList?.tb_groupBoardComments?.length <= 0
                                ? 0
                                : missionList?.tb_groupBoardComments?.length
                        }
                    />

                    <div className="comment-create">
                        <textarea
                            className="comment-textarea"
                            onChange={commentOnChange}
                        ></textarea>
                        <button
                            className="btn-md"
                            onClick={() => postCommentHandler()}
                        >
                            등록
                        </button>
                    </div>

                    <div className="comment-list">
                        <ul>
                            {/* commentList, comments 둘다 되네요..^^ */}
                            {commentList?.map((comment: any, idx: number) => {
                                return (
                                    <li key={idx}>
                                        {/* START */}
                                        <div className="comment-header">
                                            <div className="comment-profile">
                                                <img
                                                    className="comment-img"
                                                    src={`${comment.tb_groupBoard.tb_groupUser.tb_user.uImg}`}
                                                    alt="profile"
                                                />
                                                <div className="title5">
                                                    {
                                                        comment.tb_groupBoard
                                                            .tb_groupUser
                                                            .tb_user.uName
                                                    }
                                                </div>
                                            </div>
                                            <div>
                                                <div className="date">
                                                    {comment.createdAt}
                                                </div>
                                                <div>
                                                    {/* 수정 삭제 버튼 div */}
                                                    <div
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection:
                                                                'row',
                                                            justifyContent:
                                                                'center',
                                                            flexBasis: '30%',
                                                        }}
                                                    >
                                                        <button
                                                            onClick={() =>
                                                                commentEditHandler(
                                                                    comment.gbcSeq
                                                                )
                                                            }
                                                            className="btn-sm"
                                                        >
                                                            수정
                                                        </button>

                                                        <button
                                                            onClick={() =>
                                                                commentDeleteHandler(
                                                                    comment.gbcSeq
                                                                )
                                                            }
                                                            className="btn-sm"
                                                        >
                                                            삭제
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* 댓글 내용 */}
                                        <TextField
                                            // value={comment.gbcContent}
                                            value={
                                                comment.gbcSeq ===
                                                commentEditInput.gbcSeq
                                                    ? commentEditInput.gbcContent
                                                    : comment.gbcContent
                                            }
                                            name="gbcContent"
                                            onChange={(
                                                e: React.ChangeEvent<HTMLInputElement>
                                            ) => {
                                                // commentEditOnChange(e);
                                                setCommentEditInput({
                                                    ...commentEditInput,
                                                    gbcContent: e.target.value,
                                                });
                                            }}
                                        ></TextField>

                                        {/* END */}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
