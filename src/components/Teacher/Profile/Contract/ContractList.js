import React from 'react';
import { Message, Button, Table, Popup, Label, Icon } from 'semantic-ui-react';
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
      <Message>
        <Message.Header>Download hier je contract</Message.Header>
        <Message.List>
          <Message.Item>Van zodra je contract klaar is, kan je het hier downloaden en getekend terug uploaden. File download wordt niet ondersteund door Safari.</Message.Item>
          <Message.Item>Klopt er iets niet in je contract(en) stuur een mail naar Kim (kim@codefever.be).</Message.Item>
        </Message.List>
      </Message>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Seizoen</Table.HeaderCell>
            <Table.HeaderCell>Locatie</Table.HeaderCell>
            <Table.HeaderCell>Rol leerkracht</Table.HeaderCell>
            <Table.HeaderCell>Statuut</Table.HeaderCell>
            <Table.HeaderCell>Download</Table.HeaderCell>
            <Table.HeaderCell>Upload</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {contractsArray.map(contract => {
            const pdf = getActivePDFFile(contract);
            let uploadButtonText;
            if (contract.signed) {
              uploadButtonText = 'Upload opnieuw';
            } else {
              uploadButtonText = 'Upload';
            }
            return (
              <Table.Row>
                <Table.Cell>
                  <Label ribbon>{contract.period}</Label>
                </Table.Cell>
                <Table.Cell>
                  {contract.location}
                </Table.Cell>
                <Table.Cell>
                  {upperFirst(contract.teacher_role)}
                </Table.Cell>
                <Table.Cell>
                  {upperFirst(contract.teacher_statute)}
                </Table.Cell>
                <Table.Cell>
                  <span className="ContractList__Item__Buttons__Download">
                    <a
                      id={contract.id}
                      href={generatePDFLink(contract)}
                      download={pdf.file_name}
                    >
                      <Popup
                        trigger={<Button primary>Download</Button>}
                        content={pdf.file_name}
                      />
                    </a>
                  </span>
                </Table.Cell>
                { !contract.signed_ok &&
                  <Table.Cell>
                    <span className="ContractList__Item__Buttons__Upload" >
                      <FileUpload
                        labelText=""
                        parentStyle={{ margin: 0 }}
                        callbackFunction={(file) => contractUploadCallback(file, contract.id)}
                        accept="application/pdf"
                        textFieldComponent={<input placeholder="Selecteer een file" type="text" />}
                        buttonComponent={
                          <Button primary>
                            {uploadButtonText}
                          </Button>
                        }
                      />
                    </span>
                  </Table.Cell>
                }
                { contract.signed_ok &&
                  <Table.Cell positive>
                    <Icon name="checkmark" />
                      In orde!
                  </Table.Cell>
                }
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ContractList;
