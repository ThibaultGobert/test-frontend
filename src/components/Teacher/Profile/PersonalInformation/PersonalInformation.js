import React from 'react';
import merge from 'lodash/merge';
import authApi from '../../../../api/auth';
import Loader from '../../../shared/Loader';
import userAdministrationApi from '../../../../api/userAdministration';
import PersonalInformationForm from './PersonalInformationForm';
import PersonalInformationView from './PersonalInformationView';

class PersonalInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
      editData: null,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.updateTeacher = this.updateTeacher.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      editData: newProps.personalInformation.data,
    });
  }

  onChange(e, { name, value }) {
    this.setState(prevState => merge({}, prevState, { editData: { [name]: value } }));
  }

  resetPassword() {
    const { logOut } = this.props.actions;
    authApi.resetPassword().then(logOut);
  }

  toggleEditing() {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  }

  updateTeacher() {
    const {
      updateProfileStart,
      updateTeacherSuccess,
      updateTeacherError,
      fetchProfile,
    } = this.props;

    updateProfileStart();
    userAdministrationApi
      .updateTeacher()
      .then((data) => {
        updateTeacherSuccess(data);
        fetchProfile();
      })
      .catch(updateTeacherError);
  }

  render() {
    const { isEditing, editData } = this.state;
    const { data, loading } = this.props.personalInformation;

    if (loading) {
      return <Loader active />;
    }

    if (isEditing) {
      return (
        <PersonalInformationForm
          data={editData}
          toggleEditing={this.toggleEditing}
          onChange={this.onChange}
        />
      );
    }

    return (
      <PersonalInformationView
        data={data}
        toggleEditing={this.toggleEditing}
        resetPassword={this.resetPassword}
      />
    );
  }
}

export default PersonalInformation;
