import React from 'react';
import { Accordion as SemanticAccordion } from 'semantic-ui-react';
import _ from 'lodash';
import AccordionTitle from './AccordionTitle';
import ClassGroupContent from './ClassGroupContent';

const Accordion = ({ panels }) => {
  let tries = panels.map((panel) => {
    const title = (
      <SemanticAccordion.Title>
        <AccordionTitle fields={panel.title} />
      </SemanticAccordion.Title>
    );

    const content = (
      <SemanticAccordion.Content>
        <ClassGroupContent content={panel.content} />
      </SemanticAccordion.Content>
    );

    return [title, content];
  });

  if (!_.isEmpty(tries)) {
    tries = tries.reduce((a, b) => {
      return a.concat(b);
    });
  }

  return <SemanticAccordion fluid styled className="cf-accordion" >{tries}</SemanticAccordion>;
};

export default Accordion;
