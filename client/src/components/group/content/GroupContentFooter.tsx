import React from 'react';

export default function GroupContentFooter({
    commentCount,
}: {
    commentCount: number;
}) {
    return (
        <div className="post-list-header">
            <div className="post-list-footer">
                <img
                    className="img-comment"
                    src="/asset/icons/comment.svg"
                    alt="comment"
                />
                {/* [추후] 댓글 수 데이터 추가 */}
                <div>댓글 수 {commentCount}</div>
            </div>
            <div className="post-list-footer">
                {/* [추후] 반응 수 데이터 추가 : map 돌리기 */}
                {/* [추후] hover 시, 누가 반응했는지 추가 ? */}
                {/* [추후] toggle 시, 반응 적용 / 취소 */}
                {/* <button className="btn-emoji">
                    <div>👍🏻 2</div>
                </button> */}
                {/* [추후] 반응추가 말풍선 ? */}
                <img
                    className="img-emoji"
                    src="/asset/icons/emoji.svg"
                    alt="emoji"
                />
            </div>
        </div>
    );
}
