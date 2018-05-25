export const getDisplayName = (WrappedComponent) => {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export const wrapDisplayName = (component, wrapperName) => {
  return `${wrapperName}(${getDisplayName(component)})`;
}