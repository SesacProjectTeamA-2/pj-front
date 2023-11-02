import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function InterestedItem({
    interestedArr,
    selectedArr,
    setSelectedArr,
    num,
}: any) {
    // 체크박스 상태 관리
    const [selected, setSelected] = useState<boolean>(false);

    // 체크박스 개수 제한
    // const [selectedArr, setSelectedArr] = useState<Set<string>>(
    //     new Set<string>()
    // );

    // useEffect로 비동기 useState 처리
    useEffect(() => {
        // console.log('>>>>', selectedArr);
        setSelectedArr(selectedArr);
    }, [selectedArr]);

    // 체크박스 체크 여부 변경 이벤트
    function SelectedTag(e: React.ChangeEvent<HTMLElement>): void {
        const selectedBtn: HTMLElement = e.target as HTMLElement; //선택된 버튼(label)
        setSelected((prevSelected) => !prevSelected); //선택 여부 관리 (직전 상태 기반)

        // 토글 기능
        if (selectedArr.includes(selectedBtn.id)) {
            // (1) 배열에 있으면 : 배열에서 제거
            setSelectedArr(
                selectedArr.filter(
                    (ele: string) => ele !== selectedBtn.id //마지막으로 선택된 버튼 id 제거
                )
            );
        } else if (
            // (2) 배열에 없음 + 동적 제한 수 미만 : 배열에 추가
            !selectedArr.includes(selectedBtn.id) &&
            selectedArr.length < num // 제한 카테고리수 (동적)
        ) {
            setSelectedArr((prevSelectedArr: any) => {
                const newSelectedArr = [...prevSelectedArr, selectedBtn.id];
                // if (
                //     !newSelectedArr.has(selectedBtn.id) &&
                //     newSelectedArr.size < 3
                // ) {
                // }
                return newSelectedArr;
            });
        }

        console.log('selectedArr >> ', selectedArr);
        console.log('selectedArr.length >> ', selectedArr.length);

        // 동적 개수 제한
        if (selectedArr.length > num - 1) {
            //2인 이유 + onClick으로 label에 줬을때는 왜 제대로 동작 x ? : 개수 잘 안 맞고 두번 클릭해야 선택됏음
            toast.error(`최대 ${num}개까지만 선택해주세요!`, {
                position: 'bottom-center',
            });

            // 마지막 선택된 id 제거
            selectedArr.filter((ele: string) => ele !== selectedBtn.id);
            // console.log(selectedArr.length);
        }
    }
    return (
        <div>
            <div className="interested-div">
                {interestedArr.map((interestedArr: any) => {
                    const iId: string = interestedArr.id;
                    const isSelected: boolean = selectedArr.includes(iId);

                    return (
                        <>
                            <label
                                key={iId}
                                className="tag-btn"
                                // onClick={(e: React.MouseEvent<HTMLElement>) =>
                                //     SelectedTag(e)
                                // }
                                style={{
                                    background: isSelected
                                        ? '#ED8D8D'
                                        : 'white',
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
                                    onChange={(
                                        e: React.ChangeEvent<HTMLElement>
                                    ) => SelectedTag(e)}
                                />
                                {interestedArr.category}
                            </label>
                            <Toaster />
                        </>
                    );
                })}
            </div>
        </div>
    );
}
