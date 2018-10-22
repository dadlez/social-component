import React from 'react';
import styled from 'styled-components';
import Value from './Value';
import Caption from './Caption';

const ActionWrapper = styled.div``;

const Action = (props) => {
  return (
    <ActionWrapper>
      <Value>{props.value}</Value>
      <Caption>{props.caption}</Caption>
    </ActionWrapper>
  )
}

export default Action;