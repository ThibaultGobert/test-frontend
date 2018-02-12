import React from 'react';
import { Grid } from 'semantic-ui-react';

const ContactList = ({ contacts }) => {
  return (
    <Grid>
      {contacts.map(contact => {
        return (
          <Grid.Row>
            <Grid.Column width={5}>{`${contact.firstName} ${contact.lastName}`}</Grid.Column>
            <Grid.Column width={7}>{contact.email}</Grid.Column>
            <Grid.Column width={4}>{contact.cell}</Grid.Column>
          </Grid.Row>
        );
      })}
    </Grid>
  );
};

export default ContactList;
