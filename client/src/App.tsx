import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/scss/base/reset.scss';

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

function App() {
    return (
        <div className="App">
            <Header />

            <Routes>
                {/* <Route path="/" element={<Layout children={<Intro />} />} /> */}
                <Route path="/" element={<Intro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/join" element={<Join />} />
                <Route path="/main" element={<Main />} />
                <Route path="/mission" element={<Mission />} />
                <Route path="/group" element={<Group />} />
                <Route path="/group/create" element={<GroupCreate />} />
                <Route path="/group/home/*" element={<GroupHome />} />
                <Route path="/group/noti/*" element={<GroupNoti />} />
                <Route path="/group/board/*" element={<GroupBoard />} />
                <Route path="/group/mission/*" element={<GroupMission />} />
                <Route
                    path="/group/mission/done/*"
                    element={<GroupMissionDone />}
                />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/management" element={<Management />} />
                {/* 404 처리는 제일 밑에 있어야 함 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}

export default App;
