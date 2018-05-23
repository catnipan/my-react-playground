import React from 'react';
import { getDisplayName } from './util';

export default (stateName, stateUpdaterName, initialState) => WrappedComponent => {
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
      return React.createElement(WrappedComponent, {
        [stateName]: this.state[stateName],
        [stateUpdaterName]: this[stateUpdaterName]
      })
    }
  }
  WithStateComponent.displayName = `WithState(${getDisplayName(WrappedComponent)})`;
  return WithStateComponent;
}
