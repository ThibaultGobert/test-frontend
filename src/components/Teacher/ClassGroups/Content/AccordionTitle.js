import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const AccordionTitle = ({ fields }) => {
  return (
    <Grid>
      <Grid.Row columns={Object.keys(fields).length}>
        {
            Object.values(fields).map((field, index) => {
              const grid_key = `grid${index}`;
              return (<Grid.Column key={grid_key}>
                <div>{field}</div>
              </Grid.Column>);
            })
          }
      </Grid.Row>
    </Grid>
  );
};

AccordionTitle.propTypes = {
  fields: PropTypes.object.isRequired,
};

export default AccordionTitle;
