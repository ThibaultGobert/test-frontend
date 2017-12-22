import React from 'react';
import PropTypes from 'prop-types';
import { Label, Icon } from 'semantic-ui-react';
import _ from 'lodash';

function mapToTag(tag) {
  switch (tag) {
    case 'EXERCISE':
      return 'OEFENING';
    case 'CLASS':
      return 'KLASSIKAAL';
    case 'MANDATORY':
      return 'VERPLICHT';
    case 'INTRODUCTION':
      return 'INTRODUCTIE';
    case 'THEORY':
      return 'THEORIE';
    case 'OPTIONAL':
      return 'OPTIONEEL';
    case 'INDIVIDUALLY':
      return 'INDIVIDUEEL';
    default:
      return tag;
  }
}

const TagMetaList = ({ tags, viewType }) => {
  let isHome = _.includes(viewType, 'HOME');
  let isClass = _.includes(viewType, 'CLASS');
  let isProjection = _.includes(viewType, 'PROJECTION');

  let homeClassName = isHome ? 'active' : '';
  let classClassName = isClass ? 'active' : '';
  let projectionClassName = isProjection ? 'active' : '';

  return (
    <div className="meta-list">
      <ul>
        {tags.filter(tag => tag !== '').map(tag => {
          if (tag) {
            return (<li key={tag}>
              <Label>{mapToTag(tag)}</Label>
            </li>);
          }
        })}
      </ul>
      <span className="view-type">
        <Icon circular className={classClassName} name="group" />
        <Icon circular className={homeClassName} name="home" />
        <Icon circular className={projectionClassName} name="tv" />
      </span>
    </div>
  );
};

TagMetaList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  viewType: PropTypes.string.isRequired
};

export default TagMetaList;
