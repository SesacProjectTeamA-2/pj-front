import React from 'react';

import '../../styles/scss/pages/myPage.scss';

import Nickname from '../../components/common/Nickname';
import Introduce from '../../components/myPage/Introduce';
import CharacterList from '../../components/common/CharacterList';
import InterestedList from '../../components/common/InterestedList';
import Phrase from '../../components/myPage/Phrase';
import SetMainList from '../../components/myPage/SetMainList';
import ProfilePic from '../../components/myPage/ProfilePic';
import PsnCoverImg from '../../components/myPage/PsnCoverImg';
import Quit from '../../components/myPage/Quit';

export default function MyPage() {
    return (
        <div className="section">
            {/* 로그인 안 했을 때: 로그인 버튼 보임 + 채팅 버튼 안 보임 <br></br>
                로그인 했을 때: 로그인 버튼 안 보임 + 채팅 버튼/프로필 보임
                <br></br>ㄴ 관리자일 때: Management 버튼 추가로 보임 */}
            <div className="myPage-div-one">
                <ProfilePic />
                <Nickname />
                <Introduce />
            </div>

            <div className="myPage-div-two">
                <br></br>
                <h3>내 캐릭터</h3>
                <CharacterList />
            </div>
            <br></br>

            <div className="myPage-div-three">
                <h3>관심분야</h3>
                <InterestedList />
                <br></br>
                <h3>명언</h3>
                <Phrase />
            </div>
            <br></br>
            <hr></hr>

            <div className="myPage-div-four">
                <h3>메인화면 설정</h3>
                <SetMainList />
                <br></br>
                <PsnCoverImg />
            </div>
            <br></br>
            <hr></hr>

            <div className="myPage-div-five">
                <Quit />
            </div>
            <br></br>

            <div className="myPage-div-six">
                <button id="myPage-edit-btn" type="submit">
                    수정 완료
                </button>
            </div>
        </div>
    );
}
