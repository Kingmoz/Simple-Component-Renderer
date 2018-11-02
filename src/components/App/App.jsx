import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { EmptyComponent } from '../';

import { loadAllComponentFromContent } from '../../utils/ContentParser';

const Wrapper = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  margin: auto;
`;

class App extends React.Component {
  static propTypes = {
    content: PropTypes.object,
  }

  state = {
    components: null
  }

  componentDidMount() {
    const { content } = this.props;
    this.getComponentAndSetState(content);
  }

  async getComponentAndSetState(content) {
    const components = await loadAllComponentFromContent(content);

    this.setState({ components });
  }

  render() {
    const { content } = this.props;
    const { components } = this.state;

    return (
      <Wrapper>
        { components && this.renderContent(content, components) }
      </Wrapper>
    );
  }

  renderContent(contents, components) {
    const { css, content, type, children, id } = contents;
    if (!type) {
      return null;
    }

    const Component = components[type] || EmptyComponent;
    return (
      <Component css={css} content={content} key={id} componentName={type}>
        {
          children && children.map(
            child => this.renderContent(child, components)
          )
        }
      </Component>
    );
  }
}

export default App;