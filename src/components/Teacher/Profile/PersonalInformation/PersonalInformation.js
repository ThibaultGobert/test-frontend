import React from 'react';
import authApi from '../../../../api/auth';
import Loader from '../../../shared/Loader';
import PersonalInformationForm from './PersonalInformationForm';
import PersonalInformationView from './PersonalInformationView';

class PersonalInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  toggleEditing() {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  }

  resetPassword() {
    const { logOut } = this.props.actions;
    authApi.resetPassword().then(logOut);
  }

  render() {
    const { isEditing } = this.state;
    const { data, loading } = this.props.personalInformation;

    if (loading) {
      return <Loader active />;
    }

    if (isEditing) {
      return (
        <PersonalInformationForm data={data} loading={loading} toggleEditing={this.toggleEditing} />
      );
    }

    return (
      <PersonalInformationView
        data={data}
        loading={loading}
        toggleEditing={this.toggleEditing}
        resetPassword={this.resetPassword}
      />
    );
  }
}

export default PersonalInformation;
