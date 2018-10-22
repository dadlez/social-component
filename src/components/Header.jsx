import React, { Component } from 'react';
import styled from 'styled-components';
import Picture from './Header/Picture';
import ShareButton from './Header/ShareButton';
import InfoField from './Header/InfoField';
import ActionsField from './Header/ActionsField';
import FollowButton from './Header/FollowButton';

const Header = styled.section`
  position: relative;
  height: 235px;
  margin: auto 17px 15px 17px;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default class HeaderSection extends Component {
  state = {
    counters: {
      likes: 0,
      following: 0,
      followers: 0
    }
  }

  updateState = (data) => {
    this.setState(Object.assign({}, this.state, data));
  }
  //TODO use update from immutable lib

  increaseCounter = (key) => {
    const value = this.state.counters[key] + 1;

    this.updateState({ counters: Object.assign(
      {}, 
      this.state.counters, 
      { [key]: value }) 
    });
  }

  render() {
    return (
      <Header>
        <Picture />
        <ShareButton />
        <InfoField increaseCounter={this.increaseCounter} />
        <ActionsField counters={this.state.counters}/>
        <FollowButton handleClick={this.increaseCounter} />
      </Header>
    );
  }
}
