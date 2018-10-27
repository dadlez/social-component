import React, { Component } from 'react';
import styled from 'styled-components';

const AddCommentWrapper = styled.div`
  margin: 14px 26px 0;
  padding-bottom: 5px;
`;


const Input = (props) => {
  return <input {...props} />
}
// TODO make textarea for comment field

const StyledInput = styled(Input)`
  width: 100%;
  font-family: 'Montserrat';
  font-size: 18px;
  color: #8298B9;
  padding-bottom: 5px;
  margin-bottom: 10px;
  border: none;
  border-bottom: 2px solid #DBE0E8;
`;

class AddComment extends Component {
  state = {
    fields: {
      text: '',
      name: ''
    },
    adding: false
  }

  handleSubmit = e => {
    e.preventDefault();
    const newComment = {
      text: this.state.fields.text,
      author: this.state.fields.name,
      time: (new Date()).toLocaleDateString(),
      picture: null
    }
    this.props.addComment(newComment)
    // TODO make a nice resetState fn()
    this.setState({ 
      fields: {
        text: '',
        name: ''
      },
      adding: false
     })
  }

  handleFormFocus = () => {
    this.setState({
      adding: true,
    });
  }

  handleChange = field => e => {
    this.setState({ fields: Object.assign({}, this.state.fields, { [field]: e.target.value })})
  }

  render() {
    return (
      <AddCommentWrapper>
        <form onSubmit={this.handleSubmit}>
          <StyledInput 
            placeholder='Add comment' 
            onFocus={this.handleFormFocus} 
            value={this.state.fields.text} 
            onChange={this.handleChange('text')}
          />
        {this.state.adding && (
          <>
            <StyledInput 
              placeholder='Your name' 
              value={this.state.fields.name} 
              onChange={this.handleChange('name')}
              required 
            />
            <button style={{visibility: 'hidden'}} type='submit' />{/*why enter not working without button?*/}
          </>
        )}
        </form>
      </AddCommentWrapper>
    );
  }
};

export default AddComment;