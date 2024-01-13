# 💡 GAOH(Golden Age of Hollywood)

- Open API(TMDB)를 활용한 필터 기능과 검색어 기능을 제공하는 고전 영화 검색 사이트
- 개발기간: `2023.12.11 ~ 2024.01.05`



## 🔗 관련 URL

- 🚀 [프로젝트 배포 주소](https://yellow-n-blue-new.vercel.app/) by Vercel  
- 📰 [발표 자료](https://docs.google.com/presentation/d/1PpYLDlya7PLAvalIxgVi-B6isoFG7t9QLDxOZCdK6no/edit#slide=id.ga073618e60_0_16) by Google Slides  
- 📖 [개발 과정](https://sunrise-coal-31d.notion.site/yellow-blue-c8d5aa6bdb2841d6afce2a11332504ee?pvs=4) by Notion



## 👋🏻 시작 가이드

**Installation**

```bash
git clone https://github.com/lemon4974/YellowNBlue.git   
npm i    
npm start   
```

**주요 Version 정보**
```bash
"react": "^17.0.2",
"react-router-dom": "^6.20.1",
"react-scripts": "5.0.1",
"axios": "^1.6.2",
"@mui/material": "^5.15.0",
"recoil": "^0.7.7",
"recoil-persist": "^5.1.0",
"sass": "^1.69.5",
"Node.js" : "^18.17.0"
```


## 👾 개발 환경

### 👩🏻‍💻개발 인원

- Frontend [최제윤](https://github.com/lemon4974)

### 🛠 개발 도구

 - 버전 관리 도구 : GitHub
 - 개발 문서 도구 : Notion

### ⚒ 사용 기술

- 언어
- 프레임워크
- 배포

### 📚 사용 라이브러리

- TMDB API
- Axios  
- react-router-dom  
- react-swipeable-views  
- recoil-persist
- Intersection Observer API


## 🖥 화면 및 주요 기능

### 🎞 **Films** 페이지

**검색, 연도별, 인기순과 최신순에 따른 고전 영화 데이터 로드**

- 검색 : query를 /search 로 URL의 일부로 전송
- select tag의 연도, 인기순/최신순 변화시 페이지 새로 로드
- `Infinite Scrolling` : Intersection Observer API를 이용한 무한 스크롤 기능

| year에 따른 페이지 로드 | Infinite Scrolling |
| ----------------------- | ------------------ |
|    ![Movie filter](https://github.com/lemon4974/GAOH/assets/139740955/43737f46-3c2c-45a2-8e8c-ccd98e6a15d1)        |      ![ezgif-4-4f0f105e40](https://github.com/lemon4974/GAOH/assets/139740955/5ae7e053-7241-46e6-8616-d9a774851ab7)              |

### 🔍 **Search** 페이지

**전달된 query에 따른 검색 결과 표시되는 페이지**

- `useLocation, URLSearchParams, encodeURIComponent`을 이용한 쿼리 전달
- filter로 1927부터 1969의 특정 year 범위의 영화 데이터만 표기

| 'gone with' 검색 결과 화면 |
| ----------------------- |
|           ![search](https://github.com/lemon4974/GAOH/assets/139740955/7b544886-50b4-4e09-8bcc-324ee5005f54)              |

### 📽 **Details** 페이지

**영화 상세 정보 안내 페이지**  
**장르, 제작사, 출연 배우, 관련 사진, 추천작 등**

- 각기 다른 data에 따른 URL을 기준으로 컴포넌트 분리
- `MUI`의 Stepper와 react-swipeable-views를 이용한 `image carousel`

| 화면 | 이미지 캐러셀 |
| ---- | ------------- |
|  ![Movie Detail](https://github.com/lemon4974/GAOH/assets/139740955/239a808c-61dc-484c-a3c1-ada98bb364fb)    |    ![image carousel](https://github.com/lemon4974/GAOH/assets/139740955/cf9fa3dd-0a9e-4761-a6af-b2b241905c62)   |


## 🗂 파일 구조

```bash
📦src
 ┣ 📂components
 ┃ ┣ 📂Films
 ┃ ┣ 📂Home
 ┃ ┣ 📂MovieDetail
 ┃ ┣ 📂SearchResult
 ┃ ┣ 📜Footer.jsx
 ┃ ┣ 📜Header.jsx
 ┣ 📂pages
 ┃ ┣ 📜Error.jsx
 ┃ ┣ 📜Films.jsx
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜MovieDetail.jsx
 ┃ ┣ 📜SearchResult.jsx
 ┣ 📂styles
 ┃ ┣ 📂films
 ┃ ┣ 📂home
 ┃ ┣ 📂movieDetail
 ┃ ┃ ┣ 📜imageCarousel.scss
 ┃ ┃ ┣ 📜moviedetail.scss
 ┃ ┃ ┗ 📜swipeableRecommendation.scss
 ┃ ┣ 📂searchresult
 ┃ ┣ 📜footer.scss
 ┃ ┣ 📜footerFixer.scss
 ┃ ┣ 📜global.scss
 ┃ ┣ 📜header.scss
 ┃ ┣ 📜_mixin.scss
 ┃ ┗ 📜_variables.scss
 ┣ 📜App.jsx
 ┣ 📜App.test.js
 ┣ 📜AppRoutes.jsx
 ┣ 📜index.js
 ┗ 📜ThemeContext.js
```
