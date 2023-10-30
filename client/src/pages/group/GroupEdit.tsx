import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InterestedList from '../../components/common/InterestedList';

import '../../styles/scss/pages/group/groupCreate.scss';
import MissionAddModal from '../../components/common/modal/MissionAddModal';

export default function GroupEdit() {
    const [addModalSwitch, setAddModalSwitch] = useState(false);

    const missionAddHandler = () => {
        setAddModalSwitch(true);
    };

    return (
        <div className="section group-create-contianer title5">
            <div className="title2">모임 수정하기</div>
            <div className="group-create-content group-create-title">
                <div className="title-wrapper">
                    <div>모임명</div>
                    <input
                        placeholder="10글자 이내로 입력해주세요"
                        type="text"
                        className="name-input"
                    />
                </div>
                <div className="group-create-img">
                    <div>대표 이미지</div>
                    <button className="btn-sm">추가</button>
                </div>
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
                <input
                    defaultValue={1}
                    className="limit-number"
                    type="number"
                />
                <div className="max-number">최대 00명</div>
            </div>
            <div className="group-create-content">
                <div>마감일</div>
                <div>2023-10-30</div>
                <input type="date" id="date-input" />
                {/* [추후] 디데이 추가 */}
            </div>
            <div className="group-create-content mission-wrapper">
                <div>Mission</div>
                <div className="mission-container">
                    <div onClick={missionAddHandler}>
                        <img src="/asset/icons/plus.svg" />
                    </div>
                    <div>팀원들과 어떤 것을 하고 싶나요 ?</div>
                </div>
            </div>

            {addModalSwitch ? (
                <MissionAddModal
                    addModalSwitch={addModalSwitch}
                    setAddModalSwitch={setAddModalSwitch}
                />
            ) : null}
            <Link to="/group/home/1">
                <button className="btn-fixed">모임 수정완료 !</button>
            </Link>
        </div>
    );
}
