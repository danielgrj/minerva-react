import React from 'react';
import { shallow } from 'enzyme';
import { MockedProvider } from '@apollo/client/testing';

import Login from '..';

describe('<Login />', () => {
  describe('render()', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(
        <MockedProvider>
          <Login />
        </MockedProvider>
      );
      expect(wrapper).toMatchSnapshot();
    });
  });
});
