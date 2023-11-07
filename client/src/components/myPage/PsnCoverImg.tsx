import React from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

export default function PsnCoverImg() {
    return (
        <div className="psnCoverImg-div">
            <h3>대표이미지</h3>
            <input type="file" id="input-file" />
            <label htmlFor="input-file" id="input-file-label">
                추가
            </label>
        </div>
    );
}
