const createSelector = (...selectors) => (state) => {
  const [ targetSelector, ...initialSelectors ] = selectors.slice().reverse();
  const fedArguments = initialSelectors.reverse().map(selector => selector(state));
  return targetSelector(...fedArguments);
}