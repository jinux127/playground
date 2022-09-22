import React from 'react';
import styled from 'styled-components';
import AppHeader from '../atoms/AppHeader';

import MemoMenu from './MemoMenu';
import ThreeDot from './ThreeDot';

type MemoHeaderProps = {
  redClick: () => void;
};

const MemoHeader = ({ redClick, ...props }: MemoHeaderProps) => {
  return (
    <AppHeader>
      <LeftWapper>
        <ThreeDot redClick={redClick} />
      </LeftWapper>
      <RightWrapper>
        <MemoMenu />
      </RightWrapper>
    </AppHeader>
  );
};

const RightWrapper = styled.div`
  display: flex;
`;

const LeftWapper = styled.div`
  display: flex;
  align-items: center;
`;

export default MemoHeader;
