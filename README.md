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