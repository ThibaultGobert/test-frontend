import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courses";
import {browserHistory} from "react-router";
import {Button, Message} from "semantic-ui-react";
import ErrorMessage from '../shared/ErrorMessage';
import Loader from '../shared/Loader';
import DataTable from "../shared/DataTable";
import * as subscriptionTypes from '../../constants/subscriptionTypes';
import _ from 'lodash';

String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};

class ClassListPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = { classlistLoaded: false };
    this.redirectToClassGroups = this.redirectToClassGroups.bind(this);
  }

  componentDidMount() {
    this.props.actions.loadChildren(this.props.courseId);
  }

  redirectToClassGroups() {
    browserHistory.goBack();
  }

  // render function --> typically calling child component, here is markup inline
  render() {
    let data = this.props.classlist.map(student => {
      let highlight = false;
      if (student.subscription_type == subscriptionTypes.TRIAL) {
        highlight = true;
      }

      return Object.assign(student, {highlight: highlight});
    });

    let columns = [
      {
        defaults: "",
        display: "",
        key: "avatarurl",
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
        <Message className="aanwezigheden-info">
          <Message.Header>Opgelet: Tijdelijk wachtwoord</Message.Header>
          <p>Spreek de ouders van de kinderen aan waarvan het tijdelijk wachtwoord (CFR17!) nog actief staat, spoor ze aan om dit via het ouderprofiel te wijzigen</p>
        </Message>

        <Button labelPosition="left" icon="left chevron" content="Terug" onClick={this.redirectToClassGroups}/>
        <div className="class-list-header">
          <h1>Klaslijst {this.props.course? this.props.course.name: ""} </h1>
          <Button className="download-classlist" disabled>Download klaslijst</Button>
        </div>

        <Loader active={this.props.loading}/>
        {!this.props.hasError &&
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

        { this.props.hasError && <ErrorMessage header="Fout bij inladen" message={this.props.error.message} />}
      </div>
    );
  }
}

function getCourseById(courses, id) {
  const course = courses.filter(course => course.id == id);
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
  classlist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from path /course/:id
  const course = getCourseById(state.courses.data, courseId);
  return {
    classlist: state.classlist.data,
    loading: state.classlist.loading,
    error: state.classlist.error,
    hasError: state.classlist.hasError,
    courseId: courseId,
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);
