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
        const phraseInput: HTMLTextAreaElement | null =
            document.querySelector('.phraseInput');
        // console.log(phraseInput);

        switch (phraseModeBtnVal) {
            case 'btn1':
                setReadOnlyVal(true);
                break;
            case 'btn2':
                setReadOnlyVal(false);
                break;
            default:
                return;
        }
        // if(phraseModeBtn)
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
            <br></br>

            <input
                className="phrase-radio"
                type="radio"
                id="btn1"
                name="phraseMode"
            ></input>
            <label
                htmlFor="btn1"
                className="phrase-label"
                onClick={(e) => phraseSelect(e)}
            >
                추천해주세요
            </label>

            <input
                className="phrase-radio"
                type="radio"
                id="btn2"
                name="phraseMode"
            ></input>
            <label
                htmlFor="btn2"
                className="phrase-label"
                onClick={(e) => phraseSelect(e)}
            >
                내가 적을래요
            </label>
        </div>
    );
}
