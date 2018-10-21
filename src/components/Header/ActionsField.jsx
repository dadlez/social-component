import React from 'react';
import styled from 'styled-components';
import Action from './ActionsField/Action';

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 21px;
`;

const ActionsField = (props) => {
  return (
    <ActionsWrapper>
      <Action />
      <Action />
      <Action />
    </ActionsWrapper>
  );
};

export default ActionsField;