import React from 'react';
import { Button, Message } from 'semantic-ui-react';
import DataTable from '../../shared/DataTable';

const ClassList = ({ redirectToClassGroups, course, data, columns }) => {
  return (
    <div className="class-list">
      <Message
        header="Opmerkingen terug te vinden bij aanwezigheidslijst"
        content="De opmerkingen vind je voorlopig terug bij de feedback & aanwezigheidslijst."
      />
      <Button
        labelPosition="left"
        icon="left chevron"
        content="Terug"
        onClick={redirectToClassGroups}
      />
      <div className="class-list-header">
        <h1>Klaslijst {course ? course.name : ''} </h1>
        <Button className="download-classlist" disabled>
          Download klaslijst
        </Button>
      </div>
      <div>
        <DataTable data={data} columns={columns} />
        <div className="legende">
          <div className="legende-trial">
            <span className="symbol trial" />
            <span className="explanation">Proefles</span>
          </div>
        </div>
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default ClassList;
