import React, { useState, useRef } from 'react';

export default function Nickname(): JSX.Element {
    const [input, setInput] = useState<string | number>('짜앙구');
    const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);
    // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
        setReadOnlyVal(!readOnlyVal);
    };

    return (
        <div>
            <input
                readOnly={readOnlyVal}
                onChange={(e) => setInput(e.target.value)}
                value={input}
                ref={inputRef}
                className="inputArea"
                maxLength={10}
                style={{
                    border: 'none',
                    fontWeight: 'bold',
                    fontSize: '30px',
                }}
            />
            <button onClick={(e) => changeReadOnly()} className="edit-btn">
                <img
                    src="/asset/icons/edit.svg"
                    className="edit-img"
                    alt="editImg"
                ></img>
            </button>
        </div>
    );
}
