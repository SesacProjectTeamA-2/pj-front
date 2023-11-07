import React from 'react';
import '../../styles/scss/components/progressbar.scss';

export default function Progressbar({ score }: { score: number }) {
    const scorePercentage = `${score}%`;

    // export default function Progressbar() {
    return (
        <div className="progress-div">
            <div className="my-progress">
<<<<<<< HEAD
                {/* <div
                    className="my-bar" style={{ width: }}
                    style={{ width: scorePercentage }}
                ></div> */}
=======

                <div
                    className="my-bar"
                    style={{ width: scorePercentage }}
                ></div>
>>>>>>> 94dd11a96165df6f9b74add283f7b9d1367fa77a
            </div>
        </div>
    );
}
