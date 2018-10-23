import React from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  margin-bottom: 10px;
  font-family: 'Montserrat';
  font-size: 14px;
  color: #FFA640;
  display: flex;
  justify-content: center;
  text-decoration: underline;
`;

const ToggleComments = (props) => {
  return (
    <Toggle onClick={props.handleClick}>{props.hidden ? 'Show' : 'Hide'} Comments ({props.number})</Toggle>
  );
}

export default ToggleComments;