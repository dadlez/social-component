import React from 'react';
import styled from 'styled-components';
import { ACTION_TYPES } from '../../../utils';

const StyledLike = styled.button``;

const LikeButton = (props) => {
  return (
    <StyledLike onClick={() => props.handleClick(ACTION_TYPES.LIKES)}>LIKE</StyledLike>
  )
};

export default LikeButton;