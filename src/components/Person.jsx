import React, { Component } from 'react';
import styled from 'styled-components';
import HeaderSection from './Header';
import CommentsSection from './Comments';
import { getScreenSize } from '../utils';

const StyledPerson = styled.div`
  box-sizing: border-box;
  max-width: 500px;
  min-width: 320px;
  max-height: 877px;
  margin: 20px auto;
`;

const BackgroundWrapper = styled.div`
  position: relative;
  width: 100%;
  max-height: ${props => props.screenSize === 'small' ? '813' : '797'}px;
  transition: max-height 0.2s;
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
  state = {
    screenSize: getScreenSize()
  }
  //TODO move screenSize to react context

  componentDidMount() {
    window.onresize = () => {
      const size = getScreenSize();
      if (size !== this.state.screenSize) this.setState({ screenSize: size })
    };
  }

  componentWillUnmount() {
    window.onresize = null;
  }

  render() {
    return (
      <StyledPerson>
        <BackgroundWrapper screenSize={this.state.screenSize}>
          <BackgtoundBar />
          <StyledContent>
            <HeaderSection screenSize={this.state.screenSize} />
            <CommentsSection screenSize={this.state.screenSize} />
          </StyledContent>
        </BackgroundWrapper>
      </StyledPerson>
    )
  }
}