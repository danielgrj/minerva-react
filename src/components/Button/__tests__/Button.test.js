import React from 'react';
import { shallow } from 'enzyme';
import Button from '..';

describe('<Button />', () => {
  describe('render()', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
