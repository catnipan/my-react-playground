import React from 'react';
import { getDisplayName } from './util';

export default (handlerCreators) => WrappedComponent => {
  class WithHandlersComponent extends React.Component{
    constructor(props){
      super(props);
      this.generatedHandlers = {};
      for(var handlerName in handlerCreators){
        this.generatedHandlers[handlerName] = handlerCreators[handlerName](props);
      }
    }
    render(){
      return React.createElement(WrappedComponent, {
        ...this.props,
        ...this.generatedHandlers
      })
    }
  }
  WithHandlersComponent.displayName = `withHandlers(${getDisplayName(WrappedComponent)})`;
  return WithHandlersComponent;
}
