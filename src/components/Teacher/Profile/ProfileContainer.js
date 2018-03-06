import React, { Component } from 'react';

import Profile from './Profile';
import ErrorMessage from '../../shared/ErrorMessage';
import userAdministrationApi from '../../../api/userAdministration';

class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.fetchProfile = this.fetchProfile.bind(this);
  }

  componentDidMount() {
    this.fetchProfile();
  }

  fetchProfile() {
    const { fetchProfileStart, fetchProfileSuccess, fetchProfileError } = this.props.actions;

    fetchProfileStart();
    userAdministrationApi
      .getTeacher()
      .then(data => {
        fetchProfileSuccess(data);
      })
      .catch(error => {
        fetchProfileError(error);
      });
  }

  render() {
    const { personalInformation } = this.props;
    if (personalInformation && personalInformation.hasError) {
      return <ErrorMessage message="Fout bij inladen van de profiel informatie" />;
    }

    return (
      <div className="ProfileContainer">
        <h1>Jouw Profiel</h1>
        <p>Bekijk hier jouw persoonlijke gegevens, hou deze gegevens up-to-date</p>
        <Profile {...this.props} fetchProfile={this.fetchProfile} />
      </div>
    );
  }
}

export default ProfileContainer;
