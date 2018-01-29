import React from 'react';
import { Segment, Button, Form } from 'semantic-ui-react';

class PersonalInformation extends React.Component {
  constructor() {
    super();
    this.state = {
      isEditing: false,
    };

    this.toggleEditing = this.toggleEditing.bind(this);
  }

  toggleEditing() {
    const { isEditing } = this.state;
    this.setState({ isEditing: !isEditing });
  }

  render() {
    const { isEditing } = this.state;
    if (isEditing) {
      return (
        <Segment className="PersonalInformation" basic clearing>
          <Form>
            <Form.Input label="Voornaam" value="Simon" />
            <Form.Input label="Familienaam" value="De Gheselle" />
            <Form.Input label="Username" value="simondegheselle" />
            <Form.Input label="Geboortedatum" value="07/09/1995" />
            <Form.Input label="Email" value="simon@codefever.be" />
            <Form.Input label="Straat en huisnummer" value="Nanofstraat 85" />
            <Form.Input label="Stad" value="Diepenbeek" />
            <Form.Input label="Postcode" value="3568" />
            <Form.Input label="Facturatie adres" value="Nanofstraat 85 3590 Diepenbeek Limburg, Belgium" />
            <Form.Input label="GSM" value="+32 476 28 22 06" />
            <Form.Input label="Rijksregisternr." value="93.11.05-153.78" />
            <Form.Input label="Rekeningnummer" value="BE33 0014 6234 2968" />
            <Form.Group className="PersonalInformation__Buttons">
              <Form.Field control={Button} color="red" onClick={this.toggleEditing}>Cancel</Form.Field>
              <Form.Field control={Button} primary onClick={console.log('saving')}>Opslaan</Form.Field>
            </Form.Group>
          </Form>
        </Segment>
      );
    }
    return (
      <Segment className="PersonalInformation" basic clearing>
        <Button floated="right" onClick={this.toggleEditing}>
          Wijzig
        </Button>
        <div className="PersonalInformation__List">
          <div className="PersonalInformation__ListItem">
            <label>Voornaam</label>
            <span>Simon</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Familienaam</label>
            <span>De Gheselle</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Username</label>
            <span>simondegheselle</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Email</label>
            <span>simon@codefever.be</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Straat en straatnummer</label>
            <span>Nanofstraat 85</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Stad</label>
            <span>Diepenbeek</span>
          </div>
          <div className="PersonalInformation__ListItem">
            <label>Postcode</label>
            <span>3587</span>
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
  }
}

export default PersonalInformation;
