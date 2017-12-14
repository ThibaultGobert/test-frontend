import React from 'react';
import { Accordion as SemanticAccordion } from 'semantic-ui-react';
import _ from 'lodash';
import AccordionTitle from './AccordionTitle';
import AccordionHeader from './AccordionHeader';
import './Accordion.css';

const Accordion = ({ panels, headerFields, renderContent }) => {
  let elements = panels.map(panel => {
    const title = (
      <SemanticAccordion.Title>
        <AccordionTitle fields={panel.title} />
      </SemanticAccordion.Title>
    );

    const content = (
      <SemanticAccordion.Content>
        {renderContent(panel.content)}
      </SemanticAccordion.Content>
    );

    return [title, content];
  });

  if (!_.isEmpty(elements)) {
    elements = elements.reduce((a, b) => {
      return a.concat(b);
    });
  }

  return (
    <div className="Accordion">
      <AccordionHeader fields={headerFields} />
      <SemanticAccordion fluid styled>
        {elements}
      </SemanticAccordion>
    </div>
  );
};

export default Accordion;
