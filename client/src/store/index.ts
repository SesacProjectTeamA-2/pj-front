import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

//] store 정의 : 전역 상태를 관리하는 공간 (하나의 프로젝트에 하나만 !)
const store = configureStore({
    reducer: rootReducer,
    devTools: true, // Redux DevTools를 사용하려면 이 옵션을 추가하세요
});

export default store;
