import React from 'react';
import isEmpty from 'lodash/isEmpty';
import { Segment, Header, Button, Message } from 'semantic-ui-react';
import { formatBirthdate } from '../../../../functions/formatBirthdate';

const PersonalInformationView = ({ data, toggleEditing, resetPassword }) => {
  return (
    <Segment className="PersonalInformation" basic>
      <Message header="Jouw profiel" content="Bekijk hier jouw persoonlijke gegevens, hou deze gegevens up-to-date" />
      <Button onClick={toggleEditing} primary floated="right">
        Wijzig
      </Button>
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
          <label>Geboortedatum</label>
          <span>{formatBirthdate(data.birthdate)}</span>
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

        {data.bankAccounts.map(bankAccount => {
          if (!isEmpty(bankAccount)) {
            return (
              <div className="PersonalInformation__ListItem">
                <label>Rekeningnummer</label>
                <span>{bankAccount.accountNumber}</span>
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
                {data.address.postalCode} {data.address.city}
              </span>
            </div>
            <div className="PersonalInformation__NestedListItem">
              <label>Provincie</label>
              <span>{data.address.province}</span>
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

          <Button floated="right" onClick={resetPassword}>
            Reset paswoord
          </Button>
        </Segment>
      </div>
    </Segment>
  );
};

export default PersonalInformationView;
