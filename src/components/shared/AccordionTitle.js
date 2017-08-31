import React from 'react';
import { Grid } from 'semantic-ui-react';

const AccordionTitle = ({fields}) => {
    return (
      <Grid>
        <Grid.Row columns={Object.keys(fields).length}>
          {
            Object.values(fields).map((field, index) => {
              let grid_key = "grid" + index;
              return (<Grid.Column key={grid_key}>
                <div>{field}</div>
              </Grid.Column>);
            })
          }
        </Grid.Row>
      </Grid>
    );
};

export default AccordionTitle;
