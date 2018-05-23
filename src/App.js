import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withState, withHandlers } from './my-recompose';

const enhance1 = withState('counter', 'setCounter', 0);
const enhance2 = withHandlers({
  increment: ({setCounter}) => () => setCounter(n => n + 1),
  decrement: ({setCounter}) => () => setCounter(n => n - 1),
  reset: ({setCounter}) => () => setCounter(0)
})

function Counter({ counter, increment, decrement, reset }){
  return (
    <div>
      Count: {counter}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default enhance1(enhance2(Counter));
