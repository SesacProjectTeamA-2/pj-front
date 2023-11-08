import React, { useState, useRef, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

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
        // else if (curPath.includes('join')) {
        //     inputRef.current?.setAttribute('readOnly', 'true');
        // }
    }, [curPath]);

    if (props.input.length > 10) {
        toast.error('10자 이내로 입력해주세요.');

        const slicedInput = props.input.slice(0, 10);
        props.setInput(slicedInput);
    } else {
        props.setInput(props.input);
    }

    return (
        <div className="nickname-div">
            <label className="input-label">
                {curPath.includes('join') ? (
                    // 회원가입 시 소셜 로그인 정보 표시 + 수정 불가
                    <>
                        <input
                            readOnly={true}
                            onChange={(e) => props.setInput(e.target.value)}
                            value={props.uName}
                            ref={inputRef}
                            id="input-area"
                            className="input-obj"
                            maxLength={10}
                        />
                    </>
                ) : (
                    // 마이페이지 가입 정보 표시 + 수정 가능
                    <>
                        <input
                            onChange={(e) => props.setInput(e.target.value)}
                            value={props.input}
                            ref={inputRef}
                            id="input-area"
                            className="input-obj"
                            // maxLength={10}
                        />
                    </>
                )}

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
