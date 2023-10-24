import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
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
}
