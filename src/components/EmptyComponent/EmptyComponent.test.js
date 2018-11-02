import React from 'react';
import { mount } from 'enzyme';

import EmptyComponent from './EmptyComponent';

function setup() {
  const props = {
    componentName: 'Box1'
  };

  return mount(<EmptyComponent {...props} />);
}

describe('EmptyComponent', () => {
  const wrapper = setup();

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render componentName correctly', () => {
    expect(wrapper.text()).toEqual('Box1 not found.');
  });

});