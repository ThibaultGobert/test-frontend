import React from 'react';
import merge from 'lodash/merge';
import set from 'lodash/set';
import toastr from 'toastr';
import authApi from '../../../../api/auth';
import Loader from '../../../shared/Loader';
import userAdministrationApi from '../../../../api/userAdministration';
import PersonalInformationForm from './PersonalInformationForm';
import PersonalInformationView from './PersonalInformationView';

class PersonalInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      editData: { id: props.personalInformation.data.id },
    };

    this.toggleEditing = this.toggleEditing.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.updateTeacher = this.updateTeacher.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      editData: { id: newProps.personalInformation.data.id },
    });
  }

  onChange(e, { name, value }) {
    const dataset = set(this.state.editData, name, value);
    this.setState(prevState => merge({}, prevState, { editData: dataset }));
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
    const { updateProfileStart, updateProfileSuccess, updateProfileError } = this.props.actions;
    const { fetchProfile } = this.props;

    updateProfileStart();
    userAdministrationApi
      .updateTeacher(this.state.editData)
      .then(data => {
        updateProfileSuccess(data);
        fetchProfile();
        this.toggleEditing();
        toastr.success('Gegevens zijn opgeslagen');
      })
      .catch(updateProfileError);
  }

  render() {
    const { isEditing } = this.state;
    const { data, loading } = this.props.personalInformation;

    if (loading) {
      return <Loader active />;
    }

    if (isEditing) {
      return (
        <PersonalInformationForm
          data={data}
          toggleEditing={this.toggleEditing}
          onChange={this.onChange}
          updateTeacher={this.updateTeacher}
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
