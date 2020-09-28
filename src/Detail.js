import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import styled from "styled-components";

import "./Detail.scss";

import {재고context} from './App.js'

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`;

let Detail = (props) => {
  let [디스플레이, 디스플레이변경] = useState(false);
  let [입력, 입력변경] = useState("");

  let 재고 = useContext(재고context);

  useEffect(() => {
    // let 타이머 = setTimeout(() => {}, 2000);
    // return () => {};

    let 타이머 = setTimeout(() => {
      디스플레이변경(true);
    }, 2000);
    console.log("useEffect 실행됨");
  }, [디스플레이]);

  let history = useHistory();

  let { id } = useParams();

  let 찾은상품 = props.shoes.find((상품) => {
    return 상품.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <박스>
          <제목 색상={"red"} className="detailPage">
            상세페이지
          </제목>
        </박스>

        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
        {입력}
        <input
          onChange={(event) => {
            입력변경(event.target.value);
          }}
        ></input>

        {디스플레이 === false ? (
          <div className="my-alert2">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>
        ) : null}

        <div className="col-md-6">
          <img src={props.shoes[id].shoesImg} width="100%" />
        </div>

        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p> {props.shoes[id].content} </p>
          <p> {props.shoes[id].price}원 </p>

          <Info 재고={props.재고}></Info>

          <button className="btn btn-danger" onClick={ (event)=>{
            //   props.재고변경( [9, 11, 12] );
            //   console.log(props.재고[id]-1)

              let 바뀔재고 = [...props.재고]
              console.log(바뀔재고[id])
              바뀔재고[id] -= 1
              props.재고변경(바뀔재고)
              
              return false;
            } }>주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
};

let Info = (props) => {
    let { id } = useParams();
    return (
        <p> 재고 : {props.재고[id]} </p>
    )
}

export default Detail;
