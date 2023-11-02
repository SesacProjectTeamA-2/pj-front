import React from 'react';
import { Link } from 'react-router-dom';
import SwiperComponent from '../../components/group/SwiperComponent';

export default function GroupList() {
    return (
        <div>
            <div className="groups join">
                <div className="title1">참여한 모임</div>

                {/* ! 태그 컴포넌트 추가 ! */}

                <SwiperComponent />

                {/* map 돌리기 - /:id 추가 */}
                <Link to="/group/home/1">
                    <button>코딩학당</button>
                </Link>

                {/* <Link to="/group/home/2">
                        <button>근손실방지</button>
                    </Link> */}
            </div>

            <div className="groups created">
                <div className="title1">내가 생성한 모임</div>
                <div>생성한 모임이 없습니다. </div>
            </div>

            <div className="groups recommend">
                <div className="title1">이런 모임 어떠세요 ?</div>
                <button>추천모임1</button>
            </div>

            <div className="btn-fixed-wrapper">
                <Link to="/group/create">
                    <button className="btn-fixed">내가 모임 만들기 !</button>
                </Link>
            </div>
        </div>
    );
}