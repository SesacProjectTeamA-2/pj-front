import React from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/pages/group/groupMissionList.scss';

import GroupContent from '../../components/group/content/GroupContentList';
import GroupHeader from '../../components/group/content/GroupHeader';

export default function GroupMission() {
    const missionArr = ['알고리즘', '블로깅', '모각코'];

    return (
        <div className="section section-group">
            <GroupHeader
                // [ 추후 ] 넘버링 id 추가
                title={`미션 1. ${missionArr[0]}`}
                groupName={'코딩학당'}
            />
            <div className="noti-container proof-container">
                <div className="noti-header proof-header">
                    <div className="title5">[ 인증방법 ]</div>
                    <div>주어지는 문제에 대한 코드 풀이를 제출합니다.</div>
                </div>
            </div>
            <GroupContent />
            <Link to="/group/post/1">
                <img src="/asset/icons/plus.svg" className="plus-fixed" />
            </Link>
        </div>
    );
}
