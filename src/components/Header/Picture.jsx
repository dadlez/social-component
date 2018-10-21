import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.div`
  width: 70px;
  height: 70px;
  position: absolute;
  top: calc(-1 * ((36px / 2) + (70px / 2)));
  right: calc(50% - 35px);
  background: #FFA640;
  border-radius: 50%;
`;

const Picture = (props) => {
  return (
    <StyledPicture>empty_foto</StyledPicture>
  )
};

export default Picture;