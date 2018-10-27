import React from 'react';
import styled from 'styled-components';
import Action from './ActionsField/Action';
import FollowButton from './FollowButton';
import { ACTION_TYPES } from '../../utils';

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 21px;
`;

const ActionsField = (props) => {
  const { likes, followers, following } = props.counters;
  const small = props.screenSize === 'small';

  return (
    <>
      <ActionsWrapper>
        <Action caption={ACTION_TYPES.LIKES} value={likes}/>
        <Action caption={ACTION_TYPES.FOLLOWERS} value={followers}/>
        <Action caption={ACTION_TYPES.FOLLOWING} value={following}/>
        {!small && <FollowButton handleClick={props.increaseCounter} />}
      </ActionsWrapper>
      {small && <FollowButton handleClick={props.increaseCounter} />}
    </>
  );
};

export default ActionsField;