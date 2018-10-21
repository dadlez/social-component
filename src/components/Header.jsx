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
  render() {
    return (
      <Header>
        <Picture />
        <ShareButton />
        <InfoField />
        <ActionsField />
        <FollowButton />
      </Header>
    );
  }
}
