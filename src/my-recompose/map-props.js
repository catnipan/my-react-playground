import React from 'react';
import { wrapDisplayName } from './display-name';

export default (handlerCreators) => WrappedComponent => {
  class MapPropsComponent extends React.Component{
    constructor(){
      super();
    }
    render(){
      const mappedProps = {};
      for(var handlerName in handlerCreators){
        mappedProps[handlerName] = handlerCreators[handlerName](this.props);
      }
      return React.createElement(WrappedComponent, mappedProps)
    }
  }
  MapPropsComponent.displayName = wrapDisplayName(WrappedComponent, 'mapProps');
  return MapPropsComponent;
}
