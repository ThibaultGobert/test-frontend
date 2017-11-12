import React from 'react';
import {Label} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import * as slideTypes from '../../constants/slideTypes';

const SlideTypeLabel = ({slideType}) => {
  let labelText;
  let iconName;
  switch (slideType) {
    default: case slideTypes.HOME:
      labelText = "Thuis";
      iconName = "home";
      break;
    case slideTypes.CLASS:
      labelText = "Klas";
      iconName = "group";
      break;
    case slideTypes.INFO:
      labelText = "Info";
      iconName = "info";
      break;
    case slideTypes.PROJECTION:
      labelText = "Projectie";
      iconName = "tv";
      break;
  }
  return (
    <Label className="slide-type-label" content={labelText} icon={iconName}/>
  );
};

SlideTypeLabel.propTypes = {
  slideType: PropTypes.string.isRequired
};

export default SlideTypeLabel;
