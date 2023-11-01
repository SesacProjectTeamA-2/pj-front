import React, { useEffect, useState } from 'react';

export default function InterestedItem(props: any) {
    // 체크박스 상태 관리
    const [selected, setSelected] = useState<boolean>(false);

    // 체크박스 개수 제한
    const [selectedSet, setSelectedSet] = useState<Set<string>>(
        new Set<string>()
    );

    // 체크박스 체크 여부 변경 이벤트
    function SelectedTag(e: React.ChangeEvent<HTMLElement>): void {
        const selectedBtn: HTMLElement = e.target as HTMLElement; //선택된 버튼(label)
        setSelected((prevSelected) => !prevSelected); //선택 여부 관리 (직전 상태 기반)
        // console.log('selected ', selected);

        if (selectedSet.has(selectedBtn.id)) {
            // 배열에 있으면 배열에서 제거
            selectedSet.delete(
                selectedBtn.id //마지막으로 선택된 버튼 id 제거
            );
        } else if (!selectedSet.has(selectedBtn.id) && selectedSet.size < 3) {
            // 배열에 없으면 배열에 추가 + 3개 개수 제한
            setSelectedSet((prevSelectedSet) => {
                const newSelectedSet = new Set(prevSelectedSet);
                // if (
                //     !newSelectedSet.has(selectedBtn.id) &&
                //     newSelectedSet.size < 3
                // ) {
                newSelectedSet.add(selectedBtn.id);
                // }
                return newSelectedSet;
            });
        }

        console.log('selectedSet >> ', selectedSet);
        console.log('selectedSet.length >> ', selectedSet.size);

        if (selectedSet.size > 2) {
            //2인 이유 + onClick으로 label에 줬을때는 왜 제대로 동작 x ? : 개수 잘 안 맞고 두번 클릭해야 선택됏음
            props.setWarningInfo('최대 3개까지만 선택해주세요.');
            selectedSet.delete(selectedBtn.id);
            // console.log(selectedSet.length);
        } else {
            props.setWarningInfo('');
            // console.log(selectedSet.length);
        }
    }
    return (
        <div>
            <div className="interested-div">
                {props.interestedArr.map((interestedArr: any) => {
                    const iId: string = interestedArr.id;
                    const isSelected: boolean = selectedSet.has(iId);

                    return (
                        <label
                            key={iId}
                            className="tag-btn"
                            // onClick={(e: React.MouseEvent<HTMLElement>) =>
                            //     SelectedTag(e)
                            // }
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
                                onChange={(e: React.ChangeEvent<HTMLElement>) =>
                                    SelectedTag(e)
                                }
                            />
                            {interestedArr.category}
                        </label>
                    );
                })}
            </div>
        </div>
    );
}
