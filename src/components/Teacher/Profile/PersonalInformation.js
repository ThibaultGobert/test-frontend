import React from 'react';
import { Segment, Button, Form, Label, Header } from 'semantic-ui-react';
import isEmpty from 'lodash/isEmpty';
import authApi from '../../../api/auth';
import Loader from '../../shared/Loader';

class PersonalInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
  }

  toggleEditing() {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  }

  resetPassword() {
    const { logOut } = this.props.actions;
    authApi.resetPassword().then(logOut);
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

    if (loading) {
      return <Loader active />;
    }

    return (
      <Segment className="PersonalInformation" basic>
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
            <span>{data.cell}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Tel</label>
            <span>{data.phone}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Rijksregisternr.</label>
            <span>{data.registrationNumber}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Statuut</label>
            <span>{data.statute}</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Beroep</label>
            <span>{data.profession}</span>
          </div>

          {!loading &&
            data.bankAccounts.map(bankAccount => {
              if (!isEmpty(bankAccount)) {
                return (
                  <div className="PersonalInformation__NestedList">
                    <span className="PersonalInformation__NestedList__Info">Bank account</span>
                    <div className="PersonalInformation__NestedListItem">
                      <label>Rekeningnummer</label>
                      <span>{bankAccount.accountNumber}</span>
                    </div>
                    <div className="PersonalInformation__NestedListItem">
                      <label>Startdatum</label>
                      <span>{bankAccount.startDate}</span>
                    </div>
                    <div className="PersonalInformation__NestedListItem">
                      <label>Einddatum</label>
                      <span>{bankAccount.endDate}</span>
                    </div>
                    {bankAccount.exemptFromVat && (
                      <div className="PersonalInformation__NestedListItem">
                        <Label as="a" basic>
                          NIET BTW VERPLICHT
                        </Label>
                      </div>
                    )}
                  </div>
                );
              }
              return null;
            })}

          {!isEmpty(data.address) && (
            <div className="PersonalInformation__NestedList">
              <span className="PersonalInformation__NestedList__Info">Adres</span>
              <div className="PersonalInformation__NestedListItem">
                <label>Straat</label>
                <span>{data.address.street}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Plaats</label>
                <span>
                  {data.address.postalcode} {data.address.city}
                </span>
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
                <label>Straat</label>
                <span>{data.invoiceAddress.street}</span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Plaats</label>
                <span>
                  {data.invoiceAddress.postalcode} {data.invoiceAddress.city}
                </span>
              </div>
              <div className="PersonalInformation__NestedListItem">
                <label>Provincie</label>
                <span>{data.invoiceAddress.province}</span>
              </div>
            </div>
          )}
          <Segment className="PersonalInformation__ResetPassword" clearing basic>
            <Header as="h3" className="PersonalInformation__ResetPassword__Header">
              Reset paswoord
              <Header.Subheader>
                {' '}
                Er wordt een email verstuurd met daarin instructies <br /> voor het resetten van uw
                paswoord. Je wordt onmiddellijk uitgelogd.
              </Header.Subheader>
            </Header>

            <Button floated="right" onClick={this.resetPassword}>
              Reset paswoord
            </Button>
          </Segment>
        </div>
      </Segment>
    );
  }
}

export default PersonalInformation;
