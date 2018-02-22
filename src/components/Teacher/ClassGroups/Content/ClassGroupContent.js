import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Grid, Segment, Button } from 'semantic-ui-react';
import ContactList from '../../../shared/ContactList';
import './ClassGroupContent.css';

const ClassGroupContent = ({ content }) => {
  const classListKey = `classlist${content.id}`;
  const feedbackKey = `feedback${content.id}`;
  return (
    <Grid className="class-group-details">
      <Grid.Row className="full-width">
        <Grid.Column width={13}>
          {!_.isEmpty(content.headTeacher) && (
            <Segment vertical>
              <h3>Hoofdlesgever</h3>
              <ContactList contacts={content.headTeacher} />
            </Segment>
          )}
          {!_.isEmpty(content.assistants) && (
            <Segment vertical>
              <h3>Assistent-lesgevers</h3>
              <ContactList contacts={content.assistants} />
            </Segment>
          )}
        </Grid.Column>
        <Grid.Column width={3} className="ClassGroupContent-Buttons">
          <Link to={`/teacherprofile/classlist/${content.id}`} key={classListKey}>
            <Button primary>Klaslijst</Button>
          </Link>
          <Link to={`/teacherprofile/feedback/${content.id}`} key={feedbackKey}>
            <Button primary>Aanwezigheden & feedback</Button>
          </Link>
          <Link to={`/teacherprofile/locations/${content.location.id}`}>
            <Button primary>Locatie details</Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ClassGroupContent;
