import React from 'react';
import { Link } from 'react-router-dom';


export default function Login() {
  return (
    <div>
      <h1>Login</h1>
        <Link to="/join">
          <button>SSO 로그인</button>
        </Link>
    </div>
  );
}
