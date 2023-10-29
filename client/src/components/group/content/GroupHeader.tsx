import React from 'react';

interface GroupHeaderProps {
    title: string;
    groupName: string;
}

export default function GroupHeader({ title, groupName }: GroupHeaderProps) {
    return (
        <div className="group-header title2">
            <div>{title}</div>
            <div>코딩학당</div>
        </div>
    );
}