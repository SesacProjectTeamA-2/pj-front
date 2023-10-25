import React from 'react';

export default function Interested() {
    const selectedTag = (e: React.MouseEvent<HTMLElement>): void => {
        const selectedBtn: HTMLElement = e.target as HTMLElement;

        if (selectedBtn) {
            selectedBtn.style.background = '#ED8D8D';
            selectedBtn.style.color = '#fff';
        }
    };
    return (
        <div>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tagBtn"
            >
                운동
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tagBtn"
            >
                독서
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tagBtn"
            >
                언어
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tagBtn"
            >
                자격증
            </button>{' '}
            <br></br>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tagBtn"
            >
                스터디
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tagBtn"
            >
                경제
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tagBtn"
            >
                IT
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tagBtn"
            >
                기타
            </button>
        </div>
    );
}
