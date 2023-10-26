import React from 'react';

export default function Face() {
    return (
        <div className="face-div">
            <div className="face-background">
                <img
                    src="/asset/images/cat2.svg"
                    className="face"
                    alt="isCheckedIcon"
                />
            </div>
            <div className="progress-div">
                <div className="my-progress">
                    <div className="my-bar"></div>
                </div>
            </div>
        </div>
    );
}
