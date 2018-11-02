import React from 'react';
import { mount } from 'enzyme';
import ReactDOM from 'react-dom';

import App from './App';

function setup() {
  const props = {
    content: {}
  };

  return mount(<App {...props} />);
}

describe('App', () => {
  const wrapper = setup();

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render properly', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

})

