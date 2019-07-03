# Mybrary Web (Front-End)

### Link

##### [- Mybrary web (Back-End) 보러가기)](https://github.com/engus93/mybraryWeb-backend/tree/master/Back-End)

##### [- Mybrary web (Front-End 보러가기)](https://github.com/engus93/mybraryWeb-frontend)

##### - [TIL Repository로 이동하기](https://github.com/engus93/TIL)

##### - [MyBrary로 이동하기 😎](https://mybrary.netlify.com/)

### MyBrary 간략한 소개 🧐

> MyBrary는 예전 `Android` 프로젝트에서 만든 어플을 기반을 웹으로 재구성 해보았습니다. 핵심적인 기능으로는 아래와 같이 있습니다. 감사합니다. 👨🏻‍💻

```
1. 도서 검색
2. 베스트셀러, 신간, 장르별 리스트 분류
3. 도서 일기 & 일기를 공개 & 비공개로 나누어 작성
4. 공개 일기를 사용자들과 함께 공유 & 좋아요 기능을 통해 최근순, 랭킹순 분류
```

> Heroku에 Deply 했습니다. 요금제를 Free를 이용하기에 서버가 잠들어 있을시에는 초기에 로딩이 조금 오래걸릴수 있습니다. 😃

###### ※ 회원가입의 절차가 있기에 불편하신 분은 아래의 계정을 이용하면 더욱 빠르게 확인할 수 있습니다.

```
// MyBrary-Web 계정

아이디: qwe@qwe.qwe
비밀번호: qweqwe123!!
```

### MyBrary 각 기능별 설명

#### 0. Auth

    0-1. Welcome
    0-2. Sign In
        - PassPort & JWT을 활용한 인증
    0-3. Sign Up
        - Bcrypt를 이용한 암호화

#### 1. Main

    1-1. Apollo & GraphQL & Fetch를 이용한 알라딘 API를 이용한 데이터 처리
    1-2. 각종 장르에 맞는 북 리스트 Slick.js를 이용해 구현
    1-3. Write Posts 페이지로 이동 가능한 Floating Btn (Fix 상태 구현)

#### 2. Book Detail

    2-1. Apollo & GraphQL & Fetch를 이용한 알라딘 API를 이용한 데이터 처리
    2-2. react-lines-ellipsis를 이용한 More 버튼 구현
    2-3. Write Posts 페이지로 데이터 전송

#### 3. Search

    3-1. 도서 검색 & Paging with 알라딘 API

#### 4. My Page

    4-1. 회원 정보 수정
    4-2. 회원 탈퇴

#### 5. Write Posts

    5-1. 글 작성
    5-2. Firebase를 이용한 사진 업로드

#### 6. My Brary

    6-1. 날짜순으로 Paging
    6-2. 수정 & 삭제 기능

#### 7. See Other Posts

    7-1. 최근순 & 좋아요 높은 순 정렬
    7-2. 좋아요 기능

---

## Front-End

#### Mybrary with Express + Prisma + GraphQL + Apollo + React

## Routes

- [x] Auth
- [x] Main
- [x] Search
- [x] My Page
- [x] Book Detail
- [x] See My Post
- [x] See Other Post
- [x] Write Post
- [x] Book List

## 환경 설정

### CRA(Create React App)

```bash
yarn create react-app my-app
```

> `create react-app`을 하면 package.json에 react, react-dom, react-scripts 이렇게 설치되어 있다. 간략하게 설명하면 `create react-app`는 `React`를 빠르게 사용할 수 있도록 기본적인 세팅이 되어있다.

### styled-components

```bash
yarn add styled-components
```

> `styled-components` 는 React의 구조를 CSS-in-JS로 할 수 있도록 도와준다.

### react-router-dom

```bash
yarn add react-router-dom
```

> `react-router-dom`은 `react-router` 모듈에 DOM이 바인딩 되어 있다고 보면 된다.

### graphql

```bash
yarn add graphql
```

> `graphql`은 Query Language이며 타입 시스템을 사용하여 쿼리를 실행하는 서버사이드 런타임입니다.

### react-apollo-hooks

```bash
yarn add react-apollo-hooks
```

> `graphql`은 Query Language이며 타입 시스템을 사용하여 쿼리를 실행하는 서버사이드 런타임입니다.

### apollo-boost

```bash
yarn add apollo-boost
```

> `Apllp Client`를 설정하는데 필요한 것들이 들어있는 패키지이다.

### react-helmet

```bash
yarn add react-helmet
```

> `react-helmet`는 페이지의 헤더를 손 쉽게 변경할 수 있도록 해준다.

### react-toastify

```bash
yarn add react-toastify
```

> `react-toastify`는 앱처럼 토스트 메세지를 띄울수 있도록 도와준다.

### styled-reset

```bash
yarn add styled-reset
```

> `styled-reset`는 전역으로 스타일을 선언할 수 있게 해준다.

### prop-types

```bash
yarn add prop-types
```

> `PropTypes`를 사용할 수 있도록 도와준다.

### react-lines-ellipsis

```bash
yarn add react-lines-ellipsis
```

> `react-lines-ellipsis`는 글자의 줄을 제어하여 일정 글자 이상이 될 때 `...`으로 바꿔준다.

### unescape

```bash
yarn add unescape
```

> `unescape`는 특수 문자들을 치환해서 String으로 변환해준다.

### firebase

```bash
yarn add firebase
```

> `firebase`는 사진을 업로드 하기 위해 Storage의 용도로 사용했습니다.
