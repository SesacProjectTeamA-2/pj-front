import React from 'react';

export default function Quotes() {
    return (
        <div className="content-grid-box">
            <div className="quotes">
                <span>"</span>
                꿈과 야망은 성공의 원동력이 아니다. 보잘것없어 보이는 1인치
                전진을 위하여 오늘 외롭게 최선을 다하는 힘이 바로 성공의
                원동력이다.
                <span>"</span>
                <div className="quotes-author-flex">
                    <div> - 세이노</div>
                </div>
                <div className="quotes-btn-flex">
                    <button>랜덤 생성</button>

                    <img
                        src="/asset/icons/edit.svg"
                        alt="명언 편집 아이콘"
                        className="upload-img-icon"
                    />
                </div>
            </div>
        </div>
    );
}
