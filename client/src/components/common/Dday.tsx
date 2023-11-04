import React, { useState } from 'react';

import '../../styles/scss/components/dday.scss';
import useDdayCount from '../../hooks/useDdayCount';

// [추후] days => redux에 값 저장하기

export default function Dday({ targetDate, setTargetDate }: any) {
    // const [targetDate, setTargetDate] = useState(''); // 오늘 날짜로 수정

    const dday = useDdayCount(targetDate);

    return (
        <div className="dday-container">
            <input
                type="date"
                id="date-input"
                onChange={(e) => setTargetDate(e.target.value)}
            />
            <div id="dday-text">{dday}</div>
        </div>
    );
}
