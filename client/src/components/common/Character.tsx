import React from 'react';

export default function Character() {
    const selectCharacter = (e: React.MouseEvent<HTMLElement>): void => {
        const selectedBtn: HTMLElement = e.target as HTMLInputElement;

        if (selectedBtn) {
            selectedBtn.style.border = '2px solid #ED8D8D';
            selectedBtn.style.borderRadius = '15px';
            console.log(selectedBtn);
        }
    };
    return (
        <>
            <div className="character-div">
                <input
                    type="radio"
                    name="character-radio"
                    className="character-radio"
                    id="character-radio-rabbit"
                    readOnly
                ></input>
                <label
                    htmlFor="character-radio-rabbit"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectCharacter(e)
                    }
                    className="character-label"
                >
                    <img src="/asset/images/rabbit2.svg" alt="img1" />
                </label>

                <input
                    type="radio"
                    name="character-radio"
                    className="character-radio"
                    id="character-radio-dog"
                    readOnly
                ></input>
                <label
                    htmlFor="character-radio-dog"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectCharacter(e)
                    }
                    className="character-label"
                >
                    <img src="/asset/images/dog2.svg" alt="img2" />
                </label>
                <input
                    type="radio"
                    name="character-radio"
                    className="character-radio"
                    id="character-radio-cat"
                    readOnly
                ></input>
                <label
                    htmlFor="character-radio-cat"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectCharacter(e)
                    }
                    className="character-label"
                >
                    <img src="/asset/images/cat2.svg" alt="img3" />
                </label>
                <input
                    type="radio"
                    name="character-radio"
                    className="character-radio"
                    id="character-radio-sqr"
                    readOnly
                ></input>
                <label
                    htmlFor="character-radio-sqr"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectCharacter(e)
                    }
                    className="character-label"
                >
                    <img src="/asset/images/sqr2.svg" alt="img4" />
                </label>
            </div>
        </>
    );
}
