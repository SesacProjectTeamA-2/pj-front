import React from 'react';

export default function MemberList({
    gMax,
    leaderInfo,
    memberArray,
    groupMember,
}: any) {
    // interface MemberType {
    //     id: number;
    //     name: string;
    //     img: string;
    //     description: string;
    // }

    // const memberList: MemberType[] = [
    //     {
    //         id: 1,
    //         img: '/asset/images/sqr1.svg',
    //         name: '멤버1',
    //         description: '멤버 1 입니다.',
    //     },
    //     {
    //         id: 2,
    //         img: '/asset/images/sqr1.svg',
    //         name: '멤버2',
    //         description: '멤버 2 입니다.',
    //     },
    //     {
    //         id: 3,
    //         img: '/asset/images/sqr1.svg',
    //         name: '멤버3',
    //         description: '멤버 3 입니다.',
    //     },
    //     {
    //         id: 4,
    //         img: '/asset/images/sqr1.svg',
    //         name: '멤버4',
    //         description: '멤버 4 입니다.',
    //     },
    //     {
    //         id: 5,
    //         img: '/asset/images/sqr1.svg',
    //         name: '멤버5',
    //         description: '멤버 5 입니다.',
    //     },
    //     {
    //         id: 6,
    //         img: '/asset/images/sqr1.svg',
    //         name: '멤버6',
    //         description: '멤버 6 입니다.',
    //     },
    //     {
    //         id: 7,
    //         img: '/asset/images/sqr1.svg',
    //         name: '멤버7',
    //         description: '멤버 7 입니다.',
    //     },
    // ];

    console.log('groupMember', groupMember);
    console.log('leaderInfo', leaderInfo);
    return (
        <div className="wrapper">
            <div className="members-upper-content">
                <div className="title2">멤버</div>
                <div className="title5">
                    참석인원
                    <span className="member-count">
                        {memberArray?.length + 1}
                    </span>
                    / {gMax}
                    <span className="member-left">
                        ({gMax - 1 - memberArray?.length}자리 남음)
                    </span>
                </div>
            </div>
            <div className="main-content">
                <ul className="list-unstyled">
                    {/* 모임장 */}
                    <li>
                        <div className="ranking-list">
                            <img src={leaderInfo.uImg} />

                            <div className="cur-ranking-content">
                                <div className="title4">{leaderInfo.uName}</div>

                                {/* <div>{leaderInfo.}</div> */}
                            </div>
                        </div>
                    </li>

                    {groupMember?.map((member: any) => {
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
