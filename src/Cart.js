import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

let Cart = (props) => {
    console.log("\nCart props")
    console.log(props)
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
      {
        props.alert열렸니 === true ? (
            <div className="my-alert2">
                <p>신규할인 20%</p>
                <button onClick={()=>{props.dispatch({ type: 'alert닫기' })}}>닫기</button>
            </div>
          ) : null
      }
      
    </div>
  );
};

let state를props화 = (state)=>{
    console.log('\n\nCart.js')
    console.log(state)
    return {
        // 상품명 : state[0].name
        state : state.reducer,
        alert열렸니 : state.reducer2
    }
}
// state를 props화시킴

export default connect(state를props화)(Cart)

// export default Cart;
