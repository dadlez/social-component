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
  const { picture, author, time, text } = props;
  // TODO make time to custom string in Time

  return (
    <CommentWrapper>
      <CommentHeader>
        <Picture url={picture}/>
        <Author>{author}</Author>
        <Time>{time}</Time>
      </CommentHeader>
      <Value>{text}</Value>
    </CommentWrapper>
  );
};

export default Comment;