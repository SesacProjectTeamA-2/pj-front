import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/scss/base/reset.scss';

import Intro from './pages/Intro';
import Main from './pages/Main';
import Todo from './pages/Todo';
import GroupHome from './pages/group/Group';
import MyPage from './pages/user/MyPage';
import Header from './components/common/Header';
import NotFound from './pages/NotFound';
import Management from './pages/Management';
import Login from './pages/user/Login';
import Join from './pages/user/Join';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Intro />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/todo" element={<Todo />} />
                    <Route path="/group/*" element={<GroupHome />} />
                    <Route path="/myPage" element={<MyPage />} />
                    <Route path="/management" element={<Management />} />
                    {/* 404 처리는 제일 밑에 있어야 함 */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
