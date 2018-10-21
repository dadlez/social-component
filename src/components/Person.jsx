import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderSection from './Header';
import CommentsSection from './Comments';

const StyledPerson = styled.div`
  box-sizing: border-box;
  max-width: 500px;
  min-width: 320px;
  height: 877px;
  margin: 20px auto;
`;

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 813px;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;
`;

const BackgtoundBar = styled.div`
  position: absolute;
  width: 100%;
  height: 95px;
  background: #002C71;
  border-radius: 5px 5px 0 0;
`;

const StyledContent = styled.div`
  position: relative;
  top: 36px;
`;

export default class Person extends Component {
  render() {
    return (
      <StyledPerson>
        <BackgroundWrapper>
          <BackgtoundBar />
          <StyledContent>
            <HeaderSection />
            <CommentsSection />
          </StyledContent>
        </BackgroundWrapper>
      </StyledPerson>
    )
  }
}