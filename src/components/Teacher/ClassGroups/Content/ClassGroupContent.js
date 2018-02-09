import React from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import { Grid, Segment, Button } from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import ContactList from '../../../shared/ContactList';
import './ClassGroupContent.css';

const ClassGroupContent = ({ content }) => {
  const classListKey = `classlist${content.id}`;
  const feedbackKey = `feedback${content.id}`;
  // TODO Simon: use contact list for headteachers
  return (
    <Grid className="class-group-details">
      <Grid.Row className="full-width">
        <Grid.Column width={8}>
          <Segment vertical>
            <h3>Hoofdlesgever</h3>
            <Grid>
              <Grid.Row>
                <Grid.Column width={5}>{content.headteacher.name}</Grid.Column>
                <Grid.Column width={7}>{content.headteacher.email}</Grid.Column>
                <Grid.Column width={4}>{content.headteacher.cellphone}</Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          {!_.isEmpty(content.assistants) && (
            <Segment vertical>
              <h3>Assistent-lesgevers</h3>
              <ContactList contacts={content.assistants} />
            </Segment>
          )}
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment vertical>
            <h3>Locatie</h3>
            <p>
              <strong>Organisatie </strong>
              <Link to={`/teacherprofile/locations/${content.location.id}`}>
                {content.location.organisation}
              </Link>
            </p>

            <p>
              <strong>Adres</strong> {content.location.address}
            </p>
            <p>
              <strong>Lokaal</strong> {content.location.room}
            </p>
            <p>
              <strong>Opmerkingen</strong>{' '}
              {content.location.roomremark && renderHtml(content.location.roomremark)}
            </p>
          </Segment>
        </Grid.Column>
        <Grid.Column width={2} className="ClassGroupContent-Buttons">
          <Link to={`/teacherprofile/classlist/${content.id}`} key={classListKey}>
            <Button primary>Klaslijst</Button>
          </Link>
          <Link to={`/teacherprofile/feedback/${content.id}`} key={feedbackKey}>
            <Button primary>Aanwezigheden & feedback</Button>
          </Link>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default ClassGroupContent;
