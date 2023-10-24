import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Intro</h1>
      <button
        onClick={() => {
          navigate('/main');
        }}
      >
        Main
      </button>
    </div>
  );
}
