import { createSlice } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
// import { RootStateType } from '../../types/types';

// const dummyGroupState = useSelector((state: RootStateType) => state.dummyGroup);

// for (let mission of missionList) {
//     if (mission.level === 5) {
//         mission.level = '⭐️⭐️⭐️';
//     } else if (mission.level === 3) {
//         mission.level = '⭐️⭐️';
//     } else if (mission.level === 1) {
//         mission.level = '⭐️';
//     }
// }

// 초기 상태
const initialState = [
    {
        id: 1,
        name: '알고리즘',
        description: '문제에 대한 코드를 제출합니다.',
        level: '⭐️⭐️⭐️',
        completed: true,
    },
    {
        id: 2,
        name: '블로깅',
        description: '게시물 링크를 올립니다.',
        level: '⭐️⭐️',
        completed: false,
    },
    {
        id: 3,
        name: '모각코',
        description: '게시물 링크를 올립니다.',
        level: '⭐️',
        completed: false,
    },
];

const missionSlice = createSlice({
    name: 'mission',
    initialState,
    reducers: {
        // changeGroup(state, action) {
        //     state.gSeq = action.payload.gSeq;
        //     state.gName = action.payload.gName;
        //     state.gDesc = action.payload.gDesc;
        //     state.gDday = action.payload.gDday;
        //     state.gMaxMem = action.payload.gMaxMem;
        //     state.gCategory = action.payload.gCategory;
        //     state.gCoverImg = action.payload.gCoverImg;
        //     state.mTitle = action.payload.mTitle;
        //     state.mContent = action.payload.mContent;
        //     state.mLevel = action.payload.mLevel;
        // },
        // changeLike(state, action) {
        //   let 번호 = state.findIndex((item) => item.id === action.payload);
        //   console.log(state[번호 + 1].like);
        //   // state[번호 + 1].like = false;
        //   state[번호 + 1].like = !state[번호 + 1].like;
        //   // state[번호 + 1].like ? false : true;
        // },
    },
});

export default missionSlice.reducer;
// export const { changeGroup } = dummyGroupSlice.actions;
