import React from "react";
import { useHistory, useParams } from "react-router-dom";

import styled from "styled-components";

let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color : ${ props => props.색상 }
`;

let Detail = (props) => {
  let history = useHistory();

  let { id } = useParams();

  let 찾은상품 = props.shoes.find((상품) => {
    return 상품.id == id;
  });

  return (
    <div className="container">
      <div className="row">
        <박스>
          <제목 색상={'red'}>상세페이지</제목>
        </박스>
        <div className="col-md-6">
          <img src={props.shoes[id].shoesImg} width="100%" />
        </div>

        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p> {props.shoes[id].content} </p>
          <p> {props.shoes[id].price}원 </p>
          <button className="btn btn-danger">주문하기</button>
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

export default Detail;
