import React from 'react';
import styled from 'styled-components';

const StyledLocation = styled.div`
  font-family: 'Montserrat';
  font-size: 12px;
  color: #8298B9;
  letter-spacing: 0;
`;

const Location = (props) => {
  return (
    <StyledLocation>New York, USA</StyledLocation>
  );
}

export default Location;