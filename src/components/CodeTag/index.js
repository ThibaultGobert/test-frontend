import React from 'react';
import classNames from '../../utils/classNames';

import './CodeTag.css';

const CodeTag = ({ className, text, close }) => {
  return (
    <div className={classNames('CodeTag', className)}>
      &lt;{text}
      {close && '?'}&gt;
    </div>
  );
};

CodeTag.defaultProps = {
  close: false
};

export default CodeTag;
