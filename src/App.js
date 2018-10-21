import React, { Component } from 'react';
import styled from 'styled-components';
import Person from './components/Person';

// const StyledPerson = styled.div`
//   box-sizing: border-box;
//   max-width: 500px;
//   min-width: 320px;
//   height: 877px;
//   margin: 20px auto;
// `;

// const BackgroundWrapper = styled.div`
//   position: relative;
//   width: 100%;
//   height: 813px;
//   background: #FFFFFF;
//   box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
//   border-radius: 5px;
// `;

// const BackgtoundBar = styled.div`
//   position: absolute;
//   width: 100%;
//   height: 95px;
//   background: #002C71;
//   border-radius: 5px 5px 0 0;
// `;

// const StyledContent = styled.div`
//   position: relative;
//   top: 36px;
// `;

// const HeaderSection = styled.section`
//   height: 235px;
//   margin: auto 17px 15px 17px;
//   background: #FFFFFF;
//   box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
//   border-radius: 5px;
//   display: flex;
//   flex-direction: column;
//   align-items: stretch;
// `;

// const CommentsSection = styled.section`
//   position: relative;
//   margin: auto 17px;
//   padding: 25px 0 19px;
//   background: #FFFFFF;
//   box-shadow: 0 0 4px 0 rgba(172,172,172,0.50);
//   border-radius: 5px;
// `;

// const StyledPicture = styled.div`
//   width: 70px;
//   height: 70px;
//   position: absolute;
//   top: calc(-1 * ((36px / 2) + (70px / 2)));
//   right: calc(50% - 35px);
//   background: #FFA640;
//   border-radius: 50%;
// `;

// const ShareField = styled.div`
//   height: 40px;
// `;

// const PersonInfoSection = styled.div``;

// const PersonName = styled.div``;
// const PersonNameName = styled.span``;
// const PersonNameLocation = styled.div``;
// const PersonNameLike = styled.span``;

// const PersonActionsSection = styled.div`
//   display: flex;
//   justify-content: space-around;
// `;

// const PersonActionBox = styled.div``;

// const PersonActionValue = styled.span`
//   display: block;
//   font-family: 'Montserrat';
//   font-size: 24px;
//   color: #FFA640;
// `;
// const PersonActionCaption = styled.span`
//   font-family: 'Montserrat';
//   font-size: 10px;
//   color: #343E00;
// `;

// const StyledFollow = styled.button`
//   background: #FFA640;
//   border: none;
//   border-radius: 100px;
//   margin: 15px;
//   padding: 14px;
//   font-family: 'Montserrat';
//   font-size: 14px;
//   font-weight: bolder;
//   color: #FFFFFF;
//   letter-spacing: 4.2px;
//   text-transform: uppercase;
// `;

// const ToggleComments = styled.div`
//   margin-bottom: 10px;
//   font-family: 'Montserrat';
//   font-size: 14px;
//   color: #FFA640;
//   display: flex;
//   justify-content: center;
//   text-decoration: underline;
// `;

const StyledComments = styled.div`
  height: 475px;
  border-bottom: 1px solid #EBEBEB;
`;

// const StyledComment = styled.article`
//   border-bottom: 1px solid #EBEBEB;
// `;

const AddCommentWrapper = styled.div`
  margin: 14px 26px 0;
  padding-bottom: 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-family: 'Montserrat';
  font-size: 18px;
  color: #8298B9;
  padding-bottom: 5px;
  border: none;
  border-bottom: 2px solid #DBE0E8;
`;

class App extends Component {
  render() {
    return (
      <Person />
    );
  }
}

export default App;
