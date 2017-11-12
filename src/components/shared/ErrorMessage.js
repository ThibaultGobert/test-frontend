import React from 'react';
import {Message} from 'semantic-ui-react';

const ErrorMessage = ({header, message}) => {
  return (
    <Message negative>
      <Message.Header>{header? header: ""}</Message.Header>
      <p>{message? message: ""}</p>
    </Message>
  );
};

ErrorMessage.propTypes = {
};

export default ErrorMessage;
