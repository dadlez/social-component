import React from 'react';
import styled from 'styled-components';

const StyledCaption = styled.span`
  display: block;
  font-family: 'Montserrat';
  font-size: 10px;
  color: #343E00;
  text-transform: capitalize;
`;

const Caption = (props) => {
  return (
    <StyledCaption>{props.children}</StyledCaption>
  )
}

export default Caption;
