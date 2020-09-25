# 0. 새로 시작

---

# 1. 부트스트랩 설치

css 프레임워크
https://getbootstrap.com/

리액트는 리액트 버전 부트스트랩 설치해야함
https://react-bootstrap.github.io/


index.html에

<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

추가

이후에 다시 https://getbootstrap.com/ 으로 가서
docs에서 검색하거나, docs - components에서 태그 살펴보고 맘에 드는거 복붙
원래는 https://react-bootstrap.github.io/ 에서 복붙해야하지만, 전자로 하는게 일단은 쉬움.

---

# 2. 평화로운 쇼핑몰 레이아웃 디자인시간

https://react-bootstrap.github.io/ 입장
Components 클릭
검색창에 navbar 검색하면 나오는거 복붙

복붙하면 에러뜸. 복붙한 컴포넌트를 상단에 import해야함.

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


대문 만들기
https://react-bootstrap.github.io/ 에서 jumbotron 검색해서 복붙





App.css에서

.background {
    background-image: url(/images/background.jpg);
    background-position: center;
    color: white;
}

리액트 특징으로, public 폴더 내부의 이미지를 쓰는 문법이다.
src 폴더 등의 파일들은 리액트 앱을 발행했을 때 저절로 압축이 되는데,
public 폴더는 리액트 앱을 발행했을 때, 사이트 루트경로에 그대로 남아있다.




<div className="container">
    <div className="row">
        <div className="col-4"></div>
        <div className="col-4"></div>
        <div className="col-4"></div>
    </div>
</div>

부트스트랩 문법
row - 사이트를 세로로 12개의 칼럼으로 쪼갬.
container - 좌우여백을 잡아줌.
col-4 - 4개 칼럼 차지하는 div
col-md-4 - 모바일, 가로폭이 좁은 화면에서 세로로 정렬


https://react-bootstrap.netlify.app/layout/grid/
여기서 레이아웃 문서 참고하면서 해야됨.

---

# 3. 코드가 넘나 길어진다면 import / export 사용해보기

export {} 문법
여러개의 변수들을 내보낼때 dexport default 대신에

(data.js 파일)

let name1 = 'Kim';
let name2 = 'Park';
export { name1, name2 }

(App.js 파일)

import { name1, name2 } from './data.js';

# 3.1 숙제

1. 오늘 만들었던 상품리스트를 이번엔 컴포넌트로 만들어서 첨부해보세요
2. 컴포넌트에 실제 상품명이 뜨도록 데이터바인딩 완료해보십시오
3. 컴포넌트 3개를 map 반복문을 돌려봅시다

---

# 4. 숙제해설: 상품목록 Component화+반복문

내가 한거랑 다른 방식이니 참고하자

---

# 5. React Router 1: 셋팅과 기본 라우팅

페이지 나누기(라우팅)는 react-router-dom 라이브러리 이용

npm install react-router-dom



HashRouter vs BroswerRouter

HashRouter - 라우팅 안전하게 할 수 있게 도와줌
사이트 방문시 url 맨뒤에 /#/이 붙은채로 시작


BrowserRouter - 라우팅을 리액트가 아니라 서버에게 요청할수 있어서 위험
url 맨뒤에 /#/ 없음


(index.js)

import { HashRouter } from 'react-router-dom';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);



(App.js)

import { Link, Route, Switch } from 'react-router-dom';


원하는 위치에

<Route path="/">
    <div>메인페이지</div>
</Route>

<Route path="/detail">
    <div>디테일페이지</div>
</Route>

<Route path="/어쩌구" component={컴포넌트이름}></Route>




/detail 경로로 접색해도 /경로 내용이 보이는 이유

/detail이라고 적으면 /라는 경로도 포함되어있음
그래서 / 경로로 접속했다고 생각하고 메인지와,
/detail 경로도 접속했다고 생각하고 상세페이지 둘 다 보여줌
리액트 라우터가 원래 이렇게 동작함

이걸 막으려면 / 경로에 exact 속성 부여하면 됨

<Route exact path="/">
    <div>메인페이지</div>
</Route>


리액트 라우터는 각각 페이지마다 다른 html 파일을 보여주는게 아님
html 내부의 내용을 갈아치워서 다른 페이지처럼 흉내냄