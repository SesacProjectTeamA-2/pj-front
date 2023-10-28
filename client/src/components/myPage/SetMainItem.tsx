import React, { useState } from 'react';

import SetMainDday from './SetMainDday';
import SetMainDone from './SetMainDone';

export default function SetMainItem(props: any) {
    const [dDayPin, setDdayPin] = useState<string | number>(0);
    const [donePin, setDonePin] = useState<string | number>(0);

    const handleCheckDday = (groupId: number): void => {
        setDdayPin(groupId);
        console.log('id', dDayPin);
    };
    const handleCheckDone = (groupId: number): void => {
        setDonePin(groupId);
        console.log('id', donePin);
    };

    return (
        <>
            {props.groupArr.map((group: any) => {
                return (
                    <tr key={group.groupId}>
                        <td>{group.groupName}</td>
                        <td>{group.dDay}</td>

                        <td>
                            <SetMainDday
                                groupId={group.groupId}
                                handleCheckDday={handleCheckDday}
                                dDayPin={dDayPin}
                            />
                        </td>

                        <td>
                            <SetMainDone
                                groupId={group.groupId}
                                handleCheckDone={handleCheckDone}
                                donePin={donePin}
                            />
                        </td>
                    </tr>
                );
            })}
        </>
    );
}
