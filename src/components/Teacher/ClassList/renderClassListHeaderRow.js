import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Table } from 'semantic-ui-react';

export default (columns, onClick, classNameGenerator) => {
  return (
    <Table.Row>
      {columns.map((column) => {
        if (!isEmpty(column.display)) {
          return (
            <Table.HeaderCell
              onClick={() => onClick(column)}
              className={classNameGenerator(column.key)}
            >
              {column.display}
            </Table.HeaderCell>
          );
        }
        return <Table.HeaderCell className="hide-border" />;
      })}
    </Table.Row>
  );
};
