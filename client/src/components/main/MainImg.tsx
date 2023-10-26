import React, { useState, useRef, ChangeEvent } from 'react';
import '../../styles/scss/pages/main.scss';

export default function MainImg() {
    const [Image, setImage] = useState<string>(
        'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
    );
    const [File, setFile] = useState<File | null>(null);
    const fileInput = useRef<HTMLInputElement | null>(null);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);

            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target && event.target.result) {
                    setImage(event.target.result as string);
                }
            };
            reader.readAsDataURL(selectedFile);
        } else {
            // 업로드 취소할 시
            setImage(
                'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'
            );
        }
    };

    return (
        <div>
            <div className="main-img-div">
                <img
                    src={Image}
                    style={{ margin: '20px', width: '100%', height: 'auto' }}
                    onClick={() => {
                        if (fileInput.current) {
                            fileInput.current.click();
                        }
                    }}
                />
                <input
                    type="file"
                    // style={{ display: 'none' }}
                    accept="image/jpg,image/png,image/jpeg"
                    name="profile_img"
                    onChange={onChange}
                    ref={fileInput}
                />
            </div>
        </div>
    );
}
