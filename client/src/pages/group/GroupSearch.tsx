import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';
import { GroupStateType } from 'src/types/types';
import { Link } from 'react-router-dom';

export default function GroupSearch({
    searchInput,
    selectedArr,
    categoryQuery,
}: any) {
    const cookie = new Cookies();
    const uToken = cookie.get('isUser');

    const [searchGroupList, setSearchGroupList] = useState([]);

    console.log(selectedArr);

    useEffect(() => {
        const getSearchGroupList = async () => {
            const res = await axios.get(
                // 임시로 전체 검색
                `${process.env.REACT_APP_DB_HOST}/group?search=${searchInput}&category=${selectedArr}`
                // `http://localhost:8888/api/group?search=${searchInput}&category=${}`,
            );

            console.log('검색결과', res.data.groupArray);
            console.log(res);
            setSearchGroupList(res.data.groupArray);
        };

        getSearchGroupList();
    }, [searchInput, selectedArr]);

    console.log(searchGroupList);

    return (
        <div>
            <div className="title1" style={{ margin: '2rem' }}>
                검색 결과 입니다.
            </div>

            <div>
                {searchGroupList?.map((searchGroup: GroupStateType) => (
                    <div
                        key={searchGroup.gSeq}
                        className="search-group-container"
                    >
                        <Link to={`/group/home/${searchGroup.gSeq}`}>
                            <div className="title2">{searchGroup.gName}</div>
                            <div className="title5">{searchGroup.gDesc}</div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
