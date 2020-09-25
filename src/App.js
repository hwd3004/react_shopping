import React, { useState } from "react";
import { Navbar,Nav,NavDropdown,Button,Jumbotron } from "react-bootstrap";
import './App.css'
import data from './data.js'

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  let [shoes, shoes변경] = useState(data);



  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">신발 쇼핑사이트</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          {/* <Nav className="mr-auto"> */}
          <Nav className="ml-auto">

            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
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
          <div className="row">
            <ShoesList shoes={shoes}></ShoesList>
          </div>
        </div>
      </Route>

      <Route path="/detail">
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>

            <div className="col-md-6 mt-4">
              <h4 className="pt-5">상품명</h4>
              <p>상품설명</p>
              <p>120000원</p>
              <button className="btn btn-danger">주문하기</button> 
            </div>

          </div>
         </div> 
      </Route>

      
    </div>
  );
}

let ShoesList = (props) => {
  return(
    <>
      {
        props.shoes.map( (dat, index)=>{
          return (
            <div className="col-md-4" key={props.shoes[index].id}>
              <img src={props.shoes[index].shoesImg} width="100%" alt={props.shoes[index].title} ></img>
              <h4>{props.shoes[index].title}</h4>
              <p>{props.shoes[index].content} &amp; {props.shoes[index].price}</p>
            </div>
          )
        } )
      }
    </>
  )
}

export default App;
