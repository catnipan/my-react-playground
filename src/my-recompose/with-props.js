import React from 'react';
import { wrapDisplayName } from './display-name';

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
  WithPropsComponent.displayName = wrapDisplayName(WrappedComponent, 'withProps');
  return WithPropsComponent;
}
