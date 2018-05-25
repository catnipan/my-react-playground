import React from 'react';

export const setStatic = (key, value) => component => {
  component[key] = value;
  return component;
}

export const setDisplayName = (displayName) => setStatic('displayName', displayName);

export const setPropTypes = (propTypes) => setStatic('propTypes', propTypes);