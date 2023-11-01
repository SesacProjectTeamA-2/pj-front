import React from 'react';

export default function ProfilePic() {
    return (
        <div>
            <label id="profilePic-label">
                <img
                    src="/asset/images/user.svg"
                    alt="profilePic"
                    id="profilePic-user"
                />

                <input type="file" id="profilePic-input" />
                <img
                    src="/asset/icons/edit.svg"
                    alt="profilePicEdit"
                    id="profilePic-edit"
                />
            </label>
        </div>
    );
}
