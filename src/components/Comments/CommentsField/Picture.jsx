import React from 'react';
import styled from 'styled-components';

const StyledPicture = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(-50%);
  left: calc(-40px - 10px);
  background: #FFA640;
  background-image: url(${props => props.url});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 50%;
  object-fit: scale-down;
  overflow: hidden;
`;
// TODO move StyledPicture as shared component
// TODO move shared styles into styles.js

const Picture = (props) => {
  return <StyledPicture url={props.url || '#'} alt={props.alt || 'pict'} />;
};

export default Picture;