import React from 'react';

export default function InterestedItem(props: any) {
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
                {props.interestedArr1.map((interestedArr1: any) => {
                    return (
                        <label
                            key={interestedArr1.id}
                            className="tag-btn"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                selectedTag(e)
                            }
                        >
                            <input
                                type="checkbox"
                                name="tag-radio"
                                className="tag-radio"
                                id={interestedArr1.id}
                                value={interestedArr1.val}
                            />
                            {interestedArr1.category}
                        </label>
                    );
                })}
            </div>

            <div className="interested-div">
                {props.interestedArr2.map((interestedArr2: any) => {
                    return (
                        <label
                            key={interestedArr2.id}
                            className="tag-btn"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                selectedTag(e)
                            }
                        >
                            <input
                                type="checkbox"
                                name="tag-radio"
                                className="tag-radio"
                                id={interestedArr2.id}
                                value={interestedArr2.val}
                            />
                            {interestedArr2.category}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
