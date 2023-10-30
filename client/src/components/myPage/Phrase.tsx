import React, { useState, useRef } from 'react';

export default function Phrase(): JSX.Element {
    const [content, setContent] = useState<string | number>(
        '여름은 가을로부터 떨어진다'
    );
    const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
        setReadOnlyVal(!readOnlyVal);
    };

    //버튼 선택 시 : 배경 핑크, 글씨 하양 변경
    // 추천 선택 시 : 텍스트area 비활성화
    // 내가 선택 시 : 활성화 + 보임
    // 각 버튼 한개만 선택되어야
    const phraseSelect = (e: React.MouseEvent<HTMLElement>): void => {
        const phraseModeBtn: HTMLElement = e.target as HTMLElement;
        const phraseModeBtnVal: string | null =
            phraseModeBtn.getAttribute('for');

        switch (phraseModeBtnVal) {
            case 'phraseMode-btn1':
                setReadOnlyVal(true);
                phraseModeBtn.style.backgroundColor = '#ED8D8D';
                phraseModeBtn.style.color = 'white';
                break;
            case 'phraseMode-btn2':
                setReadOnlyVal(false);

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
                    onClick={(e) => phraseSelect(e)}
                    id="phraseMode-btn1"
                >
                    추천해주세요
                    <input
                        className="phrase-radio"
                        type="radio"
                        name="phraseMode"
                    ></input>
                </label>

                <label
                    className="phrase-label"
                    onClick={(e) => phraseSelect(e)}
                    id="phraseMode-btn2"
                >
                    내가 적을래요
                    <input
                        className="phrase-radio"
                        type="radio"
                        name="phraseMode"
                    ></input>
                </label>
            </div>
        </div>
    );
}
