import React from 'react';
import { getDisplayName } from './util';

export default (handlerCreators) => WrappedComponent => {
  class WithPropsComponent extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      const generateProps = {};
      for(var handlerName in handlerCreators){
        generateProps[handlerName] = handlerCreators[handlerName](this.props);
      }
      return React.createElement(WrappedComponent, {
        ...this.props,
        ...generateProps
      })
    }
  }
  WithPropsComponent.displayName = `withHandlers(${getDisplayName(WrappedComponent)})`;
  return WithPropsComponent;
}
