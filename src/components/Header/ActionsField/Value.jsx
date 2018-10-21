import React from 'react';
import styled from 'styled-components';

const StyledValue = styled.span`
  display: block;
  font-family: 'Montserrat';
  font-size: 24px;
  color: #FFA640;
`;

const Value = (props) => {
  return (
    <StyledValue>123</StyledValue>
  );
}

export default Value;