import React from 'react';
import styled from 'styled-components';

const StyledFollow = styled.button`
  background: #FFA640;
  border: none;
  border-radius: 100px;
  margin: 0 20px;
  padding: 14px;
  font-family: 'Montserrat';
  font-size: 14px;
  font-weight: bolder;
  color: #FFFFFF;
  letter-spacing: 4.2px;
  text-transform: uppercase;
`;

const FollowButton = (props) => {
  return (
    <StyledFollow>Follow</StyledFollow>
  )
}

export default FollowButton;