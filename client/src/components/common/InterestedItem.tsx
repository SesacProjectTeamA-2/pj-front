import React, { useEffect, useState } from 'react';

export default function InterestedItem(props: any) {
    // 체크박스 상태 관리
    const [selected, setSelected] = useState<boolean>(false);

    // 체크박스 개수 제한
    const [selectedArr, setSelectedArr] = useState<Array<string>>([]);

    // 체크박스 체크 여부 변경 이벤트

    function SelectedTag(e: React.MouseEvent<HTMLElement>): void {
        const selectedBtn: HTMLElement = e.target as HTMLElement; //선택된 버튼
        setSelected((prevSelected) => !prevSelected); //선택 여부 관리 (직전 상태 기반)
        // console.log('selected ', selected);

        if (selectedArr.includes(selectedBtn.id)) {
            // 배열에 있으면 배열에서 제거
            const newArr: Array<string> = selectedArr.filter(
                (ele) => selectedBtn.id !== ele
            );
            setSelectedArr(newArr);
        } else if (
            !selectedArr.includes(selectedBtn.id) &&
            selectedArr.length < 3
        ) {
            // 배열에 없으면 배열에 추가
            setSelectedArr([...selectedArr, selectedBtn.id]);
        }

        console.log('selectedArr >> ', selectedArr);
        console.log('selectedArr.length >> ', selectedArr.length);

        if (selectedArr.length > 2) {
            props.setWarningInfo('최대 3개까지만 선택해주세요.');
            setSelectedArr(selectedArr.filter((ele) => ele !== selectedBtn.id));

            console.log(selectedArr.length);
        } else {
            props.setWarningInfo('');
            console.log(selectedArr.length);
        }
    }
    return (
        <div>
            <div className="interested-div">
                {props.interestedArr.map((interestedArr: any) => {
                    const iId: string = interestedArr.id;
                    const isSelected: boolean = selectedArr.includes(iId);

                    return (
                        <label
                            key={iId}
                            className="tag-btn"
                            onClick={(e: React.MouseEvent<HTMLElement>) =>
                                SelectedTag(e)
                            }
                            style={{
                                background: isSelected ? '#ED8D8D' : 'white',
                                color: isSelected ? 'white' : 'gray',
                            }}
                        >
                            <input
                                type="checkbox"
                                name="tag-radio"
                                className="tag-radio"
                                id={iId}
                                value={interestedArr.val}
                                checked={isSelected}
                                readOnly
                            />
                            {interestedArr.category}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
