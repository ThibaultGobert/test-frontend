import React from 'react';
import { Grid } from 'semantic-ui-react';

const AccordionTitle = ({ fields }) => {
  return (
    <Grid>
      <Grid.Row columns={Object.keys(fields).length}>
        {Object.values(fields).map((field, index) => {
          const gridKey = `grid${index}`;
          return (
            <Grid.Column key={gridKey}>
              <div>{field}</div>
            </Grid.Column>
          );
        })}
      </Grid.Row>
    </Grid>
  );
};

export default AccordionTitle;
