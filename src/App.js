import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withState } from './my-recompose';

const enhance = withState('counter', 'setCounter', 0)
const Counter = enhance(function Counter({ counter, setCounter }){
  return (
    <div>
      Count: {counter}
      <button onClick={() => setCounter(n => n + 1)}>Increment</button>
      <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  )
})

export default Counter;
