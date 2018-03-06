import React from 'react';
import { Message, Button, Grid } from 'semantic-ui-react';
import { values, upperFirst } from 'lodash';
import FileUpload from 'react-file-input-previews-base64';
import generatePDFLink from '../../../../functions/generatePDFLink';
import getActivePDFFile from '../../../../functions/getActivePDFFile';
import Loader from '../../../shared/Loader';
import contractUploadCallback from './contractUploadCallback';

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
        content="Van zodra je contract klaar is, kan je het hier downloaden en getekend terug uploaden. File download wordt niet ondersteund door Safari."
      />
      {contractsArray.map(contract => {
        const pdf = getActivePDFFile(contract);
        return (
          <div className="ContractList__Item">
            <span className="ContractList__Item__Period">{contract.period}</span>
            <div className="ContractList__Item__NestedItem">
              <label>Locatie</label>
              <span>{contract.location}</span>
            </div>
            <div className="ContractList__Item__NestedItem">
              <label>Rol leerkracht</label>
              <span>{upperFirst(contract.teacher_role)}</span>
            </div>
            <div className="ContractList__Item__NestedItem">
              <label>Statuut</label>
              <span>{upperFirst(contract.teacher_statute)}</span>
            </div>
            <div className="ContractList__Item__NestedItem">
              <label>Contract</label>
              <span>{pdf.file_name}</span>
            </div>
            <div className="ContractList__Item__Buttons">
              <Grid columns={2}>
                <Grid.Column className="ContractList__Item__Buttons__Download">
                  <a
                    id={contract.id}
                    href={generatePDFLink(contract)}
                    download={pdf.file_name}
                  >
                    <Button primary>Download</Button>
                  </a>
                </Grid.Column>
                <Grid.Column className="ContractList__Item__Buttons__Upload" >
                  { !contract.signed_ok &&
                    <FileUpload
                      labelText=""
                      parentStyle={{ margin: 0 }}
                      callbackFunction={(file) => contractUploadCallback(file, contract.id)}
                      accept="application/pdf"
                      textFieldComponent={<input placeholder="Selecteer een file" type="text" />}
                      buttonComponent={<Button primary>Upload</Button>}
                    />
                  }
                </Grid.Column>
              </Grid>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContractList;
