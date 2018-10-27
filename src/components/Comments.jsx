import React, { Component } from 'react';
import styled from 'styled-components';
import ToggleComments from './Comments/ToggleComments';
import CommentsField from './Comments/CommentsField';
import AddComment from './Comments/AddComment';
import fake_comments from '../mocks/comments.json';
console.log(fake_comments)

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
    this.setState({ comments: this.sortComments(fake_comments) })
  }

  toggleVisibility = () => {
    this.setState({ hidden: !this.state.hidden });
  }

  sortComments = (comments) => comments.sort((a, b) => {
    console.log()
    return new Date(a.time) - new Date(b.time);
  })

  addComment = (comment) => {
    console.log(comment)
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
          <CommentsField hidden={this.state.hidden}>
            {this.state.comments}
          </CommentsField>
          <AddComment addComment={this.addComment} />
        </>
      )}
      </Comments>
    )
  }
}
