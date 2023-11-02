//=== 공통되는 타입 ===

// Redux 스토어의 전체 타입 정의
export interface RootStateType {
    dummyGroup: GroupStateType;
    user: UserStateType;
    mission: MissionStateType;
    page: PageStateType;
}

export interface UserStateType {
    uSeq: number;
    uEmail: string;
    uName: string;
    uImg: string;
    uCharImg: string;
    uDesc: string;
    uCategory1: string;
    uCategory2: string;
    uCategory3: string;
}

// Redux 스토어에서 가져오는 'group' 슬라이스의 상태 타입 정의
export interface GroupStateType {
    gSeq: number;
    gName: string;
    gDesc: string;
    gDday: string;
    gMaxMem: number;
    gCategory: string;
    gCoverImg: string;
    missionArray: MissionType[];
}

export interface MissionType {
    mTitle: string;
    mContent: string;
    mLevel: number;
}
export interface MissionStateType {
    id: number;
    mTitle: string;
    mContent: string;
    mLevel: number | string;
    completed: boolean;
    map: any; // [any] 일단 임의로 any 박아놓을게요 ,,,
}

export type MissionListType = MissionStateType[];

export interface PageStateType {
    name: string;
}
