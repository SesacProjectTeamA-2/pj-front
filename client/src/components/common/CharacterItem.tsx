import React, { useState, useEffect } from 'react';

export default function CharacterItem(props: any) {
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
        null
    );

    const selectCharacter = (characterSrc: string): void => {
        setSelectedCharacter(characterSrc);
    };
    // const selectedCharacterSrc:string= props.chracterArr[]

    useEffect(() => {
        console.log('Selected Character:', selectedCharacter);
    }, [selectedCharacter]);

    return (
        <div className="character-item-div ">
            {props.characterArr.map((character: any) => {
                return (
                    <label
                        key={character.id}
                        onClick={() => selectCharacter(character.imgSrc)}
                        className="character-label"
                        style={{
                            border:
                                selectedCharacter === character.imgSrc
                                    ? '5px solid #ed8d8d'
                                    : 'none',
                            borderRadius: '15px',
                        }}
                    >
                        <input
                            type="radio"
                            name="character-radio"
                            className="character-radio"
                            id={character.id}
                            value={character.val}
                            readOnly
                        />
                        <img
                            src={character.imgSrc}
                            alt={character.alt}
                            className="character-img"
                        />
                    </label>
                );
            })}
        </div>
    );
}
