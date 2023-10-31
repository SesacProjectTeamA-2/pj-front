import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';

import '../../styles/scss/pages/group/groupPostList.scss';

import GroupHeader from '../../components/group/content/GroupHeader';
import GroupContent from '../../components/group/content/GroupContentList';

export default function GroupBoard() {
    return (
        <div className="section section-group">
            <GroupHeader title={'자유/질문'} groupName={'코딩학당'} />
            <GroupContent />
            <div>
                <Link to="/group/board/post/1">
                    <img src="/asset/icons/plus.svg" className="plus-fixed" />
                </Link>
            </div>
        </div>
    );
}
