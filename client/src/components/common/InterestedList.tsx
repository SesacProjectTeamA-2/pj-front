import React, { useState } from 'react';
import InterestedItem from './InterestedItem';

export default function InterestedList(props: any) {
    interface Interested {
        id: string;
        category: string;
        val: string;
    }
    const interestedArr: Interested[] = [
        { id: 'tag-radio-ex', category: '운동', val: 'ex' },
        { id: 'tag-radio-re', category: '독서', val: 're' },
        { id: 'tag-radio-lan', category: '언어', val: 'lan' },
        { id: 'tag-radio-cert', category: '자격증', val: 'cert' },
        { id: 'tag-radio-st', category: '스터디', val: 'st' },
        { id: 'tag-radio-eco', category: '경제', val: 'eco' },
        { id: 'tag-radio-it', category: 'IT', val: 'it' },
        { id: 'tag-radio-etc', category: '기타', val: 'etc' },
    ];

    return (
        <div>
            <InterestedItem
                interestedArr={interestedArr}
                selectedSet={props.selectedSet}
                setSelectedSet={props.setSelectedSet}
                num={props.num}
            />
        </div>
    );
}
