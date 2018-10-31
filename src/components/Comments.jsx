import React, { Component } from 'react';
import styled from 'styled-components';
import { fetchData, RESOURCES } from '../utils';
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
//TODO correct the height of CommentsSection or CommentsField when empty CommentsField


export default class CommentsSection extends Component {
  state = {
    hidden: false,
    comments: []
  }

  componentDidMount() {
    //TODO make handleError() in utils or handle it inside fetchData();
    fetchData(RESOURCES.COMMENTS)
      .then(comments => this.setState({ comments: this.sortComments(comments) }))
      .catch(error => console.error('Fetching data failed with error:', error))
  }

  toggleVisibility = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  sortComments = (comments) => comments.sort((a, b) => {
    return new Date(a.time) - new Date(b.time);
  })

  addComment = (comment) => {
    const comments = this.sortComments([...this.state.comments]);
    comments.push(comment);
    this.setState({ comments });
  }

  render() {
    //TODO move AddComment into CommentField
    return (
      <Comments>
        <ToggleComments 
          handleClick={this.toggleVisibility} 
          number={this.state.comments.length} 
          hidden={this.state.hidden}
        />
      {!this.state.hidden && (
        <>
          <CommentsField hidden={this.state.hidden} screenSize={this.state.screenSize}>
            {this.state.comments}
          </CommentsField>
          <AddComment addComment={this.addComment} />
        </>
      )}
      </Comments>
    )
  }
}
