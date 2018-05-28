import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { withState, withHandlers, withProps, mapProps, compose, setPropTypes, setDisplayName } from './recompose';
import PropTypes from 'prop-types';

export default compose(
  setDisplayName('HHH'),
  setPropTypes({
    startNumber: PropTypes.number
  }),
  withState('counter', 'setCounter', 0),
  withState('max', '', 5),
  withHandlers({
    increment: ({setCounter, counter, max}) => () => {
      if(counter >= max) return;
      setCounter(n => n + 1);
    },
    decrement: ({setCounter}) => () => setCounter(n => n - 1),
    reset: ({setCounter}) => () => setCounter(0),
  })
)(function Counter({ counter, decrement, increment, reset }){
  return (
    <div>
      Count: {counter}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
})

// export default compose(
//   setDisplayName('MyNameHHH'),
//   mapProps({
//     start: ({ startNumber }) => startNumber + 1
//   }),
//   withState('counter', 'setCounter', 0),
//   withState('max', '', 10),
//   withHandlers({
//     increment: ({setCounter}) => () => {
//       // if(counter >= max) return;
//       setCounter(n => n + 1);
//     },
//     decrement: ({setCounter}) => () => setCounter(n => n - 1),
//     reset: ({setCounter}) => () => setCounter(0)
//   }),
//   withProps({
//     counterUntilMax: ({counter, max}) => Math.max(0, max - counter)
//   })
// )(function Counter({ start, counter, counterUntilMax, increment, decrement, reset }){
//   return (
//     <div>
//       outerProps: { start } <br/>
//       Count: { counter } <br/>
//       Count Until Max: { counterUntilMax } <br/>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// })
