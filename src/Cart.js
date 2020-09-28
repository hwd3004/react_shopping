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
          {
              props.state.map((dat, index)=>{
                  return (
                      <tr key={index}>
                          <td> {dat.id} </td>
                          <td> {dat.name} </td>
                          <td> {dat.quan} </td>
                          <td>
                              <button onClick={()=>{ props.dispatch({ type: '수량증가' }) }}>+</button>
                              <button onClick={()=>{ props.dispatch({ type: '수량감소' }) }}>-</button>
                          </td>
                      </tr>
                  )
              })
          }
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
