import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import moneyReducer from './moneyReducer';

// combineReducers : 여러 개의 reducer을 하나로 합침
const rootReducer = combineReducers({
    counter: counterReducer, // counter : { number: 50 }
    isVisible: isVisibleReducer,
    money: moneyReducer,
});

export default rootReducer;

//=== 필요한 데이터 ===
//-- 1. 미션
// 미션 제목
// 미션 인증방법
// 미션 난이도

//-- 2. 멤버
// 멤버 닉네임
// 멤버 자기소개

//-- 3. 모임
// 모임명
// 모임장
// 모임 멤버
// 미션 디데이
