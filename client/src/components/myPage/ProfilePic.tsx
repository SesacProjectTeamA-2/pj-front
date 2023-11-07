import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';
import { Cookies } from 'react-cookie';

export default function ProfilePic(props: any) {
    // const [userImgSrc, setUserImgSrc] = useState<any>('/asset/images/user.svg');
    // console.log('바꾸기 전 userImgSrc', userImgSrc);

    // const handlerChange = (e: ChangeEvent<HTMLInputElement>) => {
    //     if (e.target.files && e.target.files[0]) {
    //         // setUserImgSrc(e.target.files[0]);
    //         setUserImgSrc(e.target.files[0]);
    //         console.log('바꾼 후 UserImgSrc >> ', userImgSrc);
    //     }

    //     const formData = new FormData();
    //     console.log('e.target.files ', e.target.files);

    //     if (e.target.files && e.target.files[0]) {
    //         formData.append('image', e.target.files[0]);
    //         console.log(formData);
    //         sendImg(formData);
    //     }
    // };

    // const sendImg = (formData: any): void => {
    //     const cookie = new Cookies();
    //     const uToken = cookie.get('isUser'); // 토큰 값
    //     try {
    //         axios
    //             .post(
    //                 `${process.env.REACT_APP_DB_HOST}/user/mypage/userImgSrc`,
    //                 formData,
    //                 {
    //                     headers: {
    //                         'Content-Type': 'multipart/form-data',
    //                         Authorization: `Bearer ${uToken}`,
    //                     },
    //                 }
    //             )
    //             .then((res) => {
    //                 console.log('post', res.data);
    //             });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
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
