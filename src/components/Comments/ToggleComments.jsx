import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-bottom: 10px;
  font-family: 'Montserrat';
  font-size: 14px;
  color: #FFA640;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;

const ToggleComments = (props) => {
  return (
    <Wrapper>Toggle Comments (123)</Wrapper>
  );
}

export default ToggleComments;