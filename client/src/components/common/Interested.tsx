import React from 'react';

export default function Interested() {
    const selectedTag = (e: React.MouseEvent<HTMLElement>): void => {
        const selectedBtn: HTMLElement = e.target as HTMLElement;

        if (selectedBtn) {
            selectedBtn.style.background = '#ED8D8D';
            selectedBtn.style.color = '#fff';
            console.log(selectedBtn);
        }
    };
    return (
        <div>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tag-btn"
            >
                운동
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tag-btn"
            >
                독서
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tag-btn"
            >
                언어
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tag-btn"
            >
                자격증
            </button>{' '}
            <br></br>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tag-btn"
            >
                스터디
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tag-btn"
            >
                경제
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tag-btn"
            >
                IT
            </button>
            <button
                onClick={(e: React.MouseEvent<HTMLElement>) => selectedTag(e)}
                className="tag-btn"
            >
                기타
            </button>
        </div>
    );
}
