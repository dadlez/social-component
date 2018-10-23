import React from 'react';
import styled from 'styled-components';
import LikeButton from './LikeButton';

const NameWrapper = styled.div``;

const Content = styled.span`
  font-family: 'Montserrat';
  font-size: 18px;
  color: #002C71;
  letter-spacing: 0;
`;

const Name = (props) => {
  return (
    <NameWrapper>
      <Content>
        {props.children}
      </Content>
      <LikeButton handleClick={props.increaseCounter} />
    </NameWrapper>
  )
};

export default Name;