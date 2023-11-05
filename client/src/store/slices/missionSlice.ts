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
        id: 0,
        mTitle: '',
        mContent: '',
        mLevel: '⭐️',
        completed: true, // 추후 수정
    },
    // {
    //     id: 1,
    //     mTitle: '알고리즘',
    //     mContent: '문제에 대한 코드를 제출합니다.',
    //     mLevel: '⭐️⭐️⭐️',
    //     completed: true, // 추후 수정
    // },
    // {
    //     id: 2,
    //     mTitle: '블로깅',
    //     mContent: '게시물 링크를 올립니다.',
    //     mLevel: '⭐️⭐️',
    //     completed: false,
    // },
    // {
    //     id: 3,
    //     mTitle: '모각코',
    //     mContent: '게시물 링크를ff 올립니다.',
    //     mLevel: '⭐️',
    //     completed: false,
    // },
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

        lengthMission(state) {
            const lenMission = state.length;
        },

        addMission(state, action) {
            const newMission = action.payload;
            state.push(newMission);
            console.log(':::', newMission);
        },
    },
});

export default missionSlice.reducer;
// export const { changeGroup } = dummyGroupSlice.actions;
export const { addMission } = missionSlice.actions;
export const { lengthMission } = missionSlice.actions;
