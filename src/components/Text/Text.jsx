import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.p`
  ${props => props.css ? props.css : null}
`;

const Text = ({ content, css }) => {
  return (
    <Wrapper css={css}>
      {content ? content : 'Content is missing'}
    </Wrapper>
  );
};

Text.proptypes = {
  content: PropTypes.string.isRequired,
  css: PropTypes.object
}

export default Text;