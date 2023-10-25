import React, { useState } from 'react';

export default function SetMain() {
    const [checked, setChecked] = useState<boolean>(false); //체크 안 된 상태

    //체크 안 되어있으면 unfill 아이콘, 체크 돼면 fill 아이콘
    const pinSrc = !checked
        ? '/asset/icons/pin_unfill.svg'
        : '/asset/icons/pin_fill.svg';

    const handleCheck = (e: React.MouseEvent<HTMLElement>): void => {
        setChecked(!checked);
        const dDayBtn: HTMLElement = e.target as HTMLElement;
        console.log(checked);

        //리더님께 질문하기
        // switch (checked) {
        //     case true:
        //         dDayBtn.setAttribute('src', '/asset/icons/pin_fill.svg');
        //         break;
        //     case false:
        //         dDayBtn.setAttribute('src', '/asset/icons/pin_unfill.svg');
        //         break;
        //     default:
        //         return;
        // }
    };
    return (
        <div>
            <table className="setMain-table">
                <tr>
                    <th></th>
                    <th></th>
                    <th>D-Day</th>
                    <th>달성률</th>
                </tr>
                <tr>
                    <td>코딩학당</td>
                    <td>D-3</td>
                    <td>
                        <input
                            type="radio"
                            name="setDday"
                            className="setDday-radio"
                            checked={checked}
                        ></input>
                        <label
                            htmlFor="setDday"
                            className="setDday-label"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                handleCheck(e)
                            }
                        >
                            <img
                                src={pinSrc}
                                alt="pinImg1"
                                className="pin-img"
                            />
                        </label>
                    </td>
                    <td>
                        <input
                            type="radio"
                            name="setDone"
                            className="setDone-radio"
                            checked={checked}
                        ></input>
                        <label
                            htmlFor="setDone"
                            className="setDone-label"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                handleCheck(e)
                            }
                        >
                            <img
                                src="/asset/icons/pin_unfill.svg"
                                alt="pinImg1"
                                className="pin-img"
                            />
                        </label>
                    </td>
                </tr>
                <tr>
                    <td>근손실방지</td>
                    <td>D-7</td>
                    <td>
                        <input
                            type="radio"
                            name="setDday"
                            className="setDday-radio"
                            checked={checked}
                        ></input>
                        <label
                            htmlFor="setDday"
                            className="setDday-label"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                handleCheck(e)
                            }
                        >
                            <img
                                src="/asset/icons/pin_unfill.svg"
                                alt="pinImg1"
                                className="pin-img"
                            />
                        </label>
                    </td>
                    <td>
                        <input
                            type="radio"
                            name="setDone"
                            className="setDone-radio"
                            checked={checked}
                        ></input>
                        <label
                            htmlFor="setDone"
                            className="setDone-label"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                handleCheck(e)
                            }
                        >
                            <img
                                src="/asset/icons/pin_unfill.svg"
                                alt="pinImg1"
                                className="pin-img"
                            />
                        </label>
                    </td>
                </tr>
            </table>
        </div>
    );
}
