import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import mapActionCreatorsToProps from '../../../functions/mapActionCreatorsToProps';

import {
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
} from '../../../actions/userAdministration';

import ProfileContainer from './ProfileContainer';

const mapStateToProps = () => {
  const user = {};
  return {
    user,
  };
};

const actionCreators = mapActionCreatorsToProps({
  fetchProfileStart,
  fetchProfileSuccess,
  fetchProfileError,
});

export default withRouter(connect(mapStateToProps, actionCreators)(ProfileContainer));
