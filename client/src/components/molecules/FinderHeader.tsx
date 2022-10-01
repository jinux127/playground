import React from 'react';
import styled from 'styled-components';
import AppHeader, { AppHeaderProps } from '../atoms/AppHeader';

import FinderMenu from './FinderMenu';
import LRArrow from './LRArrow';
import ThreeDot from './ThreeDot';

export type FinderHeaderProps = AppHeaderProps & {
  redClick: () => void;
  title: string;
};

const FinderHeader = ({ redClick, title, ...props }: FinderHeaderProps) => {
  return (
    <AppHeader {...props}>
      <LeftWapper>
        <ThreeDot redClick={redClick} />
        <LRArrow />
        <span>{title}</span>
      </LeftWapper>
      <RightWrapper>
        <FinderMenu />
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

export default FinderHeader;
