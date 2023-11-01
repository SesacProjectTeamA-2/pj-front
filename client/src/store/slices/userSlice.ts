import { createSlice } from '@reduxjs/toolkit';

// 초기 상태
const initialState = {
    uSeq: 0,
    uEmail: 'abc@example.com',
    uName: 'testUser',
    uImg: '/asset/images/sqr1.svg',
    uCharImg: '/asset/images/sqr1.svg',
    uDesc: '자기소개입니다.',
    uCategory1: 'it',
    uCategory2: 'ex',
    uCategory3: 're',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // changeLike(state, action) {
        //   let 번호 = state.findIndex((item) => item.id === action.payload);
        //   console.log(state[번호 + 1].like);
        //   // state[번호 + 1].like = false;
        //   state[번호 + 1].like = !state[번호 + 1].like;
        //   // state[번호 + 1].like ? false : true;
        // },
    },
});

export default userSlice.reducer;
// export const {} = dummyGroupSlice.actions;
