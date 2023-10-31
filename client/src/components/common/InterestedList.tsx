import React from 'react';
import InterestedItem from './InterestedItem';

export default function InterestedList() {
    interface Interested {
        id: string;
        category: string;
        val: string;
    }
    const interestedArr: Interested[] = [
        { id: 'tag-radio-exercise', category: '운동', val: '운동' },
        { id: 'tag-radio-read', category: '독서', val: '독서' },
        { id: 'tag-radio-language', category: '언어', val: '언어' },
        { id: 'tag-radio-license', category: '자격증', val: '자격증' },
        { id: 'tag-radio-study', category: '스터디', val: '스터디' },
        { id: 'tag-radio-economics', category: '경제', val: '경제' },
        { id: 'tag-radio-IT', category: 'IT', val: 'IT' },
        { id: 'tag-radio-etc', category: '기타', val: '기타' },
    ];
    return (
        <div>
            <InterestedItem interestedArr={interestedArr} />
        </div>
    );
}
