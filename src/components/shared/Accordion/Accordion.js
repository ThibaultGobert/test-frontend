import React from 'react';
import { Accordion as SemanticAccordion } from 'semantic-ui-react';
import _ from 'lodash';
import classNames from 'classnames';
import AccordionTitle from './AccordionTitle';
import AccordionHeader from './AccordionHeader';
import './Accordion.css';

const Accordion = ({ panels, headerFields, renderContent, className }) => {
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
    <div className={classNames('Accordion', className)}>
      <AccordionHeader fields={headerFields} />
      <SemanticAccordion fluid styled>
        {elements}
      </SemanticAccordion>
    </div>
  );
};

export default Accordion;
