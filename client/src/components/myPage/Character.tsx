import React from 'react';

export default function Character() {
    // const selectedBtn: any = document.querySelector('button');
    // const selectCharacter = (): void => {
    //     selectedBtn.style.border = '2px solid blue';
    //     console.log('cl');
    // };
    return (
        <>
            <div className="character-div">
                <button className="selectBtn">
                    <img src="/asset/images/rabbit2.png" alt="img1" />
                </button>
                <button className="selectBtn">
                    <img src="/asset/images/dog2.png" alt="img2" />
                </button>
                <button className="selectBtn">
                    <img src="/asset/images/cat2.svg" alt="img3" />
                </button>
                <button className="selectBtn">
                    <img src="/asset/images/sqr2.svg" alt="img4" />
                </button>
            </div>
        </>
    );
}
