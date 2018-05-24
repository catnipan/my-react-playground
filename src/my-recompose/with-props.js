import React from 'react';
import { getDisplayName } from './util';

export default (handlerCreators) => WrappedComponent => {
  function WithPropsComponent(props){
    const generateProps = {};
    for(var handlerName in handlerCreators){
      generateProps[handlerName] = handlerCreators[handlerName](props);
    }
    return React.createElement(WrappedComponent, {
      ...props,
      ...generateProps
    })
  }
  WithPropsComponent.displayName = `withProps(${getDisplayName(WrappedComponent)})`;
  return WithPropsComponent;
}
