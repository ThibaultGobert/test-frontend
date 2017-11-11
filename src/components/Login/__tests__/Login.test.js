import React from 'react';
import { mount, mountToJson, toJson } from '../../../utils/test/mount';

import Login from '../Login';

describe('Login', () => {
  it('should render Login', () => {
    const component = mountToJson(<Login credentials={{}} />);

    expect(component).toMatchSnapshot();
  });
});
