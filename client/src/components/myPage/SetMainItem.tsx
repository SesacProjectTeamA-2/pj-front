import React, { useState } from 'react';

import SetMainDday from './SetMainDday';
import SetMainDone from './SetMainDone';

export default function SetMainItem(props: any) {
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
                                handleCheckDday={props.handleCheckDday}
                                dDayPin={props.dDayPin}
                            />
                        </td>

                        <td>
                            <SetMainDone
                                groupId={group.groupId}
                                handleCheckDone={props.handleCheckDone}
                                donePin={props.donePin}
                            />
                        </td>
                    </tr>
                );
            })}
        </>
    );
}
