import React, { useState } from 'react';

export default function Nickname(): JSX.Element {
    const [nickname, setNickname] = useState<String>('');
    return (
        <div>
            <input
                readOnly={false}
                onChange={(e) => setNickname(e.target.value)}
              
            />
            <img src="/asset/icons/edit.png" alt="editImg"></img>
        </div>
    );
}
