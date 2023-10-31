import React, { useState } from 'react';

export default function InterestedItem(props: any) {
    // 체크박스 상태 관리
    // const [selected, set]
    // 체크박스 개수 제한
    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);

    // 체크박스 색 변경 클릭이벤트
    const selectedTag = (e: React.MouseEvent<HTMLElement>): void => {
        const selectedBtn: HTMLElement = e.target as HTMLElement;
        setSelectedArr([...selectedArr, selectedBtn.id]);
        console.log(selectedArr);

        if (selectedBtn) {
            selectedBtn.style.background = '#ED8D8D';
            selectedBtn.style.color = '#fff';
            // console.log(selectedBtn);
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
