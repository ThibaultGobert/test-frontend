import React from 'react';
import PropTypes from 'prop-types';
import {Grid} from 'semantic-ui-react';

const ContactList = ({contacts}) => {
  return (<Grid>
    {
      contacts.map(contact => {
        let gridRowKey = 'contact-row-' + contact.firstname;
        return (
          <Grid.Row key={gridRowKey}>
            <Grid.Column width={5}>
              {contact.firstname + ' ' + contact.lastname}
            </Grid.Column>
            <Grid.Column width={7}>
              {contact.email}
            </Grid.Column>
            <Grid.Column width={4}>
              {contact.cellphone}
            </Grid.Column>
          </Grid.Row>
        );
      })
    }
  </Grid>);
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default ContactList;
