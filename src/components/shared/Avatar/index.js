import React from 'react';
import { Image } from 'semantic-ui-react';
import classNames from '../../../utils/classNames';

import './Avatar.css';

const defaultAvatars = {
  male: 'http://content.codefever.be/files/2.0/Avatars/boy.png',
  female: 'http://content.codefever.be/files/2.0/Avatars/girl.png',
};

const Avatar = ({ url, size = 'tiny', className, gender = 'male' }) => {
  const src = url || defaultAvatars[gender];

  return <Image src={src} size={size} className={classNames('Avatar', 'middle', 'aligned', className)} />;
};

export default Avatar;
