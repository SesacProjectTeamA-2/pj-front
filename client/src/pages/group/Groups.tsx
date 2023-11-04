import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import '../../styles/scss/components/titles.scss';
import '../../styles/scss/components/buttons.scss';
import '../../styles/scss/components/inputs.scss';
import '../../styles/scss/pages/group/groups.scss';
import InterestedList from '../../components/common/InterestedList';
import GroupList from './GroupList';
import { Divider } from '@mui/material';
import GroupSearch from './GroupSearch';

export default function Groups() {
    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);
    const [search, setSearch] = useState(false);

    const [searchInput, setSearchInput] = useState('');

    const searchHandler = () => {
        setSearch(!search);
    };

    //] key down event 입력 시
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.nativeEvent.isComposing) {
            return;
        }

        if (event.key === 'Enter') {
            setSearch(true);
        }
    };

    return (
        <div className="section">
            <div className="group-container">
                <div className="input-wrapper">
                    <input
                        className="search"
                        type="text"
                        placeholder="어떤 모임을 찾으시나요 ?"
                        onKeyDown={handleKeyDown}
                        onChange={(e) => {
                            setSearchInput(e.target.value);
                        }}
                    />

                    <button className="btn-sm" onClick={searchHandler}>
                        {search ? '취소' : '검색'}
                    </button>
                </div>

                <div className="groups-interested">
                    <InterestedList
                        selectedArr={selectedArr}
                        setSelectedArr={setSelectedArr}
                        num={8}
                    />
                </div>

                <Divider />

                {search ? (
                    <GroupSearch
                        searchInput={searchInput}
                        selectedArr={selectedArr}
                    />
                ) : (
                    <GroupList />
                )}
            </div>
        </div>
    );
}
