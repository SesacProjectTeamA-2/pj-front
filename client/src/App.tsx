import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

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
import Groups from './pages/group/Groups';
import GroupHome from './pages/group/GroupHome';
import GroupNoti from './pages/group/GroupNoti';
import GroupBoard from './pages/group/GroupBoard';
import GroupMission from './pages/group/GroupMission';
import GroupMissionDone from './pages/group/GroupMissionDone';
import GroupCreate from './pages/group/GroupCreate';

import BasicLayout from './components/common/layout/BasicLayout';
import GroupLayout from './components/common/layout/GroupLayout';
import Post from './pages/group/Post';
import GroupPostDetail from './pages/group/GroupPostDetail';
import GroupEdit from './pages/group/GroupEdit';

function App() {
    // 헤더 채팅 버튼 눌렀을 때 채팅창 보여주는 함수
    const [showChat, setShowChat] = useState<boolean>(false);
    const showChatting = (): void => {
        setShowChat(!showChat);
        // console.log('showChat App', showChat);
    };
    const loc = useLocation().pathname;
    // console.log('current loaction', loc);
    const [showFooter, setShowFooter] = useState<boolean>(false);
    const setFooterShowing = (): void => {
        if (loc === '/') {
            setShowFooter(true);
        } else {
            console.log('no Footer');
            return;
        }
    };
    useEffect(() => {
        setFooterShowing();
    }, [showFooter]);

    return (
        <div className="App">
            <Header
                showChatting={showChatting}
                showChat={showChat}
                setFooterShowing={setFooterShowing}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <BasicLayout
                            children={<Intro />}
                            showChat={showChat}
                            showFooter={showFooter}
                        />
                    }
                />
                <Route
                    path="/login"
                    element={
                        <BasicLayout children={<Login />} showChat={showChat} />
                    }
                />

                <Route
                    path="/join"
                    element={
                        <BasicLayout children={<Join />} showChat={showChat} />
                    }
                />

                <Route
                    path="/main"
                    element={
                        <BasicLayout children={<Main />} showChat={showChat} />
                    }
                />

                <Route
                    path="/mission"
                    element={
                        <BasicLayout
                            children={<Mission />}
                            showChat={showChat}
                        />
                    }
                />

                <Route
                    path="/group"
                    element={
                        <BasicLayout
                            children={<Groups />}
                            showChat={showChat}
                        />
                    }
                />

                {/* 그룹에만 그룹 메뉴 존재 */}
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

                {/* 게시물 Create */}
                {/* [추후] 동적으로 수정하기 */}
                <Route
                    path="/group/post/1"
                    // path="*/post"
                    element={
                        <GroupLayout children={<Post />} showChat={showChat} />
                    }
                />

                {/* 게시물 Read */}
                {/* [추후] 동적으로 수정하기 */}
                <Route
                    path="/group/noti/1/1"
                    element={
                        <GroupLayout
                            children={<GroupPostDetail />}
                            showChat={showChat}
                        />
                    }
                />

                {/* 모임 Update */}
                <Route
                    path="/group/edit/1"
                    element={
                        <GroupLayout
                            children={<GroupEdit />}
                            showChat={showChat}
                        />
                    }
                />

                {/* 그룹 라우팅 끝 */}

                <Route
                    path="/mypage"
                    element={
                        <BasicLayout
                            children={<MyPage />}
                            showChat={showChat}
                        />
                    }
                />
                <Route
                    path="/management"
                    element={
                        <BasicLayout
                            children={<Management />}
                            showChat={showChat}
                        />
                    }
                />
                {/* 404 처리는 제일 밑에 있어야 함 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
