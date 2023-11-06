import React, { useState, useRef, useEffect } from 'react';

export default function Nickname(props: any): JSX.Element {
    // const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLInputElement>(null);
    // // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
    };

    // 마이페이지에서만 수정 버튼 보여주기
    const [displayMode, setDisplayMode] = useState<string>('none');
    const curPath: string = window.location.href;
    useEffect(() => {
        if (curPath.includes('mypage')) {
            setDisplayMode('flex');
        }
    }, [curPath]);

    return (
        <div className="nickname-div">
            <label className="input-label">
                <input
                    // readOnly={readOnlyVal}
                    onChange={(e) => props.setInput(e.target.value)}
                    value={props.input}
                    ref={inputRef}
                    id="input-area"
                    className="input-obj"
                    maxLength={10}
                />

                <button
                    onClick={(e) => changeReadOnly()}
                    className="edit-btn"
                    id="nickname-edit"
                    style={{ display: displayMode }}
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
