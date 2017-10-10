import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import { Grid, Segment, Button } from 'semantic-ui-react';
import renderHtml from 'react-render-html';
import ContactList from "./ContactList";

const ClassGroupContent = ({content}) => {
  let buttonKey = "button" + content.id;
  // TODO Simon: use contact list for headteachers
  return (
    <Grid className="class-group-details">
      <Grid.Row className="full-width">
        <Grid.Column width={8}>
          <Segment vertical>
            <h3>Hoofdlesgever</h3>
            <Grid>
              <Grid.Row >
                <Grid.Column width={3}>
                  {content.headteacher.name}
                </Grid.Column>
                <Grid.Column width={6}>
                  {content.headteacher.email}
                </Grid.Column>
                <Grid.Column width={6}>
                  {content.headteacher.cellphone}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment vertical>
            <h3>Assistent-lesgevers</h3>
            <ContactList contacts={content.assistants}/>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment vertical>
            <h3>Locatie</h3>
            <p><strong>Organisatie</strong> {content.location.organisation}</p>
            <p><strong>Adres</strong> {content.location.address}</p>
            <p><strong>Lokaal</strong> {content.location.room}</p>
            <p><strong>Opmerkingen</strong> {content.location.roomremark && renderHtml(content.location.roomremark)}</p>

          </Segment>
        </Grid.Column>
        <Grid.Column width={2}>
          <Link to={'/teacherprofile/classlist/' + content.id} key={buttonKey}>
            <Button primary>Klaslijst</Button>
          </Link>
        </Grid.Column>
     </Grid.Row>
    </Grid>
  );
};

ClassGroupContent.propTypes = {
  content: PropTypes.object
};

export default ClassGroupContent;
