import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withState, withHandlers, withProps, compose } from './my-recompose';

const enhance1 = withState('counter', 'setCounter', 0);
const enhanceX = withState('max', '', 100);
const enhance2 = withHandlers({
  increment: ({setCounter}) => () => setCounter(n => n + 1),
  decrement: ({setCounter}) => () => setCounter(n => n - 1),
  reset: ({setCounter}) => () => setCounter(0)
});
const enhance3 = withProps({
  counterUntilMax: ({counter, max}) => Math.max(0, max - counter)
})

function Counter({ startNumber, counter, counterUntilMax, increment, decrement, reset }){
  return (
    <div>
      outerProps: { startNumber } <br/>
      Count: { counter } <br/>
      Count Until Max: { counterUntilMax } <br/>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default compose(
  enhance1,
  enhanceX,
  enhance2,
  enhance3
)(Counter)
