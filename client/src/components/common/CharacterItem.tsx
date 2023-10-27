import React, { useState, useEffect } from 'react';

export default function CharacterItem(props: any) {
    const [selectedCharacter, setSelectedCharacter] = useState<string | null>(
        null
    );

    const selectCharacter = (characterId: string): void => {
        setSelectedCharacter(characterId);
    };

    useEffect(() => {
        console.log('Selected Character:', selectedCharacter);
    }, [selectedCharacter]);

    return (
        <div>
            {props.characterArr.map((character: any) => {
                return (
                    <label
                        key={character.id}
                        onClick={() => selectCharacter(character.id)}
                        className="character-label"
                        style={{
                            border:
                                selectedCharacter === character.id
                                    ? '1px solid red'
                                    : 'none',
                        }}
                    >
                        <input
                            type="radio"
                            name="character-radio"
                            className="character-radio"
                            id={character.id}
                            readOnly
                        />
                        <img src={character.imgSrc} alt={character.alt} />
                    </label>
                );
            })}
        </div>
    );
}
