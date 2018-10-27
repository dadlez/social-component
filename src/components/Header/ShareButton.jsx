import React from 'react';
import styled from 'styled-components';
import { getCurrentUrl } from '../../utils';

const StyledButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
`;
const ShareButton = (props) => {
  // TODO zrobić tooltip zamiast alertu
  
  // TODO make copying to clipboard
  // const handleClick = () => {
  //   navigator.permissions.query({ name: 'clipboard-write' })
  //     .then(status => {
  //       console.log(status.state);
  //       if (status.state === 'granted') {
  //         console.log('granted')
  //       }
  //       console.log('err')
  //     } 
  //   )
  // }

  // navigator.clipboard.writeText('skopiowany text').then(console.log('sukces'), console.error)
  const handleClick = () => window.alert(`Copy below url to share:\n${getCurrentUrl()}`)
  
  return (
    <StyledButton onClick={handleClick}>s</StyledButton>
  )
}

export default ShareButton;


