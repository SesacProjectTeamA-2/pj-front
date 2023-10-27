import React, { useState, useEffect } from 'react';

export default function usePxToRem(px: number) {
    const [remValue, setRemValue] = useState(0);

    useEffect(() => {
        const rem = px / 16;
        setRemValue(rem);
        console.log(rem);
    }, [px]);

    return remValue;
}
