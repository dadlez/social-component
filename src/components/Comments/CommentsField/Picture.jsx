import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.img`
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(-50%);
  left: calc(-40px - 10px);
  background: #FFA640;
  border-radius: 50%;
`;

const Picture = (props) => {
  return (
    <StyledPicture src={props.url || ''} alt=''/> //TODO fill with placeholder url
  );
};

export default Picture;