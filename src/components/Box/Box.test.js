import React from 'react';
import { mount } from 'enzyme';

import Box from './Box';

function setup() {
  const props = {
    content: 'message'
  };

  return mount(<Box {...props} />);
}

describe('Box', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render content correctly', () => {
    expect(wrapper.text()).toEqual('message');
  });

});