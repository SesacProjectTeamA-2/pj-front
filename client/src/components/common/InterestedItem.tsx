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
                {props.interestedArr.map((interestedArr: any) => {
                    return (
                        <label
                            key={interestedArr.id}
                            className="tag-btn"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                selectedTag(e)
                            }
                        >
                            <input
                                type="checkbox"
                                name="tag-radio"
                                className="tag-radio"
                                id={interestedArr.id}
                                value={interestedArr.val}
                            />
                            {interestedArr.category}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
