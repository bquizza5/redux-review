import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addOne, change } from "./actions"
import './App.css';

function App() {
  const number = useSelector(state => state.number);
  const dispatch = useDispatch();


  
  const test = () => {
    console.log(number)
  }

  return (
    <div className="App">
      <div>{number}</div>
      <button onClick={(e) => {dispatch(addOne())}}>add 1</button>
      <button onClick={(e) => {dispatch(change(0))}}>Change to 0</button>
      <button onClick={test}>test</button>
    </div>
  );
}


export default App;
