import React from 'react';
import '../../styles/scss/components/progressbar.scss';

export default function Progressbar({
    score,
    bg,
}: {
    score: number;
    bg: string;
}) {
    const scorePercentage = `${score}%`;
    // console.log(scorePercentage);

    // export default function Progressbar() {
    return (
        <div className="progress-div">
            <div className="my-progress" style={{ backgroundColor: `${bg}` }}>
                <div
                    className="my-bar"
                    style={{ width: scorePercentage }}
                ></div>
>>>>>>> 94dd11a96165df6f9b74add283f7b9d1367fa77a
            </div>
        </div>
    );
}
