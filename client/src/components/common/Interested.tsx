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
            <div className="interested-div">
                <label
                    htmlFor="tag-radio-exercise"
                    className="tag-btn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectedTag(e)
                    }
                >
                    <input
                        type="checkbox"
                        name="tag-radio"
                        className="tag-radio"
                        id="tag-radio-exercise"
                    />
                    운동
                </label>

                <label
                    htmlFor="tag-radio-read"
                    className="tag-btn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectedTag(e)
                    }
                >
                    <input
                        type="checkbox"
                        name="tag-radio"
                        className="tag-radio"
                        id="tag-radio-read"
                    />
                    독서
                </label>
                <label
                    htmlFor="tag-radio-language"
                    className="tag-btn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectedTag(e)
                    }
                >
                    <input
                        type="checkbox"
                        name="tag-radio"
                        className="tag-radio"
                        id="tag-radio-language"
                    />
                    언어
                </label>
                <label
                    htmlFor="tag-radio-license"
                    className="tag-btn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectedTag(e)
                    }
                >
                    <input
                        type="checkbox"
                        name="tag-radio"
                        className="tag-radio"
                        id="tag-radio-license"
                    />
                    자격증
                </label>
            </div>
            <br></br>
            <div className="interested-div">
                <label
                    htmlFor="tag-radio-study"
                    className="tag-btn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectedTag(e)
                    }
                >
                    <input
                        type="checkbox"
                        name="tag-radio"
                        className="tag-radio"
                        id="tag-radio-study"
                    />
                    스터디
                </label>
                <label
                    htmlFor="tag-radio-economics"
                    className="tag-btn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectedTag(e)
                    }
                >
                    <input
                        type="checkbox"
                        name="tag-radio"
                        className="tag-radio"
                        id="tag-radio-economics"
                    />
                    경제
                </label>
                <label
                    htmlFor="tag-radio-it"
                    className="tag-btn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectedTag(e)
                    }
                >
                    <input
                        type="checkbox"
                        name="tag-radio"
                        className="tag-radio"
                        id="tag-radio-it"
                    />
                    IT
                </label>
                <label
                    htmlFor="tag-radio-etc"
                    className="tag-btn"
                    onClick={(e: React.MouseEvent<HTMLElement>) =>
                        selectedTag(e)
                    }
                >
                    <input
                        type="checkbox"
                        name="tag-radio"
                        className="tag-radio"
                        id="tag-radio-etc"
                    />
                    기타
                </label>
            </div>
        </div>
    );
}
