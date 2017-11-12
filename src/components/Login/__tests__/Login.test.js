import React from 'react';
import { mount, mountToJson, toJson } from '../../../utils/test/mount';

import Login from '../Login';

describe('Login', () => {
  it('should render Login', () => {
    const component = mountToJson(<Login credentials={{}} />);

    expect(component).toMatchSnapshot();
  });

  it('should render Login form with impersonate', () => {
    const component = mountToJson(<Login credentials={{}} impersonate />);

    expect(component).toMatchSnapshot();
  });

  it('should render Login with plain text password', () => {
    const component = mountToJson(<Login credentials={{}} hidden={false} />);

    expect(component).toMatchSnapshot();
  });

  it('should show error when hasError', () => {
    const component = mountToJson(<Login credentials={{}} hasError error="We failed!" />);

    expect(component).toMatchSnapshot();
  });

  it('should show loading screen when loading', () => {
    const component = mountToJson(<Login credentials={{}} loading />);

    expect(component).toMatchSnapshot();
  });
});
