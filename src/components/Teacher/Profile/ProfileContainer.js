import React, { Component } from 'react';

import Profile from './Profile';
import ErrorMessage from '../../shared/ErrorMessage';
import userAdministrationApi from '../../../api/userAdministration';

class ProfileContainer extends Component {
  componentDidMount() {
    const { fetchProfileStart, fetchProfileSuccess, fetchProfileError } = this.props.actions;

    fetchProfileStart();
    userAdministrationApi
      .getUserInformation()
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
        <Profile {...this.props} />
      </div>
    );
  }
}

export default ProfileContainer;
