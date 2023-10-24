import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
<<<<<<< Updated upstream
  return (
    <div>
      <Link to="/">
        <h1>로고</h1>
      </Link>
      <nav>
        <Link to="/todo">
          <button>Todo</button>
        </Link>
        <Link to="/group">
          <button>Group</button>
        </Link>
        <Link to="/myPage">
          <button>My</button>
        </Link>
        <Link to="/management">
          {/* 관리자만 보이는 버튼 */}
          <button>Management</button>
        </Link>
        <img
          src="/asset/images/user.png"
          style={{ width: '40px', height: '40px' }}
          alt="userImg"
        ></img>
      </nav>
    </div>
  );
=======
    return (
        <div>
            <Link to="/">
                <h1>로고</h1>
            </Link>
            <nav>
                <Link to="/main">
                    <button>Main</button>
                </Link>
                <Link to="/todo">
                    <button>Todo</button>
                </Link>
                <Link to="/group">
                    <button>Group</button>
                </Link>

                {/* 관리자만 보이는 버튼 */}
                <Link to="/management">
                    <button>Management</button>
                </Link>

                {/* 비로그인 시 */}
                <Link to="/login">
                    <button>Login</button>
                </Link>
                {/* 로그인 시 */}

                <Link to="/myPage">
                    <img
                        src="/asset/images/user.png"
                        style={{ width: '40px', height: '40px' }}
                        alt="userImg"
                    ></img>
                </Link>
                <img
                    src="/asset/icons/chat.png"
                    style={{ width: '40px', height: '40px' }}
                    alt="chatImg"
                />
            </nav>
        </div>
    );
>>>>>>> Stashed changes
}
