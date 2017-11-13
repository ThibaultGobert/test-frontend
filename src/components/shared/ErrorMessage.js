import React from 'react';
import {Message} from 'semantic-ui-react';

const ErrorMessage = ({header, message}) => {
  const displayMessage = message instanceof Error
    ? message.message
    : message;

  return (
    <Message negative>
      <Message.Header>{header? header: ""}</Message.Header>
      <p>{displayMessage ? displayMessage : ""}</p>
    </Message>
  );
};

ErrorMessage.propTypes = {
};

export default ErrorMessage;
