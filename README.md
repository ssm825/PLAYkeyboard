# 프리온보딩 1주차 과제 - 7Team

### WEEK 1-1 - 비트바이트
- 과제 목표 : 플레이키보드 웹스토어 만들기
- 수행 기간 : 2022/10/4 ~ 2022/10/6 (3일)

<br>

![img](https://github.com/oka7759/2sa_images/blob/master/1006.gif)

<br><br>

# 배포 링크
- [링크](https://playkeyboard.netlify.app/)

<br><br>

# 7팀 소개 및 역할
 
| 이름   | 역할  |
| ------ | ------ |
| 노정은 | - |
| 김영수 | theme detail page |
| 류승연 | 디테일 페이지 리스트  | 
| 서수민 | 초기 설정, Header, Nav |
| 정억화 | 메인 페이지 리스트|

<br><br>

# 사용기술 스택

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/> <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React-Router&logoColor=white"/> <img src="https://img.shields.io/badge/styled components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>

<br><br>

# 과제 및 구현 내용

## 과제 요건

#### 공통

- Figma 디자인 명세대로 구현
- 반응형 레이아웃 구현
- 작업물 배포

<br>

#### 메인(첫번째 화면)

- 웹 테마 스토어를 통해 카테고리별로 키보드 테마 보여주기
- 각 테마를 눌렀을 때, 두번째 화면(디테일)으로 이동
  
<br>

#### 디테일(두번째 화면)

- 웹 테마 정보 페이지를 통해 테마의 상세 정보 보여주기
- 동적 라우팅을 통해 첫번째 화면에서 전달받은 params(themeId)를 활용하여 상세 정보 불러오기
- 상단의 뒤로가기 버튼을 눌렀을 때 첫번째(메인) 화면으로 이동
  
<br>

## 구현 내용

### 공통

- axios를 이용한 api 통신으로 데이터를 불러옴
- 동적 라우팅 구현
- 반응형 디자인 적용(web, tablet, mobile)

<br>

### 메인(첫번째 화면)

#### Header
- 로고 클릭 시 window.location.reload()를 사용하여 화면 refesh

<br>

#### Theme list
- Swiper 라이브러리를 이용한 카테고리 이동
- 조건부 렌더링을 이용한 카테고리 클릭 효과
- useNavigate로 디테일 페이지에 Theme ID 전달
- javascript를 사용하여 무한 스크롤 구현

<br>

#### Nav
- nav icon 호버 시 img url 변경
- window.scrollY를 사용하여 scrollTop 버튼 구현

<br>

### 디테일(두번째 화면)

#### Theme Info
- 동적 라우팅 구현 및 params(themeId)를 활용하여 테마 정보 불러오기
- 뒤로가기 버튼 클릭 시 첫번째 화면으로 이동
- Swiper 라이브러리를 이용한 테마 이미지 슬라이드 기능 구현

<br>

#### Theme Content
- 이모티콘 클릭 시 클릭 효과 적용 (누른 버튼 다시 누르면 사라짐)
- data 안에 isLiveTheme 값(boolean)에 따른 조건부 렌더링 적용

<br><br>

# 팀 노션
- [링크](https://www.notion.so/wecode/7-d9c9440b686f465bbda33f31a87b6e2f)
