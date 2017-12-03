import React from 'react';
import { Accordion } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import AccordionTitle from './AccordionTitle';
import ClassGroupContent from './ClassGroupContent';
import _ from 'lodash';

const CFAccordion = ({ panels }) => {
  let tries =
    panels.map((panel, index) => {
      const title =
        (<Accordion.Title>
          <AccordionTitle fields={panel.title} />
         </Accordion.Title>);

      const content =
        (<Accordion.Content>
          <ClassGroupContent content={panel.content} />
         </Accordion.Content>);
      return [
        title,
        content,
      ];
    });
  if (!_.isEmpty(tries)) {
    tries = tries.reduce((a, b) => {
      return a.concat(b);
    });
  }

  return (
    <Accordion fluid styled className="cf-accordion" children={tries} />
  );
};

CFAccordion.propTypes = {
  panels: PropTypes.arrayOf(PropTypes.object),
};

export default CFAccordion;
