import React from 'react';

export default function MemberList() {
    interface MemberType {
        id: number;
        name: string;
        img: string;
        description: string;
    }

    const memberList: MemberType[] = [
        {
            id: 1,
            img: '/asset/images/sqr1.svg',
            name: '멤버1',
            description: '멤버 1 입니다.',
        },
        {
            id: 2,
            img: '/asset/images/sqr1.svg',
            name: '멤버2',
            description: '멤버 2 입니다.',
        },
        {
            id: 3,
            img: '/asset/images/sqr1.svg',
            name: '멤버3',
            description: '멤버 3 입니다.',
        },
        {
            id: 4,
            img: '/asset/images/sqr1.svg',
            name: '멤버4',
            description: '멤버 4 입니다.',
        },
        {
            id: 5,
            img: '/asset/images/sqr1.svg',
            name: '멤버5',
            description: '멤버 5 입니다.',
        },
        {
            id: 6,
            img: '/asset/images/sqr1.svg',
            name: '멤버6',
            description: '멤버 6 입니다.',
        },
        {
            id: 7,
            img: '/asset/images/sqr1.svg',
            name: '멤버7',
            description: '멤버 7 입니다.',
        },
    ];

    return (
        <div className="wrapper">
            <div className="members-upper-content">
                <div className="title2">멤버</div>
                <div className="title5">
                    참석인원{' '}
                    <span className="member-count">{memberList.length}</span>/
                    10
                    <span className="member-left">
                        ({10 - memberList.length}자리 남음)
                    </span>
                </div>
            </div>
            <div className="main-content">
                <ul className="list-unstyled">
                    <li>
                        <div className="ranking-list">
                            <img src="/asset/images/sqr1.svg" />

                            <div className="cur-ranking-content">
                                <div className="title4">모임장</div>
                                <div>모임장 주인장입니다.</div>
                            </div>
                        </div>
                    </li>

                    {memberList.map((member) => {
                        return (
                            <li key={member.id}>
                                <div className="ranking-list">
                                    <img src={member.img} />

                                    <div className="cur-ranking-content">
                                        <div className="title4">
                                            {member.name}
                                        </div>
                                        <div className="">
                                            {member.description}
                                        </div>
                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
