import React from 'react';
import { Accordion, Table, Label, Grid } from 'semantic-ui-react';
import AccordionTitle from "./AccordionTitle";
import ClassGroupContent from './ClassGroupContent';
import _ from 'lodash';

const Accordeon = ({panels}) => {
  let tries =
    panels.map((panel, index) => {
      let title =
        <Accordion.Title>
          <AccordionTitle fields={panel.title}/>
        </Accordion.Title>

      let content =
        <Accordion.Content>
          <ClassGroupContent content={panel.content}/>
        </Accordion.Content>
      return [
        title,
        content
      ];
    });
    if (!_.isEmpty(tries)) {
      tries = tries.reduce(function(a, b) {
        return a.concat(b);
      });
    }

  return (
    <Accordion fluid styled className="cf-accordion" children={tries} />
  );
};

export default Accordeon;