import React from 'react';
import { getDisplayName } from './util';

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
  MapPropsComponent.displayName = `mapProps(${getDisplayName(WrappedComponent)})`;
  return MapPropsComponent;
}
