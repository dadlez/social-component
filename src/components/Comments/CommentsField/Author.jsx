import React from 'react';
import styled from 'styled-components';

const StyledAuthor = styled.span`
  font-family: 'Montserrat';
  font-size: 14px;
  color: #002C71;
  letter-spacing: 0;
`;

const Author = (props) => {
  console.log('Author.props.children', props.children)
  return (
    <StyledAuthor>{props.children}</StyledAuthor>
  );
};

export default Author;