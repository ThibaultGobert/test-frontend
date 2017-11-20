import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import ErrorMessage from '../../shared/ErrorMessage';
import Loader from '../../shared/Loader';
import courseApi from '../../../api/courses';
import * as subscriptionTypes from '../../../constants/subscriptionTypes';
import ClassList from './ClassList';

const columns = [
  {
    defaults: require('../../../assets/images/placeholders/no-user.png'),
    display: '',
    key: 'avatarurlmedium',
    type: 'string'
  },
  {
    defaults: '',
    display: 'Naam',
    key: 'name',
    type: 'string'
  },
  {
    defaults: '',
    display: 'Geboortedatum',
    key: 'birthdate',
    type: 'number'
  },
  {
    defaults: '',
    display: 'Leerjaar',
    key: 'grade',
    type: 'number'
  },
  {
    defaults: '',
    display: 'Naam ouder',
    key: 'parent_name',
    type: 'string'
  },
  {
    defaults: '',
    display: 'Contact ouder',
    key: 'parent_contact',
    type: 'string'
  },
  {
    defaults: '',
    display: 'Leerplatform username',
    key: 'usernames_platform',
    type: 'string'
  },
  {
    defaults: '',
    display: 'Leerplatform hint',
    key: 'password_hint',
    type: 'string'
  },
  {
    defaults: '',
    display: 'Scratch username',
    key: 'scratchusername',
    type: 'string'
  },
  {
    defaults: '',
    display: 'Scratch paswoord',
    key: 'scratchpassword',
    type: 'string'
  }
];

class ClassListContainer extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = { classlistLoaded: false };
    this.redirectToClassGroups = this.redirectToClassGroups.bind(this);
  }

  componentDidMount() {
    const { courseId } = this.props;
    const { fetchChildrenStart, fetchChildrenSuccess, fetchChildrenError } = this.props.actions;

    fetchChildrenStart();

    courseApi
      .getChildrenForCourse(courseId)
      .then(data => fetchChildrenSuccess(data, courseId))
      .catch(fetchChildrenError);
  }

  redirectToClassGroups() {
    browserHistory.goBack();
  }

  render() {
    const { classlist, loading, error, course, users } = this.props;

    const classListWithHighlights = classlist.map(child => {
      return { ...child, highlight: child.subscription_type == subscriptionTypes.TRIAL };
    });

    if (error) {
      return <ErrorMessage header="Fout bij inladen" message={error.message} />;
    }

    if (loading) {
      return <Loader active />;
    }

    return (
      <ClassList
        data={classListWithHighlights}
        columns={columns}
        redirectToClassGroups={this.redirectToClassGroups}
        course={course}
      />
    );
  }
}

export default ClassListContainer;
