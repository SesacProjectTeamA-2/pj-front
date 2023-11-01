import React, { useState, useRef } from 'react';

export default function Phrase(): JSX.Element {
    const [content, setContent] = useState<string | number>(
        '여름은 가을로부터 떨어진다'
    );
    const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    //클릭 버튼 값
    const [phraseModeBtnVal, setPhraseModeBtnVal] = useState<string>('');

    // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
        setReadOnlyVal(!readOnlyVal);
    };

    const phraseSelect = (e: React.ChangeEvent<HTMLElement>): void => {
        const phraseModeBtn: HTMLElement = e.target as HTMLElement;
        setPhraseModeBtnVal(phraseModeBtn.getAttribute('value') || '');
        console.log(phraseModeBtnVal);
    };
    return (
        <div>
            <label className="input-label">
                <textarea
                    readOnly={readOnlyVal}
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                    ref={inputRef}
                    maxLength={50}
                    className="input-obj"
                    id="text-area2"
                />
                <button
                    onClick={(e) => changeReadOnly()}
                    className="edit-btn"
                    id="phrase-edit"
                >
                    <img
                        src="/asset/icons/edit.svg"
                        className="edit-img"
                        alt="editImg"
                    ></img>
                </button>
            </label>
            <br></br>

            <div className="phraseMode-btn-div">
                <label
                    className="phrase-label"
                    id="phraseMode-btn1"
                    style={{
                        background:
                            phraseModeBtnVal === 'recommend'
                                ? ' #ed8d8d'
                                : '#d9d9d9',
                        color: 'white',
                    }}
                >
                    <input
                        className="phrase-radio"
                        type="radio"
                        name="phraseMode"
                        value="recommend"
                        onChange={(e) => phraseSelect(e)}
                    ></input>
                    추천해주세요
                </label>

                <label
                    className="phrase-label"
                    id="phraseMode-btn2"
                    style={{
                        background:
                            phraseModeBtnVal === 'self'
                                ? ' #ed8d8d'
                                : '#d9d9d9',
                        color: 'white',
                    }}
                >
                    <input
                        className="phrase-radio"
                        type="radio"
                        name="phraseMode"
                        value="self"
                        onChange={(e) => phraseSelect(e)}
                    ></input>
                    내가 적을래요
                </label>
            </div>
        </div>
    );
}
