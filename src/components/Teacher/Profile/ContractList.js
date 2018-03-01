import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import values from 'lodash/values';
import generatePDFLink from '../../../functions/generatePDFLink';
import getActivePDFFile from '../../../functions/getActivePDFFile';
import Loader from '../../shared/Loader';

const ContractList = ({ contracts }) => {
  const contractsArray = values(contracts.data);
  const { loading } = contracts;
  if (loading) {
    return <Loader active />;
  }

  return (
    <div className="ContractList">
      <Message
        header="Download hier je contract"
        content="Van zodra je contract klaar is, kan je het hier downloaden. Binnenkort kan je het hier ook terug uploaden. Download werkt niet op Safari!"
      />
      {contractsArray.map(contract => {
        const pdf = getActivePDFFile(contract);
        return (
          <div className="ContractList__Item">
            <span className="ContractList__Item__Period">{contract.period}</span>
            <div className="ContractList__Item__Name">
              <label>Contract</label>
              <span>{pdf.file_name}</span>
            </div>
            <div className="ContractList__Item__Buttons">
              <a
                id={contract.id}
                href={generatePDFLink(contract)}
                download={pdf.file_name}
              >
                <Button primary>Download</Button>
              </a>
              {/* //TODO: Fix upload functionality; Till then disabled
              <FileUpload
                labelText="Select file"
                labelStyle={{ fontSize: 14 }}
                callbackFunction={(file) => { contractsApi.postContract(file[0], contract.id); }}
                accept="application/pdf"
              /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContractList;
