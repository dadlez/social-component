import React from 'react';
import styled from 'styled-components';
import Name from './InfoSection/Name';
import Location from './InfoSection/Location';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${props => props.screenSize === 'small' 
  ? `align-items: center;`
  : `
    align-items: flex-start;
    padding-left: 87px;`
  };
  margin: 40px 0 35px;
`;

const InfoField = (props) => {
  return (
    <InfoWrapper screenSize={props.screenSize}>
      <Name increaseCounter={props.increaseCounter}>{props.name}</Name>
      <Location>{props.location}</Location>
    </InfoWrapper>
  )
};

export default InfoField;