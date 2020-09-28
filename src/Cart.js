import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

let Cart = (props) => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <td>1</td>
              <td>{props.state[0].name}</td>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

let 함수명 = (state)=>{
    return {
        // 상품명 : state[0].name
        state : state
    }
}
// state를 props화시킴

export default connect(함수명)(Cart)

// export default Cart;
