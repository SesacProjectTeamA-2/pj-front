import React from 'react';
import '../../styles/scss/pages/myPage.scss';

import Header from '../../components/common/Header';
import Nickname from '../../components/myPage/Nickname';
import Introduce from '../../components/myPage/Introduce';
import Character from '../../components/common/Character';
import Interested from '../../components/common/Interested';
import Phrase from '../../components/myPage/Phrase';
import SetMain from '../../components/myPage/SetMain';
import PsnCoverImg from '../../components/myPage/PsnCoverImg';

export default function MyPage() {
    return (
        <div className="myPage-div">
            <div className="myPage-sub-div">
                {/* 로그인 안 했을 때: 로그인 버튼 보임 + 채팅 버튼 안 보임 <br></br>
            로그인 했을 때: 로그인 버튼 안 보임 + 채팅 버튼/프로필 보임
            <br></br>ㄴ 관리자일 때: Management 버튼 추가로 보임 */}
                <Nickname />
                <Introduce />

                <br></br>
                <h3>내 캐릭터</h3>
                <Character />

                <br></br>
                <h3>관심분야</h3>
                <Interested />

                <br></br>
                <h3>명언</h3>
                <Phrase />

                <br></br>
                <hr></hr>
                <h3>메인화면 설정</h3>
                <SetMain />
                <PsnCoverImg />
            </div>
        </div>
    );
}
