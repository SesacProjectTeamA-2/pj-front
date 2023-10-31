import React from 'react';

import '../styles/scss/pages/notFound.scss';

import ErrMsg from '../components/common/NotFound/ErrMsg';
import R3F from '../components/common/NotFound/R3F';
import ErrBtn from '../components/common/NotFound/ErrBtn';

export default function NotFound() {
    return (
        <div className="section err-section">
            <ErrMsg />
            <R3F />
            <ErrBtn />
        </div>
    );
}
