import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/components/titles.scss';
import '../../styles/scss/components/buttons.scss';

export default function GroupHome() {
    return (
        <div className="section">
            <input type="text" placeholder="어떤 모임을 찾으시나요 ?" />
            <div className="title1">참여한 모임</div>
            {/* ! 태그 컴포넌트 추가 ! */}
            <Link to="/group/home/1">
                {/* /:id 추가 */}
                <button>코딩학당</button>
            </Link>
            <Link to="/group/home/2">
                <button>근손실방지</button>
            </Link>

            <div className="title1">내가 생성한 모임</div>
            <div>생성한 모임이 없습니다. </div>

            <div className="title1">이런 모임 어떠세요 ?</div>
            <button>추천모임1</button>
            <button>추천모임2</button>

            <Link to="/group/create">
                <button className="btn-fixed">내가 모임 만들기 !</button>
            </Link>
        </div>
    );
}
