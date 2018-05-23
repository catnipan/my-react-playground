import React from 'react';

const withState = (stateName, stateUpdaterName, initialState) => Component => {
  return class wrapped extends React.Component{
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
      return <Component {...{
        [stateName]: this.state[stateName],
        [stateUpdaterName]: this[stateUpdaterName]
      }}/>
    }
  }
}

export default withState;
