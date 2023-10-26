import React, { useRef, useState } from 'react';

export default function Introduce(): JSX.Element {
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
            <textarea
                readOnly={readOnlyVal}
                onChange={(e) => setContent(e.target.value)}
                value={content}
                ref={inputRef}
                maxLength={50}
                className="textArea"
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
