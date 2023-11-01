import React, { useRef, useState } from 'react';

export default function Introduce(): JSX.Element {
    console.log(process.env.REACT_APP_DB_HOST);
    const [content, setContent] = useState<string | number>('');
    const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
        setReadOnlyVal(!readOnlyVal);
    };

    return (
        <div>
            <label className="input-label">
                <textarea
                    readOnly={readOnlyVal}
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    ref={inputRef}
                    className="input-obj"
                    id="text-area"
                />
                <button
                    onClick={(e) => changeReadOnly()}
                    className="edit-btn"
                    id="introduce-edit"
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
