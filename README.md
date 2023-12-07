# Moving | 영화 검색 사이트

해외 영화 검색 API를 이용한 **영화 검색 사이트**입니다.

## 🌐 Demo

[Moving | 영화 검색 사이트](https://moving-search-movie.vercel.app)

## ⚒️ Tech Stack

|        Category        |                                                                                                                                                       Technologies                                                                                                                                                        |
| :--------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| **프레임워크 및 언어** |                                                  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=black">                                                  |
|     **빌드 도구**      |                                                                                                          <img src="https://img.shields.io/badge/Vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">                                                                                                           |
|     **상태 관리**      |                                                 <img src="https://img.shields.io/badge/React_query-FF4154?&style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/Recoil-3578E5?&style=for-the-badge&logo=recoil&logoColor=white">                                                  |
|      **스타일링**      |                                                                                                          <img src="https://img.shields.io/badge/Scss-D26AC2?&style=for-the-badge&logo=emotion&logoColor=white">                                                                                                           |
|     **코드 관리**      | <img src="https://img.shields.io/badge/ESLINT-4B32C3?&style=for-the-badge&logo=ESLint&logoColor=white"> <img src="https://img.shields.io/badge/PRETTIER-F7B93E?&style=for-the-badge&logo=Prettier&logoColor=white"> <img src="https://img.shields.io/badge/HUSKY-000000?&style=for-the-badge&logo=Husky&logoColor=white"> |
|    **배포 플랫폼**     |                                                                                                        <img src="https://img.shields.io/badge/Vercel-000000.svg?style=for-the-badge&logo=Vercel&logoColor=white">                                                                                                         |

<br />

## 🏠 프로젝트 구조

1. eslint, prettier, husky를 이용한 **`일관된 코드 관리`**
2. createBrowserRouter를 이용한 **`라우팅`**
3. 최상위 Layout 컴포넌트 구조

   - 에러가 발생해도 Header는 반드시 보여지게 설정
   - Outlet을 이용하여 route별 자식 컴포넌트 렌더링
   - **에러 대응**
     - ErrorBoundary의 FallbackComponent를 통해 메인 페이지로 이동할 수 있게 대응
   - **Waterfall UI 방지**
     - Suspense를 이용한 일괄적 비동기 데이터 로딩 처리
   - **lazy 로딩**
     - Suspense와 lazy를 이용한 번들 최적화 시도
   - **모달 컨테이너 분리**
     - createPortal을 이용하여 모달을 root 노드 외부에 위치시켜 다른 컴포넌트들과 독립시킴
     - 모달 type별 내부 컴포넌트를 교체하는 방식으로 확장성을 높임

4. **`상태관리`**

   - recoil: 모달 및 영화 데이터 상태 관리
   - react-query: API 데이터 관리, React suspense와 연동한 loading 처리

5. 기능
   - 검색
   - 무한 스크롤
     - Web API의 **`IntersectionObserver`** 를 사용하여 hook을 통해 마지막 아이템이 감지되면 API를 호출하는 무한 스크롤 구현
     - 검색 결과를 최대 10개씩 받아올 수 있도록 설정
     - isLoading 상태와 isScrollEnd 상태를 고려한 **`API 중복 호출 최소화`**
     - **`스켈레톤`** 을 이용한 사용자 UX 개선

<br />

## 📦 파일 구조

```
📦 src
├── 📂 atoms
|── 📂 components
|   ├── 📂 common
|   ├── 📂 movie
|   |   ├─── 📂 movieDetail
|   |   └─── 📂 movieList
|   └── 📂 search
├── 📂 hooks
├── 📂 pages
├── 📂 routes
├── 📂 services
├── 📂 styles
└── 📂 types
```

## 🚀 시작하기

```bash
yarn install
```

```bash
yarn dev
```
