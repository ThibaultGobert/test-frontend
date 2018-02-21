import React from 'react';
import { Table, Image } from 'semantic-ui-react';
import columns from './ClassListColumns';
import Avatar from '../../shared/Avatar';

export default (data, index, showModal) => {
  console.log(data);
  const highlight = data.highlight ? 'highlight' : '';
  return (
    <Table.Row key={index} className={highlight}>
      {columns.map(({ key, defaults, accessor, decorator }, idx) => {
        if (!data) return <Table.Cell />;
        let value = accessor ? accessor(data, key) : data[key] || defaults;
        if (decorator) value = decorator(value);
        if (idx === 0) {
          return (
            <Table.Cell singleLine>
              <div className="ClassList__User">
                <Avatar
                  url={data.avatarurlmedium}
                  gender={data.gender}
                  className="ClassList__Avatar"
                />
                <div className="ClassList__User__Info">
                  <div
                    className="ClassList__User__Name link"
                    onClick={() => {
                      showModal(data.id);
                    }}
                  >
                    {data.firstname} {data.lastname}
                  </div>

                  <div className="ClassList__User__Extra">{data.grade}</div>
                </div>
              </div>
            </Table.Cell>
          );
        }

        return (
          <Table.Cell>
            <div onClick={showModal}>{value}</div>
          </Table.Cell>
        );
      })}
    </Table.Row>
  );
};
