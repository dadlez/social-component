import React from 'react';
import styled from 'styled-components';

const StyledCaption = styled.span`
  display: block;
  font-family: 'Montserrat';
  font-size: 10px;
  color: #343E00;
`;

const Caption = (props) => {
  return (
    <StyledCaption>Likes</StyledCaption>
  )
}

export default Caption;
