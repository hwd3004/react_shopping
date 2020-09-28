import React, { useState } from "react";
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from "react-bootstrap";
import './App.css';
import data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

import axios from 'axios';
import { useContext } from "react";
import Cart from "./Cart.js";



export let 재고context = React.createContext();

function App() {

  let [shoes, shoes변경] = useState(data);

  let [재고, 재고변경] = useState([10, 11, 12]);


  let [추가신발, 추가신발변경] = useState([]);

  let [더보기, 더보기변경] = useState(false);



  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand> <Link to="/">Shoes Shop</Link> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* <Nav className="mr-auto"> */}
          <Nav className="ml-auto">

            <Nav.Link as={Link} to="/">Home </Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      
      
      <Switch>

        <Route exact path="/">
          <Jumbotron className="background">
            <h1>신규 오픈!</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button variant="primary">Learn more</Button>
            </p>
          </Jumbotron>

          

          <div className="container">

            <재고context.Provider value={재고}>

              <div className="row">
                <ShoesList shoes={shoes}></ShoesList>
              </div>

            </재고context.Provider>

            <button className="btn btn-primary" onClick={ ()=>{

              // 로딩중이라는 ui 
              
              // 서버에 데이터를 보내고 싶을때 post 요청하는 법
              // axios.post('서버url', {id : '아이디', pw : '비번'}).then()

              axios.get('https://codingapple1.github.io/shop/data2.json').then( (result)=>{

                // 로딩중이라는 ui 삭제

                shoes변경( [...shoes, ...result.data] )
                // ...으로 카피하는 습관을 가지자
                // shoes와 result.data는 각각 [{}, {}, {}] 형식의 데이터이다
                // [...shoes, ...result.data] 이 코드의 의미는
                // [{}, {}, {}, {}, {}, {}] 이다
              } ).catch( ()=>{
                // 로딩중이라는 ui 삭제
                console.log('에러');
              } );
            } }>더보기</button>

            {/* {
              더보기 == true ? (
                <div className="row">
                  <추가신발리스트 추가신발={추가신발}></추가신발리스트>
                </div>
              ) : null
            } */}
          </div>
        </Route>


        <Route path="/cart">
          <Cart></Cart>
        </Route>




        <재고context.Provider value={재고}>

          <Route path="/detail/:id">
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}></Detail>
          </Route>

        </재고context.Provider>



      </Switch>
      
    </div>
  );
}

let ShoesList = (props) => {

  let 재고 = useContext(재고context);

  return(
    <>
      {
        props.shoes.map( (dat, index)=>{
          return (
            <div className="col-md-4" key={props.shoes[index].id}>
              <img src={props.shoes[index].shoesImg} width="100%" alt={props.shoes[index].title} ></img>
              <h4>{props.shoes[index].title}</h4>
              <p>{props.shoes[index].content} &amp; {props.shoes[index].price}</p>
              <p>{재고[index]}</p>
              {console.log(재고[index])}

              <Test></Test>

            </div>
          )
        } )
      }
    </>
  )
}

let Test = (props) => {
  
  let 재고 = useContext(재고context);

  return (
    <div>
    <p>재고 : {재고}</p>
    </div>
  )
}

let 추가신발리스트 = (props) => {
  return (
    <>
      {
        props.추가신발.map((dat, index) => {
          return (
            <div className="col-md-4" key={props.추가신발[index].id}>
              <h4>{props.추가신발[index].title}</h4>
              <p>{props.추가신발[index].content} &amp; {props.추가신발[index].price} </p>
            </div>
          )
        })
      }
    </>
  )
}

export default App;
