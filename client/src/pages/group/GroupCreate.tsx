import React from 'react';
import { Link } from 'react-router-dom';
import InterestedList from '../../components/common/InterestedList';

import '../../styles/scss/pages/group/groupCreate.scss';

export default function GroupCreate() {
    return (
        <div className="section group-create-contianer title5">
            <div className="title2">어떤 모임을 생성하고 싶나요 ?</div>
            <div className="group-create-content">
                <div className="title-wrapper">
                    <div>모임명</div>
                    <input type="text" className="name-input" />
                </div>
                <div>대표 이미지</div>
                <button className="btn-sm">추가</button>
            </div>
            <div className="group-create-content">
                <div>분야</div>
                <InterestedList />
            </div>
            <div className="group-create-content description-container">
                <div>모임 설명</div>
                <textarea
                    className="description"
                    placeholder="500자 이내로 입력하세요."
                ></textarea>
            </div>
            <div className="group-create-content">
                <div>제한 인원</div>
                <input className="limit-number" type="number" />
                <div className="max-number">최대 00명</div>
            </div>
            <div className="group-create-content">
                <div>마감일</div>
                <div>2023-10-30</div>
            </div>
            <div className="group-create-content mission-wrapper">
                <div>Mission</div>
                <div className="mission-container">
                    <img src="/asset/icons/plus.svg" />
                    <div>팀원들과 어떤 것을 하고 싶나요 ?</div>
                </div>
            </div>
            <Link to="/group/home/1">
                <button className="btn-fixed">모임 시작하기 !</button>
            </Link>
        </div>
    );
}
