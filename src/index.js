import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { HashRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

let alert초기값 = true;

let reducer2 = (state = alert초기값, 액션) => {
  console.log('\nreducer2')
  console.log(액션)

  if(액션.type === 'alert닫기'){
    state = false;
    return state;
  } else {
    return state;
  }
}

let 기본state = [
  { id: 0, name: "멋진신발", quan: 2 },
  { id: 1, name: "멋진신발2", quan: 1 },
];

let reducer = (state = 기본state, 액션) => {
  console.log(액션.payload)
  console.log(state)
  console.log(액션)

  if(액션.type === '항목추가'){
    let copy = [...state]
    console.log('\n\ncopy')
    console.log(copy)
    console.log(액션.payload.name)

    // if(copy.includes(액션.payload.name) == true){
    //   console.log('asd')
    // } else {
    //   copy.push(액션.payload);  
    // }
    // 스읍 안되네

    let found = state.findIndex((a)=>{return a.id === 액션.payload.id})
    
    if( found >= 0){
      let copy = [...state];
      copy[found].quan++;
      return copy
    } else {
      let copy = [...state];
      copy.push(액션.payload); 
      return copy
    }
  }
  else if( 액션.type === '수량증가' ){

    let copy = [...state]
    copy[액션.상품번호].quan++;
    return copy;
  }
  else if( 액션.type === '수량감소' ){
    let copy = [...state]
    copy[액션.상품번호].quan--;
    return copy;
  }
  else {
    return state;  
  }
};

let store = createStore(combineReducers({reducer, reducer2}));

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
