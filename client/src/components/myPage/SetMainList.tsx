import React, { useState } from 'react';
import SetMainItem from './SetMainItem';

export default function SetMain() {
    interface Group {
        groupId: number;
        groupName: string | number;
        dDay: string | number;
    }

    const groupArr: Group[] = [
        {
            groupId: 1,
            groupName: '코딩학당',
            dDay: 'D-3',
        },
        {
            groupId: 2,
            groupName: '근손실방지',
            dDay: 'D-7',
        },
    ];

    return (
        <div>
            <table className="setMain-table">
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>D-Day</th>
                        <th>달성률</th>
                    </tr>
                </thead>
                <tbody>
                    <SetMainItem groupArr={groupArr} />
                </tbody>
            </table>
        </div>
    );
}
