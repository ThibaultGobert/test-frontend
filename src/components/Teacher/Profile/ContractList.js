import React from 'react';
import { Message, Button } from 'semantic-ui-react';

const ContractList = (props) => {
  const { contracts } = props;
  const contractsArray = Object.values(contracts);
  return (
    <div>
      <Message
        header="Download hier je contract"
        content="Van zodra je contract klaar is, kan je het hier downloaden, tekenen en uploaden."
      />
      {contractsArray.map(contract => {
        return (
          <div className="Contract__NestedList">
            <span className="Contract__Info">{contract.period}</span>
            <div className="Contract__ListItem">
              <label>Location</label>
              <span>{contract.location}</span>
            </div>
            <div className="Contract__ListItem">
              <label>Start datum</label>
              <span>
                {contract.start_date}
              </span>
            </div>
            <div className="Contract__ListItem">
              <label>Eind datum</label>
              <span>
                {contract.end_date}
              </span>
            </div>
            <Button primary >Download</Button>
            <Button primary >Upload</Button>
          </div>
        );
      })}
    </div>
  );
};

export default ContractList;
