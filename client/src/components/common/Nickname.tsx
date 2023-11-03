import React, { useState, useRef } from 'react';

export default function Nickname(): JSX.Element {
    const [input, setInput] = useState<string | number>('');
    // const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);
    // // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
    };

    return (
        <div className="nickname-div">
            <label className="input-label">
                <input
                    // readOnly={readOnlyVal}
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    ref={inputRef}
                    id="input-area"
                    className="input-obj"
                    maxLength={10}
                />
                <button
                    onClick={(e) => changeReadOnly()}
                    className="edit-btn"
                    id="nickname-edit"
                >
                    <img
                        src="/asset/icons/edit.svg"
                        className="edit-img"
                        alt="editImg"
                    ></img>
                </button>
            </label>
        </div>
    );
}
