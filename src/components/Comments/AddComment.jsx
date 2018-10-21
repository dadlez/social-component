import React from 'react';
import styled from 'styled-components';

const AddCommentWrapper = styled.div`
  margin: 14px 26px 0;
  padding-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-family: 'Montserrat';
  font-size: 18px;
  color: #8298B9;
  padding-bottom: 5px;
  border: none;
  border-bottom: 2px solid #DBE0E8;
`;

const AddComment = (props) => {
  return (
    <AddCommentWrapper>
      <StyledInput placeholder='Add comment'/>
    </AddCommentWrapper>
  );
};

export default AddComment;