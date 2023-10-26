import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/scss/base/reset.scss';
import 'bootstrap/dist/css/bootstrap.css';

import Header from './components/common/Header';
import Intro from './pages/Intro';
import Main from './pages/Main';
import Mission from './pages/Mission';
import MyPage from './pages/user/MyPage';
import NotFound from './pages/NotFound';
import Management from './pages/Management';
import Login from './pages/user/Login';
import Join from './pages/user/Join';
import Group from './pages/group/Group';
import GroupHome from './pages/group/GroupHome';
import GroupNoti from './pages/group/GroupNoti';
import GroupBoard from './pages/group/GroupBoard';
import GroupMission from './pages/group/GroupMission';
import GroupMissionDone from './pages/group/GroupMissionDone';
import GroupCreate from './pages/group/GroupCreate';
import Chat from './components/common/Chat';
import GroupLayout from './components/common/GroupLayout';

function App() {
    const [showChat, setShowChat] = useState<boolean>(false);
    const showChatting = (): void => {
        setShowChat(!showChat);
        console.log('showChat App', showChat);
    };

    return (
        <div className="App">
            {/* <Chat /> */}
            <Header showChatting={showChatting} showChat={showChat} />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/main" element={<Main />} />
                <Route path="/mission" element={<Mission />} />

                {/* 그룹에만 그룹 메뉴 존재 */}
                <Route
                    path="/group"
                    element={
                        <GroupLayout children={<Group />} showChat={showChat} />
                    }
                />
                <Route
                    path="/group/create"
                    element={
                        <GroupLayout
                            children={<GroupCreate />}
                            showChat={showChat}
                        />
                    }
                />
                <Route
                    path="/group/home/*"
                    element={
                        <GroupLayout
                            children={<GroupHome />}
                            showChat={showChat}
                        />
                    }
                />
                <Route
                    path="/group/noti/*"
                    element={
                        <GroupLayout
                            children={<GroupNoti />}
                            showChat={showChat}
                        />
                    }
                />
                <Route
                    path="/group/board/*"
                    element={
                        <GroupLayout
                            children={<GroupBoard />}
                            showChat={showChat}
                        />
                    }
                />
                <Route
                    path="/group/mission/*"
                    element={
                        <GroupLayout
                            children={<GroupMission />}
                            showChat={showChat}
                        />
                    }
                />
                <Route
                    path="/group/mission/done/*"
                    element={
                        <GroupLayout
                            children={<GroupMissionDone />}
                            showChat={showChat}
                        />
                    }
                />
                {/* 그룹 라우팅 끝 */}

                <Route path="/mypage" element={<MyPage />} />
                <Route path="/management" element={<Management />} />
                {/* 404 처리는 제일 밑에 있어야 함 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
