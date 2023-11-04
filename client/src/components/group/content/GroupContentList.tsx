import React from 'react';
import GroupContentFooter from './GroupContentFooter';
import InfiniteScroll from 'react-infinite-scroller';
import { Link } from 'react-router-dom';

export default function GroupContent() {
    return (
        <div className="noti-container post-list-container">
            <ul>
                {/* [ START ] */}
                <Link to="/board/1/free">
                    <li>
                        <div className="post-list-content">
                            <div className="post-list-header">
                                <div className="post-list-title">
                                    {/* 프로필 이미지 */}
                                    <img
                                        className="profile-img"
                                        src="/asset/images/sqr1.svg"
                                        alt="profile"
                                    />

                                    {/* [추후] 작성자도 넣을지 말지 ? */}
                                    {/* <div>달려라하니</div> */}

                                    <div className="title4 cursor">
                                        제목입니다 1
                                    </div>
                                </div>
                                <div className="post-list-date">2023.10.28</div>
                            </div>
                            <div className="post-list-main cursor">
                                내용입니다 1
                            </div>

                            <GroupContentFooter />
                        </div>
                    </li>
                </Link>
                {/* [ END ] */}

                <li>
                    <div className="post-list-content">
                        <div className="post-list-header">
                            <div className="post-list-title">
                                {/* 프로필 이미지 */}
                                <img
                                    className="profile-img"
                                    src="/asset/images/sqr1.svg"
                                    alt="profile"
                                />

                                {/* [추후] 작성자도 넣을지 말지 ? */}
                                {/* <div>달려라하니</div> */}

                                <div className="title4 cursor">
                                    제목입니다 1
                                </div>
                            </div>
                            <div className="post-list-date">2023.10.28</div>
                        </div>
                        <div className="post-list-main cursor">
                            내용입니다 1
                        </div>

                        <div className="post-list-header">
                            <div className="post-list-footer">
                                <img
                                    className="img-comment"
                                    src="/asset/icons/comment.svg"
                                    alt="comment"
                                />
                                {/* [추후] 댓글 수 데이터 추가 */}
                                <div>댓글 수 3</div>
                            </div>
                            <div className="post-list-footer">
                                {/* [추후] 반응 수 데이터 추가 : map 돌리기 */}
                                {/* [추후] hover 시, 누가 반응했는지 추가 ? */}
                                {/* [추후] toggle 시, 반응 적용 / 취소 */}
                                <button className="btn-emoji">
                                    <div>👍🏻 2</div>
                                </button>
                                {/* [추후] 반응추가 말풍선 ? */}
                                <img
                                    className="img-emoji"
                                    src="/asset/icons/emoji.svg"
                                    alt="emoji"
                                />
                            </div>
                        </div>
                    </div>
                </li>

                <li>
                    <div className="post-list-content">
                        <div className="post-list-header">
                            <div className="post-list-title">
                                {/* 프로필 이미지 */}
                                <img
                                    className="profile-img"
                                    src="/asset/images/sqr1.svg"
                                    alt="profile"
                                />

                                {/* [추후] 작성자도 넣을지 말지 ? */}
                                {/* <div>달려라하니</div> */}

                                <div className="title4 cursor">
                                    제목입니다 1
                                </div>
                            </div>
                            <div className="post-list-date">2023.10.28</div>
                        </div>
                        <div className="post-list-main cursor">
                            내용입니다 1
                        </div>

                        <div className="post-list-header">
                            <div className="post-list-footer">
                                <img
                                    className="img-comment"
                                    src="/asset/icons/comment.svg"
                                    alt="comment"
                                />
                                {/* [추후] 댓글 수 데이터 추가 */}
                                <div>댓글 수 3</div>
                            </div>
                            <div className="post-list-footer">
                                {/* [추후] 반응 수 데이터 추가 : map 돌리기 */}
                                {/* [추후] hover 시, 누가 반응했는지 추가 ? */}
                                {/* [추후] toggle 시, 반응 적용 / 취소 */}
                                <button className="btn-emoji">
                                    <div>👍🏻 2</div>
                                </button>
                                {/* [추후] 반응추가 말풍선 ? */}
                                <img
                                    className="img-emoji"
                                    src="/asset/icons/emoji.svg"
                                    alt="emoji"
                                />
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}
