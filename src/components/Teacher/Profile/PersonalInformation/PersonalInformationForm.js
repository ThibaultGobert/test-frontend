import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Segment, Form, Button } from 'semantic-ui-react';

const PersonalInformationForm = ({ data, toggleEditing, updateTeacher, onChange }) => {
  return (
    <Segment className="PersonalInformation" basic clearing>
      <Form>
        <Form.Input name="email" label="Email" defaultValue={data.email} onChange={onChange} />
        <Form.Input name="cell" label="GSM" defaultValue={data.cell} onChange={onChange} />
        <Form.Input name="phone" label="Tel" defaultValue={data.phone} onChange={onChange} />
        <Form.Input label="Rijksregisternr." defaultValue={data.registrationNumber} onChange={onChange} />
        <Form.Input label="Beroep" defaultValue={data.profession} onChange={onChange} />
        {data.bankAccounts.map(bankAccount => {
          if (!isEmpty(bankAccount)) {
            return <Form.Input label="Rekeningnummer" defaultValue={bankAccount.accountNumber} onChange={onChange} />;
          }
          return null;
        })}

        {!isEmpty(data.address) &&
          <div className="PersonalInformation__Address">
            <Form.Input label="Straat" defaultValue={data.address.street} onChange={onChange} />
            <Form.Input label="Postcode" defaultValue={data.address.postalCode} onChange={onChange} />
            <Form.Input label="Stad" defaultValue={data.address.city} onChange={onChange} />
            <Form.Input label="Provincie" defaultValue={data.address.province} onChange={onChange} />
          </div>
        }
        <Form.Group className="PersonalInformation__Buttons">
          <Form.Field control={Button} color="red" onClick={toggleEditing}>
            Cancel
          </Form.Field>
          <Form.Field control={Button} primary onClick={updateTeacher}>
            Opslaan
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
};

export default PersonalInformationForm;
