import React from 'react';
import { Message, Button } from 'semantic-ui-react';
// import FileUpload from 'react-file-input-previews-base64';
import values from 'lodash/values';
import generatePDFLink from '../../../functions/generatePDFLink';

const ContractList = ({ contracts }) => {
  const contractsArray = values(contracts);
  return (
    <div>
      <Message
        header="Download hier je contract"
        content="Van zodra je contract klaar is, kan je het hier downloaden. Binnenkort kan je het hier ook terug upload. Download werkt niet op Safari!"
      />
      {contractsArray.map(contract => {
        return (
          <div className="Contract__NestedList">
            <span className="Contract__Info">{contract.period}</span>
            <div className="Contract__ListItem">
              <label>Contract</label>
              { contract.unsigned_pdf != null &&
                <span>{contract.unsigned_pdf.file_name}</span>
              }
              { contract.signed_pdf != null &&
                <span>{contract.signed_pdf.file_name}</span>
              }
            </div>
            <div className="Contract__ListItem">
              {contract.unsigned_pdf != null &&
              <a
                id={contract.id}
                href={generatePDFLink(contract)}
                download={contract.unsigned_pdf.file_name}
              >
                <Button primary>Download</Button>
              </a>
              }
              {contract.signed_pdf != null &&
              <a
                id={contract.id}
                href={generatePDFLink(contract)}
                download={contract.signed_pdf.file_name}
              >
                <Button primary>Download</Button>
              </a>
              }
              {/* //TODO: Fix upload functionality; Till then disabled
              <FileUpload
                labelText="Select file"
                labelStyle={{ fontSize: 14 }}
                callbackFunction={(file) => { contractsApi.postContract(file, contract.id); }}
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
