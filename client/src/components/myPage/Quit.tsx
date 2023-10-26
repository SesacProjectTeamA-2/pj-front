import React from 'react';

export default function Quit() {
    return (
        <div>
            <h3>회원탈퇴</h3>

            <button id="quit-btn">회원탈퇴</button>
            {/* 모임장일 경우, 위임하기 페이지로 이동 */}
            <p id="quit-notice">
                탈퇴 시 활동 정보가 모두 삭제되며 복구되지 않습니다.{' '}
            </p>
        </div>
    );
}
