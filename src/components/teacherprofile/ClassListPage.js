import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courses";
import {browserHistory} from "react-router";
import {Button} from "semantic-ui-react";
import ErrorMessage from '../shared/ErrorMessage';
import Loader from '../shared/Loader';
import DataTable from "../shared/DataTable";
import * as subscriptionTypes from '../../constants/subscriptionTypes';
import _ from 'lodash';

class ClassListPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = { classlistLoaded: false };
    this.redirectToClassGroups = this.redirectToClassGroups.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadChildrenIfNeeded(this.props.courseId);
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

      return Object.assign(student, {highlight});
    });

    let columns = [
      {
        defaults: require('../../assets/images/placeholders/no-user.png'),
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


    return (
      <div className="class-list">
        <Button labelPosition="left" icon="left chevron" content="Terug" onClick={this.redirectToClassGroups}/>
        <div className="class-list-header">
          <h1>Klaslijst {course? course.name: ""} </h1>
          <Button className="download-classlist" disabled>Download klaslijst</Button>
        </div>

        <Loader active={loading}/>
        {!hasError &&
          <div>
            <DataTable data={data} columns={columns}/>
            <div className="legende">
              <div className="legende-trial">
                <span className="symbol trial" />
                <span className="explanation">Proefles</span>
              </div>
            </div>
            <div className="clearfix"/>
          </div>
        }

        { hasError && <ErrorMessage header="Fout bij inladen" message={error.message} />}
      </div>
    );
  }
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id === id);
  if (course) {
    return course[0];
  }
  return null;
}

ClassListPage.propTypes = {
  actions: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  hasError: PropTypes.bool.isRequired,
  courseId: PropTypes.string.isRequired,
  classList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from path /course/:id
  const course = getCourseById(state.courses.data, courseId);
  let classList = state.classlists[courseId];
  if (!classList) {
    classList = [];
  }

  return {
    classList: classList,
    loading: state.classlists.loading,
    hasError: state.classlists.hasError,
    error: state.classlists.error,
    courseId,
    course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);
