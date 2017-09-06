import React from 'react';
import {Link} from 'react-router';
import PropTypes from 'prop-types';
import { Grid, Segment, Button } from 'semantic-ui-react';

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
                  {content.headteacher.contact}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
          <Segment vertical>
            <h3>Assistenten</h3>
            <Grid>
              { content.assistents &&
                content.assistents.map((assistent) => {
                  const gridRowKey = "gridrowAssistent-" + assistent.name;
                  return (
                    <Grid.Row key={gridRowKey}>
                      <Grid.Column width={3}>
                        {assistent.name}
                      </Grid.Column>
                      <Grid.Column width={6}>
                        {assistent.email}
                      </Grid.Column>
                      <Grid.Column width={6}>
                        {assistent.contact}
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
            <p><strong>Adres</strong> {content.location.address}</p>
            <p><strong>Stad</strong> {content.location.city}</p>
            <p><strong>Organisatie</strong> {content.location.organisation}</p>
            <p><strong>Lokaal</strong> {content.location.room}</p>
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
/***/

/*
* */
