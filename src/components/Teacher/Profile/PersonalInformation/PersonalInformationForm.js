import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Segment, Form, Button } from 'semantic-ui-react';
import provinceOptions from './provinceOptions';
import { formatBirthdate } from '../../../../functions/formatBirthdate';

const PersonalInformationForm = ({ data, toggleEditing, updateTeacher, onChange }) => {
  return (
    <Segment className="PersonalInformation" basic clearing>
      <Form>
        <Form.Input
          name="teacher.email"
          label="Email"
          defaultValue={data.email}
          onChange={onChange}
        />
        <Form.Input name="teacher.cell" label="GSM" defaultValue={data.cell} onChange={onChange} />
        <Form.Input
          name="teacher.phone"
          label="Tel"
          defaultValue={data.phone}
          onChange={onChange}
        />
        <Form.Input
          name="teacher.birthdate"
          label="Geboortedatum"
          defaultValue={formatBirthdate(data.birthdate)}
          onChange={onChange}
        />
        <Form.Input
          name="teacher.registration_number"
          label="Rijksregisternr."
          defaultValue={data.registrationNumber}
          onChange={onChange}
        />
        <Form.Input
          name="teacher.profession"
          label="Beroep"
          defaultValue={data.profession}
          onChange={onChange}
        />
        {data.bankAccounts.map((bankAccount, i) => {
          if (!isEmpty(bankAccount)) {
            return (
              <Form.Input
                name={`teacher.bank_accounts[${i}].account_number`}
                label="Rekeningnummer"
                defaultValue={bankAccount.accountNumber}
                onChange={onChange}
              />
            );
          }
          return null;
        })}

        {!isEmpty(data.address) && (
          <div className="PersonalInformation__Address">
            <Form.Input
              name="teacher.address.street"
              label="Straat"
              defaultValue={data.address.street}
              onChange={onChange}
            />
            <Form.Input
              name="teacher.address.postal_code"
              label="Postcode"
              defaultValue={data.address.postalCode}
              onChange={onChange}
            />
            <Form.Input
              name="teacher.address.city"
              label="Stad"
              defaultValue={data.address.city}
              onChange={onChange}
            />
            <Form.Dropdown
              name="teacher.address.province"
              label="Provincie"
              search
              selection
              options={provinceOptions}
              onChange={onChange}
              defaultValue={data.address.province}
            />
          </div>
        )}
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
