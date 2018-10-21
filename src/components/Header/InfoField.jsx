import React from 'react';
import styled from 'styled-components';
import Name from './InfoSection/Name';
import Location from './InfoSection/Location';

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0 35px;
`;

const InfoField = (props) => {
  return (
    <InfoWrapper>
      <Name />
      <Location />
    </InfoWrapper>
  )
};

export default InfoField;