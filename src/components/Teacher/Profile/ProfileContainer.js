import React, { Component } from 'react';

import Profile from './Profile';
import ErrorMessage from '../../shared/ErrorMessage';
import userAdministrationApi from '../../../api/userAdministration';
import contractsApi from '../../../api/contracts';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.fetchProfile = this.fetchProfile.bind(this);
  }

  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile() {
    const {
      fetchProfileStart, fetchProfileSuccess, fetchProfileError,
      fetchContractsStart, fetchContractsSuccess, fetchContractsError,
    } = this.props.actions;

    fetchProfileStart();
    userAdministrationApi
      .getTeacher()
      .then(data => {
        fetchProfileSuccess(data);
      })
      .catch(error => {
        fetchProfileError(error);
      });

    fetchContractsStart();
    contractsApi
      .getContracts()
      .then(data => {
        fetchContractsSuccess(data);
      })
      .catch(error => {
        fetchContractsError(error);
      });
  }

  render() {
    const { personalInformation } = this.props;
    if (personalInformation && personalInformation.hasError) {
      return <ErrorMessage message="Fout bij inladen van de profiel informatie" />;
    }

    return (
      <div className="ProfileContainer">
        <Profile {...this.props} fetchProfile={this.fetchProfile} />
      </div>
    );
  }
}

export default ProfileContainer;
