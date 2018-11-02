import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotFoundMessage = styled.h1`
  color: red;
`;

const EmptyComponent = ({ componentName, children }) => {
  return (
    <div>
      <NotFoundMessage>
        {
          componentName
            ? `${componentName} not found.`
            : `Component type is missing`
        }
      </NotFoundMessage>
      { children }
    </div>
  );
};

EmptyComponent.propTypes = {
  componentName: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

export default EmptyComponent;