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
    return (
      <div className="class-list">
        <Button labelPosition='left' icon='left chevron' content='Terug' onClick={this.redirectToClassGroups}/>

        <h1>Klaslijst {this.props.course.name} </h1>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Naam</Table.HeaderCell>
              <Table.HeaderCell>Leeftijd</Table.HeaderCell>
              <Table.HeaderCell>Leerjaar</Table.HeaderCell>
              <Table.HeaderCell>Naam ouder</Table.HeaderCell>
              <Table.HeaderCell>Contact ouder</Table.HeaderCell>
              <Table.HeaderCell>Username scratch</Table.HeaderCell>
              <Table.HeaderCell>Username leerplatform</Table.HeaderCell>

            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              this.props.course.classlist.map(student => {
                return (
                  <Table.Row>
                    <Table.Cell>{student.firstName} {student.surName}</Table.Cell>
                    <Table.Cell>{student.age}</Table.Cell>
                    <Table.Cell>{student.grade}</Table.Cell>
                    <Table.Cell>{student.parent.firstName} {student.parent.surName}</Table.Cell>
                    <Table.Cell>{student.parent.contact}</Table.Cell>
                    <Table.Cell>{student.usernames.scratch}</Table.Cell>
                    <Table.Cell>{student.usernames.platform}</Table.Cell>
                  </Table.Row>
                );
              })
            }
          </Table.Body>
        </Table>
      </div>
    );
  }
}

//        <DataTable data={this.props.course.classlist}/>


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
