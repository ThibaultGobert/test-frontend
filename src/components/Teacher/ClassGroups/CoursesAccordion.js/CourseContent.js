import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Grid, Segment, Button } from 'semantic-ui-react';
import ContactList from '../../../shared/ContactList';

const CourseContent = ({ course }) => {
  return (
    <Grid className="class-group-details">
      <Grid.Row className="full-width">
        <Grid.Column width={13}>
          {!_.isEmpty(course.headTeacher) && (
            <Segment vertical>
              <h3>Hoofdlesgever</h3>
              <ContactList contacts={course.headTeacher} />
            </Segment>
          )}
          {!_.isEmpty(course.assistants) && (
            <Segment vertical>
              <h3>Assistent-lesgevers</h3>
              <ContactList contacts={course.assistants} />
            </Segment>
          )}
        </Grid.Column>
        <Grid.Column width={3} className="ClassGroupContent-Buttons">
          <Link to={`/teacherprofile/classlist/${course.id}`}>
            <Button primary>Klaslijst</Button>
          </Link>
          <Link to={`/teacherprofile/feedback/${course.id}`}>
            <Button primary>Aanwezigheden</Button>
          </Link>
          <Link to={`/teacherprofile/locations/${course.location.id}`}>
            <Button primary>Locatie details</Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default CourseContent;
