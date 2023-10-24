import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Intro from './pages/Intro';
import Main from './pages/Main';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/main" element={<Main />} />

          {/* 404 처리는 제일 밑에 있어야 함 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
