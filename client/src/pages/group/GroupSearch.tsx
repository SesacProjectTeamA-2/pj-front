import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { GroupStateType } from 'src/types/types';
import { Link } from 'react-router-dom';

export default function GroupSearch({ searchInput, selectedArr }: any) {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const [searchGroupList, setSearchGroupList] = useState([]);

    // [추후] 여러개 & 로직 구현
    console.log(selectedArr);

    useEffect(() => {
        const getSearchGroupList = async () => {
            const res = await axios.get(
                // 임시로 전체 검색
                `${process.env.REACT_APP_DB_HOST}/group?search=%&category=%`,
                // `http://localhost:8888/api/group?search=${searchInput}&category=${}`,
                {
                    headers: {
                        Authorization: `Bearer ${uToken}`,
                    },
                }
            );

            console.log('검색결과', res.data.groupArray);
            setSearchGroupList(res.data.groupArray);
        };

        getSearchGroupList();
    }, []); // 빈 의존성 배열 : 컴포넌트가 마운트될 때 한 번만 실행

    console.log(searchGroupList);

    return (
        <div>
            <div className="title1">검색 결과 입니다.</div>

            <div>
                {searchGroupList?.map((searchGroup: GroupStateType) => (
                    <div key={searchGroup.gSeq}>
                        <Link to={`/group/home/${searchGroup.gSeq}`}>
                            <button>{searchGroup.gName}</button>
                            <div>{searchGroup.gDesc}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
