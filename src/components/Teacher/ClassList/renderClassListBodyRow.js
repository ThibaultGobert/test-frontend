import React from 'react';
import { Table, Image } from 'semantic-ui-react';

export default (data, index) => {
  const highlight = data.highlight ? 'highlight' : '';

  return (
    <Table.Row key={index} className={highlight}>
      {this.columns.map(({ key, defaults, accessor, decorator }, idx) => {
        if (!data) return <Table.Cell />;
        let value = accessor ? accessor(data, key) : data[key] || defaults;
        if (decorator) value = decorator(value);
        if (idx === 0) {
          return (
            <Table.Cell className="avatar-lock-up">
              <Image src={value} size="tiny" className="avatar middle aligned" />
            </Table.Cell>
          );
        }

        return <Table.Cell><div className="link" onClick={this.props.showModal}>{value}</div></Table.Cell>;
      })}
    </Table.Row>
  );
};
