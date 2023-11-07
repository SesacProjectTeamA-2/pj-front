import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

export default function ProfilePic(props: any) {
    const [userImg, setUserImg] = useState<any>('/asset/images/user.svg');
    console.log('바꾸기 전 userImg', userImg);

    const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setUserImg(e.target.files[0]);
            console.log('바꾼 후 UserImg >> ', userImg);
        }

        const formData = new FormData();
        console.log('e.target.files ', e.target.files);

        if (e.target.files && e.target.files[0]) {
            formData.append('image', e.target.files[0]);
            console.log(formData);
            sendImg(formData);
        }
    };

    const sendImg = (formData: any): void => {
        const cookie = new Cookies();
        const uToken = cookie.get('isUser'); // 토큰 값
        try {
            axios
                .post(
                    `${process.env.REACT_APP_DB_HOST}/user/mypage/userImg`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                            Authorization: `Bearer ${uToken}`,
                        },
                    }
                )
                .then((res) => {
                    console.log('post', res.data);
                });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <label id="profilePic-label">
                <img src={userImg} alt="profilePic" id="profilePic-user" />
                <input
                    type="file"
                    id="profilePic-input"
                    name="image"
                    onChange={handlerChange}
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
