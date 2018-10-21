import React from 'react';
import styled from 'styled-components';
import Comment from './CommentsField/Comment';

const CommentsWrapper = styled.div`
  height: 475px;
  border-bottom: 1px solid #EBEBEB;
  overflow: scroll;
  overflow-x: hidden;
`;

const CommentsField = (props) => {
  return (
    <CommentsWrapper>
      <Comment />
      <Comment />
      <Comment />
    </CommentsWrapper>
  );
};

export default CommentsField;