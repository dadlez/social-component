import React from 'react';
import styled from 'styled-components';
import Picture from './Picture';
import Author from './Author';
import Time from './Time';

const CommentWrapper = styled.article`
  padding: 20px 27px 20px 70px;
  border-bottom: 1px solid #EBEBEB;
`;
//TODO replace border-bottom with :after

const CommentHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

const Value = styled.div`
  font-family: 'Montserrat';
  font-size: 14px;
  color: #444444;
  letter-spacing: 0;
  line-height: 21px;
`;

const Comment = (props) => {
  return (
    <CommentWrapper>
      <CommentHeader>
        <Picture />
        <Author />
        <Time />
      </CommentHeader>
      <Value>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Value>
    </CommentWrapper>
  );
};

export default Comment;