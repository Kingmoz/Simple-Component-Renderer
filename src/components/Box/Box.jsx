import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  padding: 15px;

  background: #fff;
  border: 3px solid #fff;
  border-radius: 15px;

  ${props => props.css ? props.css : null}
`;

const ContentWrapper = styled.div`
  padding: 0 15px;
`;

const Box = ({ css, content, children }) => {
  return (
    <Wrapper css={css}>
      { content && <h4>{ content }</h4> }
      <ContentWrapper>
        { children }
      </ContentWrapper>
    </Wrapper>
  );
};

Box.propTypes = {
  css: PropTypes.object,
  content: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default Box;