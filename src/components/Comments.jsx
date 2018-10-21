import React, { Component } from 'react';
import styled from 'styled-components';
import ToggleComments from './Comments/ToggleComments';
import CommentsField from './Comments/CommentsField';
import AddComment from './Comments/AddComment';

const Comments = styled.section`
  position: relative;
  margin: auto 17px;
  padding: 25px 0 19px;
  background: #FFFFFF;
  box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
  border-radius: 5px;
`;

export default class CommentsSection extends Component {
  render() {
    return (
      <Comments>
        <ToggleComments />
        <CommentsField />
        <AddComment />
      </Comments>
    );
  }
}
