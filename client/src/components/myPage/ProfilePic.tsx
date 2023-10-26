import React from 'react';

export default function ProfilePic() {
    return (
        <div>
            <input type="file" id="profilePic-input" />
            <label htmlFor="profilePic-input" id="profilePic-label">
                <img src="/asset/images/user.png" alt="profilePic" />
                <img
                    src="/asset/icons/edit.svg"
                    alt="profilePicEdit"
                    id="profilePic-edit"
                />
            </label>
        </div>
    );
}
