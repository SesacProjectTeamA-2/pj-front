import React from 'react';
import '../../styles/scss/pages/myPage.scss';

import Nickname from '../../components/myPage/Nickname';
import Introduce from '../../components/myPage/Introduce';
import Character from '../../components/myPage/Character';

export default function MyPage() {
    return (
        <div>
            로그인 안 했을 때: 로그인 버튼 보임 + 채팅 버튼 안 보임 <br></br>
            로그인 했을 때: 로그인 버튼 안 보임 + 채팅 버튼/프로필 보임
            <br></br>ㄴ 관리자일 때: Management 버튼 추가로 보임
            <Nickname />
            <Introduce />
            <h5>내 캐릭터</h5>
            <Character />
        </div>
    );
}
