import React from 'react';
import styled from 'styled-components';

const StyledAuthor = styled.span`
  font-family: 'Montserrat';
  font-size: 14px;
  color: #002C71;
  letter-spacing: 0;
`;

const Author = (props) => {
  return (
    <StyledAuthor>Mike Ross</StyledAuthor>
  );
};

export default Author;