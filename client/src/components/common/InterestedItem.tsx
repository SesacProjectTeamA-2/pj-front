import React, { useState } from 'react';

export default function InterestedItem(props: any) {
    // 체크박스 상태 관리
    const [selected, setSelected] = useState<boolean>(false);

    // 체크박스 개수 제한
    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);

    // 체크박스 색 변경 클릭이벤트
    const selectedTag = (e: React.MouseEvent<HTMLElement>): void => {
        setSelected(!selected); //선택 여부 관리
        const selectedBtn: HTMLElement = e.target as HTMLElement; //선택된 버튼

        if (!selected && selectedArr.includes(selectedBtn.id)) {
            // 선택 안 되면 배열에서 제거
            selectedArr.filter((ele) => selectedBtn.id !== ele);
        } else if (selected && !selectedArr.includes(selectedBtn.id)) {
            // 선택 되면 배열에 추가
            setSelectedArr([...selectedArr, selectedBtn.id]);
            // 색상 변경
            selectedBtn.style.background = '#ED8D8D';
            selectedBtn.style.color = '#fff';
        }

        console.log('selectedArr >> ', selectedArr);
        console.log('selectedArr >> ', selectedArr.length);

        // if (selectedBtn) {
        // }
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
