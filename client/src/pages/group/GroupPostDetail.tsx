import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import axios from 'axios';
import '../../styles/scss/pages/group/groupPostDetail.scss';
import { TextField } from '@mui/material';

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
                // else if (userImg) {
                //     setUserImgSrc('/asset/images/user.svg');
                //     console.log('userImgSrc 없음', userImgSrc);
                // } else {
                //     console.log('암것도 아님', userImgSrc);
                // }
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
    // const commentList = freeList.tb_groupBoardComments;

    // const [comments, setComments] = useState<any>(
    //     freeList.tb_groupBoardComments
    // );

    // const [commentCount, setCommentCount] = useState(0);

    // console.log('>>>>>>>>>', commentCount);
    const [commentList, setCommentList] = useState<any>([]);

    // useEffect(() => {
    //     setComments(freeList.tb_groupBoardComments);
    // }, [freeList.tb_groupBoardComments]);

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
        // window.location.reload();
        getBoardNoti();

        // setFreeList(res.data.groupInfo);
    };

    // 수정

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
        // setEditComment({ ...editComment, gbcContent: e.target.value });
    };

    // [임시] test용
    const commentEditTestInput = {
        gbcSeq: 1,
        gbcContent: '댓글 수정합니다 !!!',
    };

    //; 댓글 수정 (PATCH)
    // const editBtnEvt=(e:React.MouseEvent):void=>{

    //     commentEditHandler(gbcSeq)
    // }
    const commentEditHandler = async (gbcSeq: number) => {
        // console.log(gbcSeq);

        const res = await axios.patch(
            `${process.env.REACT_APP_DB_HOST}/comment/edit/${gbcSeq}`,
            commentEditTestInput, // [임시 test용]
            // [추후] commentEditInput으로 변경
            // commentEditInput,
            // { gbcContent: commentEditInput.gbcContent },
            {
                headers: {
                    Authorization: `Bearer ${uToken}`,
                },
            }
        );

        // 수정 모드 종료
        // setEditComment({ gbcSeq: -1, gbcContent: '' });
        // console.log(res.data);
        // window.location.reload();
        getBoardNoti();
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
                            {/* commentList, comments 둘다 되네요..^^ */}
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
                                                              <button
                                                                  className="btn-sm"
                                                                  onClick={() =>
                                                                      commentEditOnChange(
                                                                          comment.gbcSeq
                                                                      )
                                                                  }
                                                              >
                                                                  수정
                                                              </button>
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
                                                  {
                                                      <TextField
                                                          value={
                                                              comment.gbcContent
                                                          }
                                                          onChange={(
                                                              e: React.ChangeEvent<HTMLInputElement>
                                                          ) =>
                                                              commentEditOnChange(
                                                                  e
                                                              )
                                                          }
                                                      />
                                                  }
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
