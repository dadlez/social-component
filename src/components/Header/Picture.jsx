import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  ${props => props.screenSize === 'small' 
  ? `top: calc(-1 * ((36px / 2) + (70px / 2)));
    left: calc(50% - 35px);`
  : `top: 20px;
  left: 20px;`
  }
  transition-property: top right;
  transition-duration: 0.2s;
  background: #FFA640;
  border-radius: 50%;
`;

const Picture = (props) => {
  return (
    <StyledPicture {...props}>empty_foto</StyledPicture>
  )
};

export default Picture;