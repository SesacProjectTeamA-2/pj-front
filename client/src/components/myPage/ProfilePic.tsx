import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

export default function ProfilePic(props: any) {
    return (
        <div>
            <label id="profilePic-label">
                <img
                    src={props.userImgSrc}
                    alt="profilePic"
                    id="profilePic-user"
                />
                <input
                    type="file"
                    id="profilePic-input"
                    name="image"
                    onChange={props.handlerChange}
                />
                <img
                    src="/asset/icons/edit.svg"
                    alt="profilePicEdit"
                    id="profilePic-edit"
                />
            </label>
        </div>
    );
}
