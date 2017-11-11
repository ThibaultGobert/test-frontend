const mapActionCreatorsToProps = actionCreators => dispatch => {
  const actionCreatorKeys = Object.keys(actionCreators);

  const actions = actionCreatorKeys.reduce((acc, key) => {
    acc[key] = (...args) => dispatch(actionCreators[key](...args));

    return acc;
  }, {});

  return { actions };
};

export default mapActionCreatorsToProps;
