import React from 'react';
import PropTypes from 'prop-types';
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
  header: PropTypes.string,
  message: PropTypes.string
};

export default ErrorMessage;
