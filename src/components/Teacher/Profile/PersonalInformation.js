import React from 'react';
import { Segment, Button } from 'semantic-ui-react';

const PersonalInformation = () => {
  return (
    <Segment className="PersonalInformation" basic clearing>
      <Button floated="right">Wijzig</Button>
      <div className="PersonalInformation__List">
        <div className="PersonalInformation__ListItem">
          <label>Naam</label>
          <span>Simon De Gheselle</span>
        </div>
        <div className="PersonalInformation__ListItem">
          <label>Username</label>
          <span>simondegheselle</span>
        </div>
        <div className="PersonalInformation__ListItem">
          <label>Adres</label>
          <span>Nanofstraat 85 3590 Diepenbeek Limburg, Belgium </span>
        </div>
        <div className="PersonalInformation__ListItem">
          <label>Facturatie adres</label>
          <span>Nanofstraat 85 3590 Diepenbeek Limburg, Belgium </span>
        </div>
        <div className="PersonalInformation__ListItem">
          <label>GSM</label>
          <span>+32 476 28 22 06</span>
        </div>
        <div className="PersonalInformation__ListItem">
          <label>Rijksregisternr.</label>
          <span>93.11.05-153.78</span>
        </div>
        <div className="PersonalInformation__ListItem">
          <label>Startdatum huidig contract</label>
          <span>25 Nov 17</span>
        </div>
        <div className="PersonalInformation__ListItem">
          <label>Rekeningnummer</label>
          <span>BE33 0014 6234 2968</span>
        </div>
      </div>
    </Segment>
  );
};

export default PersonalInformation;
