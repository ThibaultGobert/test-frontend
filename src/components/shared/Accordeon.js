import React from 'react';
import { Accordion } from 'semantic-ui-react';

const Accordeon = ({panels}) => (
  <Accordion styled fluid panels={panels}/>
);

export default Accordeon;
