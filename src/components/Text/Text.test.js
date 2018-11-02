import React from 'react';
import { mount } from 'enzyme';

import Text from './Text';

function setup() {
  const props = {
    content: 'message'
  };

  return mount(<Text {...props} />);
}

describe('Text', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render content correctly', () => {
    expect(wrapper.text()).toEqual('message');
  });

});