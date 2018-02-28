import React from 'react';
import { Message, Button } from 'semantic-ui-react';
import FileUpload from 'react-file-input-previews-base64';
import values from 'lodash/values';
import generatePDFLink from '../../../functions/generatePDFLink';
import contractsApi from '../../../api/contracts';

const ContractList = ({ contracts }) => {
  const contractsArray = values(contracts);
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
              <label>Contract</label>
              { contract.unsigned_pdf != null &&
                <span>{contract.unsigned_pdf.file_name}</span>
              }
              { contract.signed_pdf != null &&
                <span>{contract.signed_pdf.file_name}</span>
              }
            {/* <div className="Contract__ListItem">
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
            </div> */}
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
            {/* <FileUpload
              labelText="Select file"
              labelStyle={{ fontSize: 14 }}
              callbackFunction={(file) => { contractsApi.postContract(file, contract.id); }}
              accept="application/pdf"
            /> */}
          </div>
        );
      })}
    </div>
  );
};

export default ContractList;
