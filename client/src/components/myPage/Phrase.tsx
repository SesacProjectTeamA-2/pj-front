import React, { useState, useRef } from 'react';

export default function Phrase(): JSX.Element {
    const [content, setContent] = useState<string | number>(
        '여름은 가을로부터 떨어진다'
    );
    const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLTextAreaElement>(null);

    // 버튼 클릭 상태 관리
    const [recSelected, setRecSelected] = useState<boolean>(false);
    const [selfSelected, setSelfSelected] = useState<boolean>(false);

    // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
        setReadOnlyVal(!readOnlyVal);
    };

    const phraseSelect = (e: React.ChangeEvent<HTMLElement>): void => {
        const phraseModeBtn: HTMLElement = e.target as HTMLElement;
        const phraseModeBtnVal: string | null =
            phraseModeBtn.getAttribute('value');

        switch (phraseModeBtnVal) {
            case 'recommend':
                setReadOnlyVal(true);
                setRecSelected((prev) => !prev);
                console.log(phraseModeBtn.parentNode);
                console.log(recSelected);
                break;

            case 'self':
                setReadOnlyVal(false);
                setSelfSelected((prev) => !prev);
                break;

            default:
                return;
        }
        // if(phraseModeBtn)
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
                        background: recSelected ? '5px solid #ed8d8d' : 'gray',
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

                <label className="phrase-label" id="phraseMode-btn2">
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
