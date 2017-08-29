import React from 'react';
import { Grid, Divider, Segment, Button } from 'semantic-ui-react';

const ClassGroupContent = ({content}) => {
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
              {
                content.assistents.map((assistent) => {
                  return (
                    <Grid.Row >
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
          <Button primary>Klaslijst</Button>
        </Grid.Column>
     </Grid.Row>
    </Grid>
  );
};

export default ClassGroupContent;
