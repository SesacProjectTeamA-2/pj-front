import React from 'react';
// import CharacterItem from './CharacterItem';
import CharacterItem from './CharacterItem';

export default function CharacterList() {
    interface Character {
        id: string;
        imgSrc: string;
        alt: string;
    }
    const characterArr: Character[] = [
        {
            id: 'character-radio-rabbit',
            imgSrc: '/asset/images/rabbit2.svg',
            alt: 'img1',
        },

        {
            id: 'character-radio-dog',
            imgSrc: '/asset/images/dog2.svg',
            alt: 'img2',
        },

        {
            id: 'character-radio-cat',
            imgSrc: '/asset/images/cat2.svg',
            alt: 'img3',
        },
        {
            id: 'character-radio-sqr',
            imgSrc: '/asset/images/sqr2.svg',
            alt: 'img4',
        },
    ];

    return (
        <>
            <div className="character-div">
                <CharacterItem characterArr={characterArr} />
            </div>
        </>
    );
}
