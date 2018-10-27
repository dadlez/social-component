import React from 'react';
import styled from 'styled-components';

const StyledTime = styled.div`
opacity: 0.5;
font-family: 'Montserrat';
font-size: 14px;
color: #002C71;
letter-spacing: 0;`;

const Time = (props) => {
  return (
    <StyledTime>{props.children}</StyledTime>
  );
};

export default Time;
