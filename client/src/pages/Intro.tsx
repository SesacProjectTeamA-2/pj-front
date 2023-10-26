import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
    const navigate = useNavigate();

    return (
        <div className="section">
            <div className="sub-container">
                <h1>Intro</h1>
                <button
                    onClick={() => {
                        navigate('/main');
                    }}
                >
                    Main
                </button>
            </div>
        </div>
    );
}
