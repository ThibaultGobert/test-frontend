import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import { Grid, Segment, Button } from 'semantic-ui-react';
import renderHtml from 'react-render-html';

const ClassGroupContent = ({content}) => {
  let buttonKey = "button" + content.id;
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
            <Grid>
              { content.assistants &&
                content.assistants.map((assistant) => {
                  const gridRowKey = "gridrowAssistent-" + assistant.name;
                  return (
                    <Grid.Row key={gridRowKey}>
                      <Grid.Column width={3}>
                        {assistant.firstname + ' ' + assistant.lastname}
                      </Grid.Column>
                      <Grid.Column width={6}>
                        {assistant.email}
                      </Grid.Column>
                      <Grid.Column width={6}>
                        { assistant.cellphone}
                      </Grid.Column>
                    </Grid.Row>
                  );
                })
              }
            </Grid>
          </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
          <Segment vertical>
            <h3>Locatie</h3>
            <p><strong>Organisatie</strong> {content.location.organisation}</p>
            <p><strong>Adres</strong> {content.location.address}</p>
            <p><strong>Lokaal</strong> {content.location.room}</p>
            <p><strong>Opmerkingen</strong> {renderHtml(content.location.roomremark)}</p>

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
