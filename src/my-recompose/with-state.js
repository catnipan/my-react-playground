import React from 'react';
import { getDisplayName } from './util';

const withState = (stateName, stateUpdaterName, initialState) => WrappedComponent => {
  class WithStateComponent extends React.Component{
    constructor(){
      super();
      this.state = {
        [stateName]: initialState
      }
    }
    [stateUpdaterName] = (updater, callback) => {
      if(typeof updater === "function"){
        this.setState({ [stateName]: updater(this.state[stateName]) }, callback);
      } else {
        this.setState({ [stateName]: updater }, callback)
      }
    }
    render(){
      return <WrappedComponent {...{
        [stateName]: this.state[stateName],
        [stateUpdaterName]: this[stateUpdaterName]
      }}/>
    }
  }
  WithStateComponent.displayName = `WithState(${getDisplayName(WrappedComponent)})`;
  return WithStateComponent;
}

export default withState;
