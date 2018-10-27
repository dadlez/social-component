import React from 'react';
import styled from 'styled-components';
import Comment from './CommentsField/Comment';

const CommentsWrapper = styled.div`
  max-height: ${props => props.screenSize === 'small' ? '475' : '571'}px;
  border-bottom: 1px solid #EBEBEB;
  overflow: scroll;
  overflow-x: hidden;
`;

const CommentsField = (props) => {
  return (
    <CommentsWrapper>
      {props.children.map((commentData, index) => (
        <Comment {...commentData} key={index}/>
      ))}
    </CommentsWrapper>
  );
};

export default CommentsField;