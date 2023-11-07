import React, { useState, useRef } from 'react';

export default function Phrase(props: any): JSX.Element {
    // const [readOnlyVal, setReadOnlyVal] = useState<boolean>(true);
    const inputRef = useRef<HTMLTextAreaElement>(null);
    // console.log(props.phraseModeBtnVal);
    // edit btn 눌렀을 때 focus + 수정 가능 상태로 바뀜
    const changeReadOnly = (): void => {
        inputRef.current?.focus();
        // setReadOnlyVal(!readOnlyVal);
    };

    return (
        <div>
            <label className="input-label">
                <textarea
                    // readOnly={readOnlyVal}
                    onChange={(e) => props.setPhraseCtt(e.target.value)}
                    value={props.phraseCtt}
                    ref={inputRef}
                    maxLength={50}
                    className="input-obj"
                    id="text-area2"
                    style={{
                        display:
                            props.phraseModeBtnVal === 'recommend'
                                ? 'none'
                                : 'block',
                    }}
                />
                <button
                    // onClick={(e) => changeReadOnly()}
                    className="edit-btn"
                    id="phrase-edit"
                    style={{
                        display:
                            props.phraseModeBtnVal === 'recommend'
                                ? 'none'
                                : 'flex',
                        color: 'white',
                    }}
                    onClick={(e: React.MouseEvent) =>
                        props.setPhreaseModeBtnVal(e)
                    }
                >
                    <img
                        src="/asset/icons/edit.svg"
                        className="edit-img"
                        alt="editImg"
                    ></img>
                </button>
            </label>

            <div className="phraseMode-btn-div">
                <label
                    className="phrase-label"
                    id="phraseMode-btn1"
                    style={{
                        background:
                            props.phraseModeBtnVal === 'recommend'
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
                        onChange={(e) => props.phraseSelect(e)}
                    ></input>
                    추천해주세요
                </label>

                <label
                    className="phrase-label"
                    id="phraseMode-btn2"
                    style={{
                        background:
                            props.phraseModeBtnVal === 'self'
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
                        onChange={(e) => props.phraseSelect(e)}
                    ></input>
                    내가 적을래요
                </label>
            </div>
        </div>
    );
}
