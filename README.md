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

---

# 6. React Router 2: Link, Switch, history 기능

1. Link 태그로 페이지 이동 기능

<Nav.Link> <Link to="/">Home</Link> </Nav.Link>
<Nav.Link> <Link to="/detail">Detail</Link></Nav.Link>



2. 뒤로 가기 버튼

import { useHistory } from 'react-router-dom';

let history = useHistory();

<button className="btn btn-danger" onClick={()=>{history.goBack()}}>뒤로가기</button>


history.push('/')

/ 경로로 이동



3. Switch 컴포넌트

매치되는 <Route> 들을 전부 보여주지 말고 한번에 하나만 보여주세요~ 기능을 만들고 싶을 때 씀


(App.js 파일)

function App(){
  return (
    <div>
      <나머지HTML/>
      <Route exact path="/">
        어쩌구
      </Route>
      <Route path="/detail">
        <Detail/>
      </Route>
      <Route path="/:id">
        <div>새로 만든 route입니다</div>
      </Route>
    </div>
  )
}

---

# 7. React Router 3: URL 파라미터로 상세페이지 100개 만들기

(App.js)

<Route path="/detail/:id">
    <Detail shoes={shoes}></Detail>
</Route>


(Detail.js)

import { useHistory, useParams } from 'react-router-dom';

<h4 className="pt-5">{props.shoes[id].title}</h4>
<p> {props.shoes[id].content} </p>
<p> {props.shoes[id].price}원 </p>

---

# 8. styled-components를 이용한 class 없는 CSS 스타일링

컴포넌트가 많은 경우 스타일링을 하다보면 불편함이 생기는데
1. class 만들어놓은걸 까먹고 중복해서 또 만들거나
2. 갑자기 다른 이상한 컴포넌트에 원하지않는 스타일이 적용되거나
3. css 파일이 너무 길어져서 수정이 어렵거나
이런 경우가 있음

그래서 컴포넌트 제작할 때 스타일을 바로 입혀서 컴포넌트를 만들어버릴 수 있는데
styled-components라는 인기 라이브러리를 설치하여 이용하면 된다
호불호가 갈릴수 있음

터미널에
npm install styled-components


(Detail.js)

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
`;


<박스>
    <제목>상세페이지</제목>
</박스>



스타일 컴포넌트에 props 전달

let 제목 = styled.h4`
  font-size: 25px;
  color : ${ props => props.색상 }
`;

<제목 색상={'red'}>상세페이지</제목>

---

# 9. 아니면 CSS 대신 SASS를 쓰자 (SASS 문법 10분 총정리)

npm install node-sass

sass에선 변수, 함수, 반복문, 연산자 사용 가능
sass 문법으로 css 작성 가능
브라우저는 sass 문법을 모르므로 sass를 다시 css로 컴파일해야함
그래서 설치한게 node-sass

---

# 10. Lifecycle Hook (옛날사람) useEffect (요즘사람)

---

# 11. useEffect 숙제 풀이 & 나머지 기능

1. useEffect는 컴포넌트 등장 / 업데이트시 실행됨
이게 아주 중요한 점. 의도하지 않은 버그가 생길 수 있음.

let [데이터, 데이터변경]  = useState();

useEffect( () => {
    실행할 코드
}, [데이터] )

[데이터]로 조건을 지정해서 이 useEffect는 [데이터] useState가 변경이 될때만 실행된다



useEffect( () => {
    실행할 코드
}, [데이터], [다른_데이터1], [다른_데이터2] )

내가 원하는 state 여러개 집어넣을 수 있다


useEffect( () => {
    실행할 코드
}, [] )

비우면 한번만 실행하고 끝남



2. setTimeout() 쓸때 주의사항

타이머 설정해준 시간 다 되기전에 뒤로가기를 하거나 다른 페이지로 이동할 경우, 버그가 생길 수 있음

useEffect( () => {
    setTimeout( 코드 )

    return
})

return을 넣어주면, 그 페이지가 사라질때 실행할 코드를 넣을수 있다
이걸로 타이머를 제거해줘야한다

useEffect( () => {
    let 타이머 = setTimeout( 코드 )

    return ()=>{ clearTimeou( 타이머 ) }
})

---

# 12. 리액트에서의 Ajax 요청방법 & Ajax는 무엇인가

1. Ajax
서버에 새로고침없이 요청을 할 수 있게 도와줌

2. 요청 종류
Get 요청 : 주소창에 URL 때려박는 요청, 특정 페이지 / 자료 읽기
Post 요청 : 서버로 중요 정보 전달

3. Ajax 사용법
jQuery 설치해서 $.ajax() 쓰기
axios 설치해서 axios.get() 쓰기
자바스크립트 fetch() 쓰기

axios가 좋음

npm install axios



<button className="btn btn-primary" onClick={ ()=>{
    axios.get('https://codingapple1.github.io/shop/data2.json').then(콜백함수).catch(콜백함수);
} }>더보기</button>

axios.get(데이터 요청할 url)
성공하면 .then(실행할 코드)
실패하면 .catch(실행할 코드)


요청한 자료는 json인데, 서버랑 데이터 주고 받을때 오브젝트 자료형은 주고 받을 수 없다.
오브젝트를 다 따옴표를 쳐서 문자형으로 만들어야한다
근데 콘솔로그로 출력해보면 오브젝트로 나오는데, axios가 json을 오브젝트로 알아서 바꿔준다.
자바스크립트 fetch를 이용하면 바꿔주지않는다.

---

# 13. 리액트에서의 Ajax 요청방법 2 & 숙제풀이

1. 나는 새 state를 만들어서 했는데, 강의영상에서는 기존 shoes state에 추가하는 방법으로 하였다.

<button className="btn btn-primary" onClick={ ()=>{
    axios.get('https://codingapple1.github.io/shop/data2.json').then( (result)=>{
    shoes변경( [...shoes, ...result.data] )
    // ...으로 카피하는 습관을 가지자
    // shoes와 result.data는 각각 [{}, {}, {}] 형식의 데이터이다
    // [...shoes, ...result.data] 이 코드의 의미는
    // [{}, {}, {}, {}, {}, {}] 이다
    } ).catch( ()=>{console.log('에러')} );
} }>더보기</button>




2. 서버에 데이터를 보내고 싶을때 post 요청하는 법
axios.post('서버url', {id : '아이디', pw : '비번'}).then( (result)=>{} ).catch( ()=>{} )
보내고 싶은 주소, 보내고 싶은 데이터


3. 컴포넌트 로드시 ajax 데이터를 가져오고 싶을땐

let 컴포넌트명 => (props 필요하면 props 쓰고) {
    필요한 변수와 state들 쓰고

    useEffect( ()=>{
        axios.get();
    }, [] )
}

[]를 써서 업데이트 시엔 실행 안되게.

---

# 14. Component를 3개 중첩해서 만들면 state 전달은 어떻게 하죠?

---

# 15. 컴포넌트 많을 때 props 쓰기 싫으면 Context API 쓰셈

하위 컴포넌트들이 props 없이도 부모의 값을 사용 가능

 컴포넌트 안이 아닌, 바깥에 context 만들기

(App.js)

import {useContext} from 'react';

let 재고context = React.createContext();

function App(){

    let [재고, 재고변경] = useState([10, 11, 12]);

    return (
        
        <재고context.Provider value={재고}>
            <SheosList>></ShoesList>
        </재고context.Provider>
    )
}


let ShoesList = () => {

    let 재고 = useContext(재고context)

    return (
        <div>
            <p>{재고}</p>
            <Test></Test>
        </div>
    )
}

let Test = () => {
    let 재고 = useContext(재고context);

    return (
        <p> 재고 : {재고} </p>
    )
}

---

# 16. Tab 만들기와 리액트에서의 애니메이션 (react-transition-group)

npm install react-transition-group

import { CSSTransition } from 'react-transition-group';

<CSSTransition>
    <TabContent 누른탭={누른탭}></TabContent>
</CSSTransition>

애니메이션 주고 싶은 곳에 <CSSTransition>으로 감싸기



사용하는 클래스는 3개

<CSSTransition in={} classNames="" timeout={}>


(Detail.js)

<CSSTransition in={true} classNames="wow" timeout={500}>
    <TabContent 누른탭={누른탭}></TabContent>
</CSSTransition>

wow는 프로그래머가 작명한것



(Detail.scss)

.wow-enter {
    
}

애니메이션 시작 때 적용할 css




.wow-enter-active {
    
}

애니메이션 동작 때 적용할 css

---

# 17. 세계최고로 쉬운 Redux 1 : props 싫으면 쓰세요

import Table - export default 된거 가져오기
import {Table} - Table이라는 변수/함수 가져오기


npm install redux react-redux


리덕스 쓰는 이유
props 쓰기 싫어서. props 없이 모든 컴포넌트가 state 갖다쓰기 가능


셋팅법
1. index.js에서 <Provider>를 import 해온다
2. state 값공유를 원하는 컴포넌트를 감싸면 된다
3. createStore를 import 해온 다음, 사용법에 의해 state를 만들어 let store라는 변수에 저장
4. <Provider store={store}> 이렇게 store를 등록하면,
   Provider로 감싼 컴포넌트는 전부 store 안에 있던 값을 props 없이 공유 가능하다.

---

# 18. 세계최고로 쉬운 Redux 2 : reducer / dispatch로 데이터 수정하는 법

Redux 쓰는 이유 - state 데이터 관리 기능

reducer는 별거 아니고 그냥 수정된 state를 퉤 뱉는 함수


소규모 사이트에선 리덕스는 필요없다. 배보다 배꼽이 더 크다.
대규모 사이트에선 데이터를 한 눈에, 한 곳에 관리할 수 있어서 쓴다.

리덕슬르 쓰면 전문용어로 'state 관리가 용이하다'고 한다. 혹은 '상태관리가 용이하다'고 한다.

---

# 19. 세계 최고로 쉬운 Redux 3 : state와 reducer가 더 필요하면

---

# 20. 세계 최고로 쉬운 Redux 4 : dispatch할 때 데이터 실어보낼 수 있음

---

# 21. 장바구니 기능 완성하기 가이드