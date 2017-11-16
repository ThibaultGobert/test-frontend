import React from "react";
import PropTypes from "prop-types";
import {browserHistory} from "react-router";
import ErrorMessage from '../../shared/ErrorMessage';
import Loader from '../../shared/Loader';
import * as subscriptionTypes from '../../../constants/subscriptionTypes';
import ClassList from "./ClassList";

class ClassListContainer extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = { classlistLoaded: false };
    this.redirectToClassGroups = this.redirectToClassGroups.bind(this);
  }

  componentDidMount() {
    const {courseId} = this.props;
    const {loadChildrenIfNeeded, loadCoursesIfNeeded} = this.props.actions;
    loadChildrenIfNeeded(courseId);
    loadCoursesIfNeeded();
  }

  redirectToClassGroups() {
    browserHistory.goBack();
  }

  // render function --> typically calling child component, here is markup inline
  render() {
    const {
      classList,
      loading,
      hasError,
      error,
      course
    } = this.props;

    let data = classList.map(student => {
      let highlight = false;
      if (student.subscription_type === subscriptionTypes.TRIAL) {
        highlight = true;
      }

      return Object.assign({}, student, {highlight});
    });

    let columns = [
      {
        defaults: require('../../../assets/images/placeholders/no-user.png'),
        display: "",
        key: "avatarurlmedium",
        type: "string"
      },
      {
        defaults: "",
        display: "Naam",
        key: "name",
        type: "string"
      },
      {
        defaults: "",
        display: "Geboortedatum",
        key: "birthdate",
        type: "number"
      },
      {
        defaults: "",
        display: "Leerjaar",
        key: "grade",
        type: "number"
      },
      {
        defaults: "",
        display: "Naam ouder",
        key: "parent_name",
        type: "string"
      },
      {
        defaults: "",
        display: "Contact ouder",
        key: "parent_contact",
        type: "string"
      },
      {
        defaults: "",
        display: "Leerplatform username",
        key: "usernames_platform",
        type: "string"
      },
      {
        defaults: "",
        display: "Leerplatform hint",
        key: "password_hint",
        type: "string"
      },
      {
        defaults: "",
        display: "Scratch username",
        key: "scratchusername",
        type: "string"
      },
      {
        defaults: "",
        display: "Scratch paswoord",
        key: "scratchpassword",
        type: "string"
      },
    ];

    if (hasError) {
      return(
        <ErrorMessage header="Fout bij inladen" message={error.message} />
      );
    }

    if (loading) {
      return (<Loader active/>);
    }

    return (
      <ClassList
        data={data}
        columns={columns}
        redirectToClassGroups={this.redirectToClassGroups}
        course={course}
      />
    );
  }
}

export default ClassListContainer;
