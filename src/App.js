import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withState, withHandlers, withProps, mapProps, compose } from './my-recompose';



export default compose(
  mapProps({
    start: ({ startNumber }) => startNumber + 1
  }),
  withState('counter', 'setCounter', 0),
  withState('max', '', 100),
  withHandlers({
    increment: ({setCounter}) => () => setCounter(n => n + 1),
    decrement: ({setCounter}) => () => setCounter(n => n - 1),
    reset: ({setCounter}) => () => setCounter(0)
  }),
  withProps({
    counterUntilMax: ({counter, max}) => Math.max(0, max - counter)
  })
)(function Counter({ start, counter, counterUntilMax, increment, decrement, reset }){
  return (
    <div>
      outerProps: { start } <br/>
      Count: { counter } <br/>
      Count Until Max: { counterUntilMax } <br/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
})
