import React from 'react';

export default function Quotes() {
    return (
        <div className="content-grid-box quotes-div-flex">
            <div className="quotes">
                <span>"</span>
                삶의 가장 큰 영예는 넘어지지 않는 것이 아니라, 우리가 넘어질
                때마다 다시 일어나는데에 있다.
                <span>"</span>
                <div className="quotes-author-flex">
                    <div> - 랄프 왈도 에머슨</div>
                </div>
                {/* <div className="quotes-btn-flex">
                    <button>랜덤 생성</button>

                    <img
                        src="/asset/icons/edit.svg"
                        alt="명언 편집 아이콘"
                        className="upload-img-icon"
                    />
                </div> */}
            </div>
        </div>
    );
}
