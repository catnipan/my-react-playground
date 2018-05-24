import React from 'react';

export default (displayName) => WrappedComponent => {
  function SetDisplayComponent(props){
    return React.createElement(WrappedComponent, props);
  }
  SetDisplayComponent.displayName = displayName;
  return SetDisplayComponent;
}
