import React from 'react';
import shallowEqual from 'shallowequal';
import { getDisplayName } from './util';

export default (handlerCreators) => WrappedComponent => {
  var beforeProps = {};
  const generatedHandlers = {};
  function WithHandlersComponent(props){
    if(!shallowEqual(beforeProps, props)){
      for(var handlerName in handlerCreators){
        generatedHandlers[handlerName] = handlerCreators[handlerName](props);
      }
      beforeProps = { ...props };
    }
    return React.createElement(WrappedComponent, {
      ...props,
      ...generatedHandlers
    })
  }
  WithHandlersComponent.displayName = `withHandlers(${getDisplayName(WrappedComponent)})`;
  return WithHandlersComponent;
}

// Takes an object map of handler creators or a factory function. These are higher-order functions that accept a set of props and return a function handler:
// This allows the handler to access the current props via closure, without needing to change its signature.
// Handlers are passed to the base component as immutable props, whose identities are preserved across renders. This avoids a common pitfall where functional components create handlers inside the body of the function, which results in a new handler on every render and breaks downstream shouldComponentUpdate() optimizations that rely on prop equality. This is the main reason to use withHandlers to create handlers instead of using mapProps or withProps, which will create new handlers every time when it get updated.