import React from 'react';
import styled from 'styled-components';

import ArrowButton from '../atoms/ArrowButton';

const LRArrow = () => {
  return (
    <ArrowSection>
      <ArrowWrapper>
        <ArrowButton rotate={'225deg'} />
      </ArrowWrapper>
      <ArrowWrapper>
        <ArrowButton rotate={'45deg'} />
      </ArrowWrapper>
    </ArrowSection>
  );
};

const ArrowWrapper = styled.div`
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
const ArrowSection = styled.div`
  display: flex;
  padding: 10px;
`;

export default LRArrow;
