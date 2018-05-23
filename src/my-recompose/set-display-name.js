import React from 'react';

export default (displayName) => WrappedComponent => {
  class SetDisplayComponent extends React.Component{
    render(){
      return React.createElement(WrappedComponent, this.props);
    }
  }
  SetDisplayComponent.displayName = displayName;
  return SetDisplayComponent;
}
