import React from 'react';

export default function Character() {
    const selectCharacter = (e: React.MouseEvent<HTMLElement>): void => {
        const selectedBtn: HTMLElement = e.target as HTMLInputElement;

        if (selectedBtn) {
            selectedBtn.style.border = '2px solid #ED8D8D';
            selectedBtn.style.borderRadius = '15px';
        }
    };
    return (
        <>
            <div className="character-div">
                <button
                    className="selectBtn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectCharacter(e)
                    }
                >
                    <img src="/asset/images/rabbit2.png" alt="img1" />
                </button>
                <button
                    className="selectBtn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectCharacter(e)
                    }
                >
                    <img src="/asset/images/dog2.png" alt="img2" />
                </button>
                <button
                    className="selectBtn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectCharacter(e)
                    }
                >
                    <img src="/asset/images/cat2.svg" alt="img3" />
                </button>
                <button
                    className="selectBtn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectCharacter(e)
                    }
                >
                    <img src="/asset/images/sqr2.svg" alt="img4" />
                </button>
            </div>
        </>
    );
}
