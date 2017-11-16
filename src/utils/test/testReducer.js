import deepFreeze from 'deep-freeze';

const testReducer = (reducer) => (state, action) => {
  deepFreeze(state);

  expect(action).toMatchSnapshot();

  state = reducer(state, action);

  expect(state).toMatchSnapshot();
};

export default testReducer;
