import React from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';

const PersonalInformationForm = ({ data, loading, toggleEditing }) => {
  return (
    <Segment className="PersonalInformation" basic clearing loading={loading}>
      <Form>
        <Form.Input label="Voornaam" value={data.firstName} />
        <Form.Input label="Familienaam" value="De Gheselle" />
        <Form.Input label="Username" value="simondegheselle" />
        <Form.Input label="Geboortedatum" value="07/09/1995" />
        <Form.Input label="Email" value="simon@codefever.be" />
        <Form.Input label="Straat en huisnummer" value="Nanofstraat 85" />
        <Form.Input label="Stad" value="Diepenbeek" />
        <Form.Input label="Postcode" value="3568" />
        <Form.Input
          label="Facturatie adres"
          value="Nanofstraat 85 3590 Diepenbeek Limburg, Belgium"
        />
        <Form.Input label="GSM" value="+32 476 28 22 06" />
        <Form.Input label="Rijksregisternr." value="93.11.05-153.78" />
        <Form.Input label="Rekeningnummer" value="BE33 0014 6234 2968" />
        <Form.Group className="PersonalInformation__Buttons">
          <Form.Field control={Button} color="red" onClick={toggleEditing}>
            Cancel
          </Form.Field>
          <Form.Field control={Button} primary onClick={console.log('saving')}>
            Opslaan
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
};

export default PersonalInformationForm;
