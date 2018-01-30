import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Segment, Button, Form } from 'semantic-ui-react';

class PersonalInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false
    };

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing() {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  }

  render() {
    const { isEditing } = this.state;
    const { data, loading } = this.props.personalInformation;
    if (isEditing) {
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
              <Form.Field control={Button} color="red" onClick={this.toggleEditing}>
                Cancel
              </Form.Field>
              <Form.Field control={Button} primary onClick={console.log('saving')}>
                Opslaan
              </Form.Field>
            </Form.Group>
          </Form>
        </Segment>
      );
    }

    return (
      <Segment className="PersonalInformation" basic loading={loading}>
        <div className="PersonalInformation__List">
          <div className="PersonalInformation__ListItem">
            <label>Voornaam</label>
            <span>{data.firstName}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Familienaam</label>
            <span>{data.lastName}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Email</label>
            <span>{data.email}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>GSM</label>
            <span>{data.phone}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Rijksregisternr.</label>
            <span>{data.rrnr}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Statuut</label>
            <span>{data.statute}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Beroep</label>
            <span>{data.profession}</span>
          </div>

          {!isEmpty(data.bankAccount) && (
            <div className="PersonalInformation__NestedList">
              <span className="PersonalInformation__NestedList__Info">Bank account</span>
              <div className="PersonalInformation__NestedListItem">
                <label>Rekeningnummer</label>
                <span>{data.bankAccount.accountNumber}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>geen VAT</label>
                <span>{data.bankAccount.exemptVat}</span>
              </div>
            </div>
          )}

          {!isEmpty(data.address) && (
            <div className="PersonalInformation__NestedList">
              <span className="PersonalInformation__NestedList__Info">Adres</span>
              <div className="PersonalInformation__NestedListItem">
                <label>Straat en straatnummer</label>
                <span>{data.address.street}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Stad</label>
                <span>{data.address.city}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Postcode</label>
                <span>{data.address.postalcode}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Provincie</label>
                <span>{data.address.province}</span>
              </div>
            </div>
          )}

          {!isEmpty(data.invoiceAddress) && (
            <div className="PersonalInformation__NestedList">
              <span className="PersonalInformation__NestedList__Info">Facturatieadres</span>
              <div className="PersonalInformation__NestedListItem">
                <label>Straat en straatnummer</label>
                <span>{data.invoiceAddress.street}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Stad</label>
                <span>{data.invoiceAddress.city}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Postcode</label>
                <span>{data.invoiceAddress.postalcode}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Provincie</label>
                <span>{data.invoiceAddress.province}</span>
              </div>
            </div>
          )}
        </div>
      </Segment>
    );
  }
}

export default PersonalInformation;
