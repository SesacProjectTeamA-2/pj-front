import React from 'https://cdn.skypack.dev/react';
import ReactDOM from 'https://cdn.skypack.dev/react-dom';

export default Text = ({ value }) => (
    <div className="text">
        {value.split('').map((char, i) => (
            <div className="letter" style={{ '--delay': `${i * 0.2}s` }}>
                <span className="source">{char}</span>
                <span className="shadow">{char}</span>
                <span className="overlay">{char}</span>
            </div>
        ))}
    </div>
);
