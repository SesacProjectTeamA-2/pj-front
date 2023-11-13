# Motimates 란 ?
## " Motivation + Mates "
서로 동기부여를 주는 메이트들
모임 멤버들과 함께 목표를 달성하는 커뮤니티 사이트

---

# 프로젝트 소개

---

[발표자료](https://docs.google.com/presentation/d/1-889w-hx7lc29qffDdI8is45T3xxHF-RqPEXBAd9i2I/edit#slide=id.g298a1fc9f63_2_0)
[Notion](https://polydactyl-cello-2db.notion.site/2nd-team-a-b9e8f682bbc2439991fe70b074381f32?pvs=4)


## ****🌐 웹 사이트 주소****

[React App](http://motimates.xyz/)



## ****⏰**** 제작 기간

---

October 23, 2023 ~November 10, 2023

## **🧑‍🤝‍🧑** Team Crew - FE

---
| 프론트 개발 | 프론트 개발 | 프론트 개발 | 백 개발 | 백 개발 | 백 개발 |
|---|---|---|---|---|---|
|  [강혜빈](https://github.com/ch0rckbean) | [김세화](https://github.com/loveflora) | [최제윤](https://github.com/lemon4974)| [문영민](https://github.com/eoeung) | [문효진](https://github.com/jinnymoon1124) | [최태영](https://github.com/chitty12) 

 
## 담당 역할

**강혜빈**

- 헤더 제작 
  - 모바일 헤더 추가

- 레이아웃 제작
  - GroupLayout
  - BasicLayout  

- 사용자 페이지 
  - 공통 컴포넌트 
  - 프로필 사진 컴포넌트 
    - formData를 통한 사진 관리 
    - 페이지 전반 로그인/비로그인 사용자 프로필 사진 관리 
  - 닉네임 컴포넌트
  - 자기소개 컴포넌트
  - 명언 작성 & 추천/지정 컴포넌트 : 라디오 버튼 상태관리 
  - 관심분야 선택 컴포넌트 : 체크박스 개수 상태관리
  - 캐릭터 선택 컴포넌트 : 라디오 버튼 상태관리

- 마이페이지 
  - UI 제작
  - 회원 정보 GET/PATCH/DELETE 처리

- 로그인 페이지
  - UI 제작
  - 로그인 버튼 컴포넌트
  - 쿠키 사용: 사용자 로그인 여부 / 로그인 여부에 따른 노출 정보 구분

- 회원가입 페이지
  - UI 제작
  - 회원 정보 POST 처리

- 메인 페이지 데이터 연동  
  - 캐릭터, 프로필 사진, 명언 GET 처리

- 페이지 전반 비로그인 시 프로필 사진 데이터값 처리

- 그룹 페이지 
  - 그룹 초대 컴포넌트 
    - UI & POST 처리 

- 그룹 미션 모달 
  - 미션 PATCH/DELETE 처리
  
- 그룹 공지/자유/미션 게시판
  - 댓글 PATCH/DELETE 처리 

- 404 페이지 
  - UI 제작

- 그 외
  - 반응형 CSS 처리
  - 디자인 : Adobe 포토샵/일러스트/ 피그마 활용
    - 캐릭터 표정 작업
    - 로고 디자인 
    - 파비콘 제작


**김세화**

- UI
    - 페이지 : 모임 관련 페이지(생성 및 수정, 홈, 검색), 게시판 관련 페이지(공지, 자유, 미션, 완료, 댓글)
    - 공통 컴포넌트 : 모달창(성공, 경고, 선택), 멤버 리스트, 디데이, 크기별 버튼
- 기능
    - 모임 CRUD
        - 모임 생성, 수정, 삭제
        - 모임 상세화면 조회
        - 유저가 가입한 모임 조회, 생성한 모임 조회
        - 모임 검색(검색어, 카테고리별)
        - 모임별 미션 수정
        - 현재 모임에 참석한 멤버리스트 조회
    - 모임 가입하기, 탈퇴하기, 모임장 위임하기
        - 참석인원에 따른 가입제한
    - 모임장, 멤버, 가입되지 않은 유저별 구분된 모임 사이드바
    - 게시판(공지, 자유, 미션별) CRUD
        - 모임 공지사항, 자유, 미션별 게시글 전체 및 상세 조회
        - 모임 공지사항, 자유, 미션별 게시글 생성, 수정, 삭제
    - 댓글 CRUD
        - 모임 공지사항, 자유, 미션별 게시글에 대한 댓글 조회
        - 댓글 생성 수정, 삭제
    - 유저별 미션 조회
    - 모임별 미션 조회
    - 유효성 검사 (모임 및 게시판 생성 및 수정 시)


 **최제윤**

인트로 페이지 제작

푸터 제작
- 모바일 반응형 푸터

메인페이지
- 레이아웃 제작
- kAdvice 명언 라이브러리를 이용해 랜더링될 때마다 랜덤 명언 생성
- My 달성률(랭킹에 따른 이미지 변화 및 미션 달성률) 반응형 제작
- 나의 미션(가입한 모임과 각 모임의 미션 표기) 반응형 제작

그룹 공지사항/자유/미션
- Quill Editor 도입
  - 이미지 첨부 기능

그룹페이지 반응형 사이드바
- PC: 좌측에 위치하여 정보 표기
- 모바일: 상단에 위치 hover 시 드롭 다운

마이페이지 유효성 검사
- slice method로 일정 글자 수 이상 입력 불가
- 동시에 input으로 focus 

### **[FE] 3명**

|  [강혜빈](https://github.com/ch0rckbean) | [김세화](https://github.com/loveflora) | [최제윤](https://github.com/lemon4974)| 
|---|---|---|
| <img src="https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/438e4df1-a769-4bf1-80d7-9c2c3b37c104" width="100px" height="100px" alt="이미지 설명"> | <img src="https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/d4623303-d519-4208-8f81-3c9793637a2e" width="100px" height="100px" alt="이미지 설명"> | <img src="https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/8bebcee5-40ca-46e3-8ce6-2846138a5869" width="100px" height="100px" alt="이미지 설명">| 


# API 명세서

---
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=for-the-badge&logo=Swagger&logoColor=white">

Swagger 를 통해 개인별 Token 할당 후, api 전송 정보 및 결과값을 참조해 개발 및 소통

[Swagger](http://localhost:8888/api-docs/#/)

|  User | Group | Board | Comment | Mission |
|---|---|---|---|---|
| ![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/52928695-90f1-4280-a5c8-6883bc9d2b62) | ![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/bdda3aba-1250-458c-93d2-ea33e53b63e1) | ![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/33fa621b-5607-44d8-9e92-91112621ab4a) | ![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/92326590-fb62-4312-a4c2-79424f05bac5) |![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/82123195-6d25-409d-97f1-01e0a8910373)


|  전송 정보 예시 | 결과값 예시 |
|---|---|
| ![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/a4d4db18-7cbd-460f-bf89-3e717c92b167) | ![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/fdd533c7-2d0c-4909-a527-eb3406b9fbde) |


# 협업 / 소통

---

노션 내 회의 / 칸반보드 / 트러블 슈팅 등 문서화

| 회의 | 칸반보드 | 트러블 슈팅 |
|---|---|---|
|![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/c22c6762-0db7-4603-bbf5-b3852e0e8d5b)|![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/a26fdae4-dfc5-46d4-8a36-e772c556dd66) |![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/5e36491d-d0da-4f1c-9bc3-7d175480c4d9) |

# 브랜치 전략

---
Main : 배포 버전 업로드
Develop : 개별 feature를 병합 

## 이슈 관리

---

1. Repository의 Issue에 작업 예정 내용 추가
2. '작업내용-Issue 생성 번호' 양식의 브랜치 생성 


# 시작 가이드

---

``` bash
$ git clone https://github.com/SesacProjectTeamA-2/pj-front.git
```

```
$ npm i
$ npm start
```


## 🗃️ ****Github****

---

[SesacProjectTeamA-2](https://github.com/SesacProjectTeamA-2)

### Front

[SesacProjectTeamA-2/pj-front](https://github.com/SesacProjectTeamA-2/pj-front)

# Functions

---
✅ 메인페이지 

✅ 소셜 로그인

✅ 마이페이지

✅ 모임 검색

✅ 모임 CRUD

✅ 모임 가입 & 탈퇴

✅ 모임장 권한 넘기기

✅ 모임 게시판 CRUD

✅ 댓글 CRUD

✅ 404 페이지 


# ****⚙️ 개발 환경****

---

### Front
<img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>
<img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/MUI-007FFF?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=CSS3&logoColor=white"/>
<img src="https://img.shields.io/badge/Github-000000?style=flat-square&logo=Github&logoColor=white"/>
<img src="https://img.shields.io/badge/Figma-F24E1E?style=flat-square&logo=Figma&logoColor=white"/>


# 주요 기능

---
✅ 헤더
![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/d11f906c-5272-4396-a240-074c02df2380)
![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/42836b14-9363-4345-a7c2-ad04081a8d99)

- 로고
- 초대 링크 input
- 메인 페이지 연결
- 모임 페이지 연결
- 마이페이지 연결
- 로그인 여부 및 업로드 여부에 따른 헤더 프로필사진 변경
- 모바일 헤더 추가에 따른 반응형 적용 

✅ 인트로 페이지

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/4cfa54b6-2c05-40ae-8768-7d67784bbdfa' width='300px' height='200px' />
- 동기 부여를 위한 영상/이미지 소스와 글귀 첨부 

✅ 메인페이지 

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/e8a6c282-7d47-4051-8ca6-c4abbb110baa' width='300px' height='200px' />

- 사용자/모임별 미션 조회
- 마이페이지 정보 반영
- 명언 랜덤 API 사용
  

✅ 소셜 로그인 & 회원가입

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/fc4fb772-2765-4b17-9ee9-bb79587c07bd' width='300px' height='200px' />

- Google 로그인
- Kakao 로그인
- Naver 로그인
- 쿠키를 통한 로그인 여부 구분


✅ 마이페이지

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/b4e859ef-29ac-4cd4-ade7-3f8efc6ce432' width='300px' height='200px' />

- 프로필 사진 설정
- 닉네임 & 자기소개 설정 
- 관심분야 설정
- 캐릭터 설정
- 명언 모드 선택(랜덤/직접 작성) 
- 회원 탈퇴

  
✅ 모임 검색

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/6ed72434-8939-4045-b8b3-b0aad13bba84' width='300px' height='200px' />
- 카테고리 필터링
- 전체 검색

✅ 모임 CRUD

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/e542b279-277b-4a2a-8724-500067ff3783' width='300px' height='200px' />

- 모임 생성
- 모임 정보 수정
- 모임 삭제
- 전체 멤버 리스트 조회
- 가입/생성 모임 조회

✅ 모임 가입 & 탈퇴

 <img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/39e5b4da-c393-499c-a3a7-c2b2f9011e0b' width='300px' height='200px' />

- 링크 초대 가입 기능 추가
  

✅ 모임 게시판 CRUD

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/c12e1964-b288-474f-a26d-fc10a0490042' width='300px' height='200px' />

- 미션 게시판
 - 인증 시 랭킹 반
- 자유 게시판
- 공지사항 게시판
  - 관리자만 작성 가능


✅ 댓글 CRUD

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/bf758276-15f9-4401-9986-d4315a27dddd' width='300px' height='200px' />

- 댓글 추가
- 댓글 수정
- 댓글 삭제
- 사용자별 프로필 사진 & 닉네임 로드


✅ 404 페이지 

<img src='https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/a9f95b61-a7cc-42d8-b2d3-906b109d1232' width='300px' height='200px' />

- 에러 상태 공지 
- 돌아가기 버튼 추가
  


# 🚢 ****화면 설계서****

---

![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/2c36d5f3-dde3-4ff3-96f2-ece216ae3b87)


# ****🎨 와이어 프레임****

---

[Figma](https://www.figma.com/file/wiiwMEqh7oAivKKO2uwbLe/Skygrey-218's-team-library?type=design&node-id=0-1&mode=design&t=Ul65uyHVEweViBth-0)

![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/3515f133-f7b3-4ecb-9e0b-0eb4d8f44503)


# ****🗄️ ERD****
[ERD](https://www.erdcloud.com/d/koATx2ojGQyH5Y62S)
![image](https://github.com/SesacProjectTeamA-2/pj-front/assets/86273626/887bcebc-2966-4f5e-a2fa-a0033377fe8c)

---

# ****📂 프로젝트 폴더 구조****

---

## [ FE ]
```
.
├── App.tsx
├── components
│   ├── common
│   │   ├── CharacterItem.tsx
│   │   ├── CharacterList.tsx
│   │   ├── Dday.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── InterestedItem.tsx
│   │   ├── InterestedList.tsx
│   │   ├── Nickname.tsx
│   │   ├── NotFound
│   │   │   ├── ErrBtn.tsx
│   │   │   └── ErrMsg.tsx
│   │   ├── Progressbar.tsx
│   │   ├── SidebarChat.tsx
│   │   ├── SidebarGroup.tsx
│   │   ├── SidebarGroupLeader.tsx
│   │   ├── SidebarGroupMember.tsx
│   │   ├── layout
│   │   │   ├── BasicLayout.tsx
│   │   │   ├── GroupLayout.tsx
│   │   │   ├── ManagementLayout.tsx
│   │   │   ├── oldB.tsx
│   │   │   └── oldG.tsx
│   │   └── modal
│   │       ├── ChoiceModal.tsx
│   │       ├── MissionAddModal.tsx
│   │       ├── MissionCancelModal.tsx
│   │       ├── MissionTest.tsx
│   │       ├── ModalMemberList.tsx
│   │       ├── QuitModal.tsx
│   │       ├── SucessModal.tsx
│   │       ├── WarningModal.tsx
│   │       └── oldMissionAddModal.tsx
│   ├── group
│   │   ├── SwiperComponent.tsx
│   │   ├── Test.tsx
│   │   ├── content
│   │   │   ├── GroupContentFooter.tsx
│   │   │   ├── GroupContentList.tsx
│   │   │   ├── GroupHeader.tsx
│   │   │   └── GroupMissionList.tsx
│   │   └── home
│   │       ├── AccRanking.tsx
│   │       ├── CurRanking.tsx
│   │       ├── HomeMissionList.tsx
│   │       └── MemberList.tsx
│   ├── login
│   │   ├── GoogleLoginBtn.tsx
│   │   ├── KakaoLoginBtn.tsx
│   │   ├── NaverLoginBtn.tsx
│   │   ├── google.svg
│   │   ├── kakao.svg
│   │   └── naver.svg
│   ├── main
│   │   ├── Content.tsx
│   │   ├── Index.tsx
│   │   ├── MainImg.tsx
│   │   ├── MainMission.tsx
│   │   ├── MyPercentage.tsx
│   │   ├── Quotes.tsx
│   │   └── TeamPercentage.tsx
│   ├── management
│   │   ├── AllGroup.tsx
│   │   ├── AllUser.tsx
│   │   ├── Report.tsx
│   │   ├── SidebarManagement.tsx
│   │   └── SummaryCard.tsx
│   ├── mission
│   │   ├── Face.tsx
│   │   ├── GroupFilterTag.tsx
│   │   ├── MissionItem.tsx
│   │   └── MissionList.tsx
│   └── myPage
│       ├── Introduce.tsx
│       ├── Phrase.tsx
│       ├── ProfilePic.tsx
│       ├── PsnCoverImg.tsx
│       ├── Quit.tsx
│       ├── SetMainDday.tsx
│       ├── SetMainDone.tsx
│       ├── SetMainItem.tsx
│       └── SetMainList.tsx
├── custum.d.ts
├── hooks
│   ├── useDateChange.tsx
│   ├── useDdayCount.tsx
│   └── usePxToRem.tsx
├── index.tsx
├── pages
│   ├── Intro.tsx
│   ├── Main.tsx
│   ├── Management.tsx
│   ├── Mission.tsx
│   ├── NotFound.tsx
│   ├── group
│   │   ├── BoardEdit.tsx
│   │   ├── BoardMissionEdit.tsx
│   │   ├── BoardPost.tsx
│   │   ├── Editor.tsx
│   │   ├── GroupBoard.tsx
│   │   ├── GroupCreate.tsx
│   │   ├── GroupEdit.tsx
│   │   ├── GroupHome.tsx
│   │   ├── GroupList.tsx
│   │   ├── GroupMission.tsx
│   │   ├── GroupMissionDetail.tsx
│   │   ├── GroupMissionDone.tsx
│   │   ├── GroupNoti.tsx
│   │   ├── GroupPostDetail.tsx
│   │   ├── GroupSearch.tsx
│   │   ├── GroupSearchAll.tsx
│   │   ├── Groups.tsx
│   │   ├── ImgGroupEdit.tsx
│   │   ├── MissionPost.tsx
│   │   ├── OldGroupPostDetail.tsx
│   │   └── oldGroupMissionDetail.tsx
│   └── user
│       ├── Join.tsx
│       ├── Login.tsx
│       └── MyPage.tsx
├── store
│   ├── index.ts
│   ├── rootReducer.ts
│   └── slices
│       ├── groupSlice.ts
│       ├── missionSlice.ts
│       ├── pageSlice.ts
│       └── userSlice.ts
├── styles
│   └── scss
│       ├── abstracts
│       │   ├── _utils.scss
│       │   └── _variables.scss
│       ├── base
│       │   └── reset.scss
│       ├── components
│       │   ├── buttons.scss
│       │   ├── dday.scss
│       │   ├── inputs.scss
│       │   ├── modal.scss
│       │   ├── progressbar.scss
│       │   ├── swiper.scss
│       │   └── titles.scss
│       ├── layout
│       │   ├── footer.scss
│       │   ├── header.scss
│       │   ├── layout.scss
│       │   ├── sidebarChat.scss
│       │   └── sidebarGroup.scss
│       ├── pages
│       │   ├── group
│       │   │   ├── groupCreate.scss
│       │   │   ├── groupHome.scss
│       │   │   ├── groupMissionDone.scss
│       │   │   ├── groupMissionList.scss
│       │   │   ├── groupNoti.scss
│       │   │   ├── groupPostDetail.scss
│       │   │   ├── groupPostList.scss
│       │   │   ├── groups.scss
│       │   │   └── post.scss
│       │   ├── intro.scss
│       │   ├── main
│       │   │   ├── mainmission.scss
│       │   │   └── percentage.scss
│       │   ├── main.scss
│       │   ├── management
│       │   │   ├── managementlist.scss
│       │   │   ├── managementsidebar.scss
│       │   │   └── summarycard.scss
│       │   ├── mission.scss
│       │   ├── myPage.scss
│       │   ├── notFound.scss
│       │   └── user
│       │       ├── join.scss
│       │       └── login.scss
│       └── themes
│           ├── admin.scss
│           └── theme.scss
└── types
    └── types.ts 
    ```
