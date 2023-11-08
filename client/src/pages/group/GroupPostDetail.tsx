import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import '../../styles/scss/pages/group/groupPostDetail.scss';

import GroupHeader from '../../components/group/content/GroupHeader';
import GroupContentFooter from '../../components/group/content/GroupContentFooter';
import WarningModal from '../../components/common/modal/WarningModal';

export default function GroupPostDetail() {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const { gSeq, mSeq, gbSeq, gCategory } = useParams();

    console.log(gSeq, mSeq, gbSeq, gCategory);

    //; 게시글 조회 (GET)
    const [freeList, setFreeList] = useState<any>([]);

    // [추후] 공지 or 자유/질문 or 미션
    const [boardType, setBoardType] = useState('');

    // 자유 게시글 상세 조회
    const getBoardFree = async () => {
        const res = await axios
            .get(
                `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/notice/${gbSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);

                setFreeList(res.data.groupInfo);
                setCommentCount(res.data.commentCount);
            });
    };

    useEffect(() => {
        getBoardFree();
    }, []);

    console.log('>>>>', freeList);

    //; 게시글 삭제 (DELETE)
    const boardDeleteHandler = async (gbSeq: number) => {
        const res = await axios.delete(
            `${process.env.REACT_APP_DB_HOST}/board/delete/${gbSeq}`,
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );

        console.log(res.data);
    };

    //] 2. 미션게시글
    const [missionList, setMissionList] = useState<any>([]);

    if (mSeq) {
        // 미션 게시글 조회
        const getBoardMission = async () => {
            const res = await axios.get(
                `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/mission/${mSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            );

            console.log(res.data);

            setMissionList(res.data.groupInfo);
        };
        getBoardMission();
    }

    // useEffect(() => {
    // }, []);

    // 메뉴 선택
    const [menu, setMenu] = useState('');

    // 경고 공통 모달
    const [warningModalSwitch, setWarningModalSwitch] = useState(false);

    const warningModalSwitchHandler = (menu: string) => {
        setMenu(menu);
        setWarningModalSwitch(!warningModalSwitch);
    };

    //] 댓글
    // 댓글 리스트 : 자유게시글에 포함
    const commentList = freeList.tb_groupBoardComments;

    const [comments, setComments] = useState<any>(
        freeList.tb_groupBoardComments
    );

    const [commentCount, setCommentCount] = useState(0);

    // const [commentList, setCommentList] = useState<any>([]);

    useEffect(() => {
        setComments(freeList.tb_groupBoardComments);
    }, [freeList.tb_groupBoardComments]);

    console.log('commentList', commentList);
    console.log('comments', comments);

    //   {
    //     createdAt: "2023-11-05 22:42:51",
    //     gbSeq: 3,
    //     gbcContent: "댓글 과연...!!!!",
    //     gbcSeq: 1,
    //     uSeq: 1,
    //     updatedAt: "2023-11-05 22:42:51"
    //   }

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
        window.location.reload();

        // setFreeList(res.data.groupInfo);
    };

    // [추후] 수정 input 추가
    const [commentEditInput, setCommentEditInput] = useState({
        gbcSeq: 1,
        gbcContent: '',
    });

    // [추후] 수정 input 추가
    const commentEditOnChange = (e: any) => {
        setCommentEditInput({
            ...commentEditInput,
            gbcContent: e.target.value,
        });
    };

    // [임시] test용
    const commentEditTestInput = {
        gbcSeq: 1,
        gbcContent: '댓글 수정합니다 !!!',
    };

    //; 댓글 수정 (PATCH)
    const commentEditHandler = async (gbcSeq: number) => {
        // console.log(gbcSeq);

        const res = await axios.patch(
            `${process.env.REACT_APP_DB_HOST}/comment/edit/${gbcSeq}`,
            commentEditTestInput, // [임시 test용]
            // [추후] commentEditInput으로 변경
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );

        // console.log(res.data);
        window.location.reload();
    };

    //; 댓글 삭제 (DELETE)
    const commentDeleteHandler = async (gbcSeq: number) => {
        console.log(gbcSeq);

        const res = await axios.delete(
            `${process.env.REACT_APP_DB_HOST}/comment/delete/${gbcSeq}`,
            // commentEditTestInput, // [임시 test용]
            // [추후] commentEditInput으로 변경
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );

        console.log(res.data);
    };

    return (
        <div className="section section-group">
            <GroupHeader
                // [ 추후 ] 넘버링 id 추가
                // title={`미션 1. ${missionArr[0]}`}
                title={`${gCategory}`}
                groupName={''}
            />

            <div className="post-detail-container">
                <div className="post-detail-header-container">
                    <div className="post-detail-header">
                        <div className="post-detail-profile">
                            <img
                                className="profile-img"
                                src="/asset/images/sqr2.svg"
                                alt="profile"
                            />
                            {/* uSeq 사용자 닉네임 가져오기 */}
                            <div className="title4">{freeList.uSeq}</div>
                        </div>
                        <div className="date">{freeList.createdAt}</div>
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
                        dangerouslySetInnerHTML={{ __html: freeList.gbContent }}
                    />

                    {/* 댓글 수, 반응 수 */}
                    <GroupContentFooter commentCount={commentCount} />

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
                                                    src="/asset/images/sqr2.svg"
                                                    alt="profile"
                                                />
                                                <div className="title5">
                                                    {comment.uSeq}
                                                    {/* [추후] 유저 닉네임 가져오기 */}
                                                </div>
                                            </div>
                                            <div>
                                                <div className="date">
                                                    {comment.createdAt}
                                                </div>
                                                <div>
                                                    <div
                                                        onClick={() =>
                                                            commentEditHandler(
                                                                comment.gbcSeq
                                                            )
                                                        }
                                                    >
                                                        수정
                                                    </div>
                                                    <div
                                                        //[추후] 모달로 수정
                                                        // onClick={() =>
                                                        //     warningModalSwitchHandler(
                                                        //         '댓글 삭제'
                                                        //     )
                                                        // }
                                                        onClick={() =>
                                                            commentDeleteHandler(
                                                                comment.gbcSeq
                                                            )
                                                        }
                                                    >
                                                        삭제
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>{comment.gbcContent}</div>
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
