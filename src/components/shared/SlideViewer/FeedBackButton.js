import React from 'react';
import { Button } from 'semantic-ui-react';
import * as roles from '../../../constants/roles';

const FeedBackButton = ({ data, generateUrl, text }) => {
  return (
    <a target="_blank" href={generateUrl(data)}>
      <Button primary size="mini">
        { text }
      </Button>
    </a>
  );
};

export default FeedBackButton;
