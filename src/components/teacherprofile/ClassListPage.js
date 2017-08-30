import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courses';
import {browserHistory} from 'react-router';
import {Table, Button} from 'semantic-ui-react';
import DataTable from "../shared/DataTable";

class CoursesPage extends React.Component {
  // init state + bind functions
  constructor(props, context) {
    super(props, context);
    this.redirectToClassGroups = this.redirectToClassGroups.bind(this);
  }

  redirectToClassGroups() {
    browserHistory.goBack();
  }

  // render function --> typically calling child component, here is markup inline
  render() {
    let columns = [
      {
        defaults: "",
        display: "Naam",
        key: "name",
        type: "string"
      },
      {
        defaults: "",
        display: "Leeftijd",
        key: "age",
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
        display: "Username scratch",
        key: "usernames_scratch",
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
        name: student.firstName + ' ' + student.surName,
        age: student.age,
        grade: student.grade,
        parent_name: student.parent.firstName + ' ' + student.parent.surName,
        parent_contact: student.parent.contact,
        usernames_scratch: student.usernames.scratch,
        usernames_platform: student.usernames.platform
      }
    });
    return (
      <div className="class-list">
        <Button labelPosition='left' icon='left chevron' content='Terug' onClick={this.redirectToClassGroups}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
