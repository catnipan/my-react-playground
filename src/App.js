import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withState } from './my-recompose';

const enhance = withState('counter', 'setCounter', 11)
const Counter = enhance(({ counter, setCounter }) =>
  <div>
    Count: {counter}
    <button onClick={() => setCounter(n => n + 1)}>Increment</button>
    <button onClick={() => setCounter(n => n - 1)}>Decrement</button>
  </div>
)

export default Counter;
