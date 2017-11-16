import auth from '../auth';
import { loginSuccess } from '../../actions/auth';
import testReducer from '../../utils/test/testReducer';

const testAuthReducer = testReducer(auth);

it('should set user when login success', () => {
  let state = {
    data: {},
    loading: false,
    error: undefined
  };

  const action = loginSuccess({ name: 'Simon' });

  testAuthReducer(state, action);
});
