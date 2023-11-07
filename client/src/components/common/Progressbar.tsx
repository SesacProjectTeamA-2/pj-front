import React from 'react';
import '../../styles/scss/components/progressbar.scss';

export default function Progressbar({ score }: { score: number }) {
    const scorePercentage = `${score}%`;

    // export default function Progressbar() {
    return (
        <div className="progress-div">
            <div className="my-progress">
                <div
                    className="my-bar"
                    style={{ width: scorePercentage }}
                ></div>
            </div>
        </div>
    );
}
