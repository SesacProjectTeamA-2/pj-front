import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import '../../styles/scss/pages/group/groupPostDetail.scss';
import { ListItem, ListItemText, TextField } from '@mui/material';

import GroupHeader from '../../components/group/content/GroupHeader';
import GroupContentFooter from '../../components/group/content/GroupContentFooter';
import WarningModal from '../../components/common/modal/WarningModal';

export default function GroupPostDetail() {
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
                } else {
                    // user가 업로드한 값이 없거나 undefined일 때
                    setUserImgSrc('/asset/images/user.svg');
                    console.log('userImgSrc 없음', userImgSrc);
                }
            })
            .catch((err) => {
                console.log('error 발생: ', err);
            });
    };

    useEffect(() => {
        if (cookie.get('isUser')) {
            getUserData();
        } else {
            return;
        }
    }, []);

    const { gSeq, mSeq, gbSeq, gCategory } = useParams();
    console.log(gSeq, mSeq, gbSeq, gCategory);

    //; 게시글 조회 (GET)
    const [notiList, setNotiList] = useState<any>([]);
    const [freeList, setFreeList] = useState<any>([]);
    const [boardComments, setBoardComments] = useState<any>([]);

    // // [추후] 공지 or 자유/질문 or 미션
    // const [boardType, setBoardType] = useState('');

    //] 0. 공지 게시글 상세 조회

    const [userInfo, SetUserInfo] = useState<any>([]);

    const getBoardNoti = async () => {
        const res = await axios
            .get(
                `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/${gCategory}/${gbSeq}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                console.log('getBoardNoti=======', res.data);
                // console.log(
                //     'userInfo',
                //     res.data.groupInfo.tb_groupUser.tb_user
                // );

                setFreeList(res.data.groupInfo);

                const userInfo = res.data.groupInfo.tb_groupUser.tb_user;
                SetUserInfo(userInfo);

                const boardComments = res.data.groupInfo.tb_groupBoardComments;
                setBoardComments(boardComments);
                // setCommentCount(res.data.commentCount);
            });
    };

    useEffect(() => {
        getBoardNoti();
    }, []);

    console.log('boardComments', boardComments);

    //] 1. 자유 게시글 상세 조회
    // const getBoardFree = async () => {
    //     const res = await axios
    //         .get(
    //             `${process.env.REACT_APP_DB_HOST}/board/${gSeq}/free/${gbSeq}`,
    //             {
    //                 headers: {
    //                     Authorization: `Bearer ${uToken}`,
    //                 },
    //             }
    //         )
    //         .then((res) => {
    //             console.log('getBoardFree', res.data);

    //             setFreeList(res.data.groupInfo);
    //             // setCommentCount(res.data.commentCount);
    //         });
    // };

    // useEffect(() => {
    //     getBoardFree();
    // }, []);

    // console.log('>>>>', freeList);

    //; 게시글 삭제 (DELETE)
    const boardDeleteHandler = () => {
        warningModalSwitchHandler();
    };

    // const boardDeleteHandler = async (gbSeq: number) => {
    //     const res = await axios
    //         .delete(`${process.env.REACT_APP_DB_HOST}/board/delete/${gbSeq}`, {
    //             headers: {
    //                 Authorization: `Bearer ${uToken}`,
    //             },
    //         })
    //         .then((res) => {
    //             nvg(-1);
    //             console.log(res.data);
    //         });
    // };

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

    const warningModalSwitchHandler = () => {
        setWarningModalSwitch(!warningModalSwitch);
    };

    //] 댓글
    // 댓글 리스트 : 자유게시글에 포함

    const [commentList, setCommentList] = useState<any>([]);

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
        getBoardNoti();

        // setFreeList(res.data.groupInfo);
    };

    // =================== 수정 ==================
    const [isEditing, setIsEditing] = useState(
        Array(boardComments.length).fill(false)
    );

    const toggleWrite = (idx: number): void => {
        const updatedIsEditing = [...isEditing];
        updatedIsEditing[idx] = !updatedIsEditing[idx];
        setIsEditing(updatedIsEditing);
        console.log('isEditing ', isEditing);

        if (isEditing[idx]) {
            // 쓰기모드면 : 텍스트 필드 + commitEditHandler + 버튼 '완료'
            // commentEditHandler(boardComments[idx].gbcSeq, idx);
            setCommentEditInput({
                gbcSeq: boardComments[idx].gbcSeq,
                gbcContent: boardComments[idx].gbcContent,
            });
        } else {
            // 읽기모드면 : 리스트 아이템 + readOnly + 버튼 '수정'
            setCommentEditInputs((prevInputs) => {
                const updatedInputs = [...prevInputs];
                updatedInputs[idx] = boardComments[idx].gbcContent;
                return updatedInputs;
            });
        }
    };

    const [commentEditInput, setCommentEditInput] = useState({
        gbcSeq: 1,
        gbcContent: '',
    });

    // 개별 관리
    const [commentEditInputs, setCommentEditInputs] = useState<string[]>([]);

    // [추후] 수정 input 추가
    const commentEditOnChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        idx: number
    ) => {
        const updatedInputs = [...commentEditInputs];
        updatedInputs[idx] = e.target.value;
        setCommentEditInputs(updatedInputs);
    };

    //; 댓글 수정 (PATCH)
    const commentEditHandler = async (gbcSeq: number, idx: number) => {
        console.log('HEY! ', {
            gbcSeq,
            gbcContent: commentEditInput.gbcContent,
        });
        const res = await axios.patch(
            `${process.env.REACT_APP_DB_HOST}/comment/edit/${gbcSeq}`,

            { gbcSeq, gbcContent: commentEditInputs[idx] },

            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );

        getBoardNoti();
    };

    //; 댓글 삭제 (DELETE)
    const commentDeleteHandler = async (gbcSeq: number) => {
        console.log(gbcSeq);

        const res = await axios
            .delete(
                `${process.env.REACT_APP_DB_HOST}/comment/delete/${gbcSeq}`,

                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            )
            .then((res) => {
                console.log(res.data);
                setCommentList((prevComments: any) =>
                    prevComments.filter(
                        (comment: any) => comment.gbcSeq !== gbcSeq
                    )
                );
                getBoardNoti();
            });
    };

    return (
        <div className="section section-group">
            <div className="post-detail-container">
                <div className="post-detail-header-container">
                    <div className="post-detail-header">
                        <div className="post-detail-profile">
                            <img
                                className="profile-img"
                                src={
                                    userInfo?.uImg ||
                                    userImgSrc ||
                                    '/asset/images/user.svg'
                                }
                                alt="profile"
                            />
                            {/* uSeq 사용자 닉네임 가져오기 */}
                            <div>
                                <div className="title4">
                                    {freeList.gbTitle}{' '}
                                </div>
                                <div>{userInfo?.uName}</div>
                            </div>
                        </div>
                        <div className="date">{freeList?.createdAt}</div>
                    </div>
                    <div className="writer-menu">
                        {/* gSeq, gbSeq */}
                        <Link to={`/board/${gSeq}/edit/${gCategory}/${gbSeq}`}>
                            <div>수정</div>
                        </Link>
                        <div onClick={boardDeleteHandler}>삭제</div>
                    </div>
                </div>

                {/* {warningModalSwitch ? (
                    <WarningModal
                        warningModalSwitch={warningModalSwitch}
                        setWarningModalSwitch={setWarningModalSwitch}
                        warningModalSwitchHandler={warningModalSwitchHandler}
                        action={menu}
                    />
                ) : null} */}

                {/* 경고 공통 모달 */}
                <WarningModal
                    warningModalSwitch={warningModalSwitch}
                    setWarningModalSwitch={setWarningModalSwitch}
                    warningModalSwitchHandler={warningModalSwitchHandler}
                    action={'게시글을 삭제'}
                    gbSeq={gbSeq}
                    mSeq={mSeq}
                />

                <div className="post-detail-content-container">
                    <div
                        className="post-detail-content"
                        dangerouslySetInnerHTML={{
                            __html: freeList?.gbContent,
                        }}
                    />

                    {/* 댓글 수, 반응 수 */}
                    <GroupContentFooter
                        commentCount={
                            boardComments.length <= 0 ? 0 : boardComments.length
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
                            {boardComments.length <= 0
                                ? ''
                                : boardComments?.map(
                                      (comment: any, idx: number) => {
                                          return (
                                              <li key={idx}>
                                                  {/* START */}
                                                  <div className="comment-header">
                                                      <div className="comment-profile">
                                                          <img
                                                              className="comment-img"
                                                              src={
                                                                  comment
                                                                      .tb_groupBoard
                                                                      .tb_groupUser
                                                                      .tb_user
                                                                      .uImg ||
                                                                  userImgSrc ||
                                                                  '/asset/images/user.svg'
                                                              }
                                                              alt="profile"
                                                          />
                                                          <div className="title5">
                                                              {
                                                                  comment
                                                                      .tb_groupBoard
                                                                      .tb_groupUser
                                                                      .tb_user
                                                                      .uName
                                                              }
                                                              {/* [추후] 유저 닉네임 가져오기 */}
                                                          </div>
                                                      </div>
                                                      <div>
                                                          <div className="date">
                                                              {
                                                                  comment.createdAt
                                                              }
                                                          </div>

                                                          {/* 댓글 div */}
                                                          <div
                                                              style={{
                                                                  display:
                                                                      'flex',
                                                                  flexDirection:
                                                                      'row',
                                                                  justifyContent:
                                                                      'center',
                                                                  flexBasis:
                                                                      '30%',
                                                              }}
                                                          >
                                                              {/* 원래 수정 버튼 */}
                                                              {/* <button
                                                                  className="btn-sm"
                                                                  onClick={() =>
                                                                      commentEditHandler(
                                                                          comment.gbcSeq,
                                                                          idx
                                                                      )
                                                                  }
                                                              >
                                                                  수정
                                                              </button> */}

                                                              {isEditing[
                                                                  idx
                                                              ] ? (
                                                                  // 쓰기모드
                                                                  <button
                                                                      className="btn-sm"
                                                                      onClick={() =>
                                                                          //   commentEditHandler(
                                                                          //       comment.gbcSeq,
                                                                          //       idx
                                                                          //   )
                                                                          toggleWrite(
                                                                              idx
                                                                          )
                                                                      }
                                                                  >
                                                                      완료
                                                                  </button>
                                                              ) : (
                                                                  // 읽기모드
                                                                  <button
                                                                      className="btn-sm"
                                                                      onClick={() =>
                                                                          toggleWrite(
                                                                              idx
                                                                          )
                                                                      }
                                                                  >
                                                                      수정
                                                                  </button>
                                                              )}

                                                              <button
                                                                  className="btn-sm"
                                                                  onClick={() =>
                                                                      commentDeleteHandler(
                                                                          comment.gbcSeq
                                                                      )
                                                                  }
                                                              >
                                                                  삭제
                                                              </button>
                                                          </div>
                                                      </div>
                                                  </div>

                                                  {/* 댓글 내용 */}
                                                  {isEditing[idx] ? (
                                                      <TextField
                                                          value={
                                                              commentEditInputs[
                                                                  idx
                                                              ] ||
                                                              comment.gbcContent
                                                          }
                                                          onChange={(
                                                              e: React.ChangeEvent<HTMLInputElement>
                                                          ) =>
                                                              commentEditOnChange(
                                                                  e,
                                                                  idx
                                                              )
                                                          }
                                                      />
                                                  ) : (
                                                      <ListItemText
                                                          primary={
                                                              commentEditInputs[
                                                                  idx
                                                              ] ||
                                                              comment.gbcContent
                                                          }
                                                      />
                                                  )}
                                              </li>
                                              //  END
                                          );
                                      }
                                  )}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
