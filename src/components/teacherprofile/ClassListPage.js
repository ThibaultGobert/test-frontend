import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as courseActions from "../../actions/courses";
import {browserHistory} from "react-router";
import {Button, Dimmer, Loader} from "semantic-ui-react";
import DataTable from "../shared/DataTable";

class ClassListPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.state = { classlistLoaded: false };
    this.redirectToClassGroups = this.redirectToClassGroups.bind(this);
  }

  componentWillMount() {
    if (!this.props.course.classlist) {
      this.props.actions.loadChildren(this.props.course.id);
    } else {
      this.setState({
        classlistLoaded: true
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    if ("classlist" in nextProps.course && nextProps.course.classlist.length > 0) {
      this.setState({
        classlistLoaded: true
      });
    }
  }

  redirectToClassGroups() {
    browserHistory.goBack();
  }

  // render function --> typically calling child component, here is markup inline
  render() {
    if(!this.state.classlistLoaded) {
      return (<Dimmer active>
        <Loader size="medium">Loading</Loader>
      </Dimmer>);
    }

    let columns = [
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
        display: "Username leerplatform",
        key: "usernames_platform",
        type: "string"
      },
    ];
    let data = this.props.course.classlist.map(student => {
      return {
        name: student.firstname + " " + student.lastname,
        birthdate: student.birthdate,
        grade: student.grade,
        parent_name: student.parent.firstName + " " + student.parent.lastName,
        parent_contact: student.parent.phone,
        usernames_platform: student.login
      };
    });
    return (
      <div className="class-list">
        <Button labelPosition="left" icon="left chevron" content="Terug" onClick={this.redirectToClassGroups}/>
        <div className="class-list-header">
          <h1>Klaslijst {this.props.course.name} </h1>
          <Button className="download-classlist" disabled>Download klaslijst</Button>
        </div>
       <DataTable data={data} columns={columns}/>
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
  course: PropTypes.object,
};

// redux connect and related functions
function mapStateToProps(state, ownProps) {
  const courseId = ownProps.params.id; // from path /course/:id
  let course = getCourseById(state.courses, courseId);

  return {
    course: course
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClassListPage);
