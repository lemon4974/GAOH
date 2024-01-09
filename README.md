# 💡 GAOH(Golden Age of Hollywood)

- SeSAC 3rd 프로젝트
- TMDB API를 활용한 고전 영화 검색 사이트입니다.
- 개발기간: 2023.12.11 ~ 2024.01.05

## 🔗 관련 URL

> 🚀 [프로젝트 배포 주소](https://yellow-n-blue-new.vercel.app/) by Vercel  
> 📰 [발표 자료](https://docs.google.com/presentation/d/1PpYLDlya7PLAvalIxgVi-B6isoFG7t9QLDxOZCdK6no/edit#slide=id.ga073618e60_0_16) by google slides  
> 📖 [개발 과정](https://sunrise-coal-31d.notion.site/yellow-blue-c8d5aa6bdb2841d6afce2a11332504ee?pvs=4) by notion

## 👋🏻 시작 가이드

**Installation**

> `git clone https://github.com/lemon4974/YellowNBlue.git`  
> `npm i`  
> `npm start`

## 👾 개발 환경

### 👩🏻‍💻개발 인원

> Frontend [최제윤](https://github.com/lemon4974)

### 🛠 개발 도구

> - 버전 관리 도구 : GitHub
> - 개발 문서 도구 : Notion

### ⚒ 사용 기술

- 언어
- 프레임워크
- 배포

### 📚 사용 라이브러리

> Axios  
> react-router-dom  
> react-swipeable-views  
> recoil-persist

## 🖥 화면 및 주요 기능

### 🎞 **Films** 페이지

**검색, 연도별, 인기순과 최신순에 따른 고전 영화 데이터 로드**

- 검색 : query를 /search 로 URL의 일부로 전송
- select tag의 연도, 인기순/최신순 변화시 페이지 새로 로드
- `Infinite Scrolling` : Intersection Observer API를 이용한 무한 스크롤 기능

| year에 따른 페이지 로드 | Infinite Scrolling |
| ----------------------- | ------------------ |
|                         |                    |

### 🔍 **Search** 페이지

**전달된 query에 따른 검색 결과 표시되는 페이지**

- `useLocation, URLSearchParams, encodeURIComponent`을 이용한 쿼리 전달
- filter로 1927부터 1969의 특정 year 범위의 영화 데이터만 표기

| year에 따른 페이지 로드 |
| ----------------------- |
|                         |

### 📽 **Details** 페이지

**영화 상세 정보 안내 페이지**  
**장르, 제작사, 출연 배우, 관련 사진, 추천작 등**

- 각기 다른 data에 따른 URL을 기준으로 컴포넌트 분리
- `MUI`의 Stepper와 react-swipeable-views를 이용한 `image carousel`

| 화면 | 이미지 캐러셀 |
| ---- | ------------- |
|      |               |

## 🗂 파일 구조
