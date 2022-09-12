import React from 'react';
import styled from 'styled-components';
import { IFinder } from '../../types/interface';

import { FinderContent, FinderFooter, FinderHeader } from '../molecules';

export type FinderProps = {
  zIndex: number;
  top?: number;
  left?: number;
  closeEvent: () => void;
  finderData: IFinder[];
};

const Finder = ({ closeEvent, finderData = [], ...props }: FinderProps) => {
  return (
    <Wrapper {...props}>
      <FinderHeader {...props} redClick={closeEvent} title={'글 목록'} />
      {finderData ? <FinderContent FinderContents={finderData} /> : ''}
      <FinderFooter />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ zIndex: number; top?: number; left?: number }>`
  position: absolute;
  width: 50vw;
  box-shadow: 3px;
  height: 45vh;
  border-radius: 12px;
  background-color: rgb(31, 31, 31);
  top: ${props => props.top || 5}%;
  left: ${props => props.left || 5}%;
  z-index: ${props => props.zIndex};
  display: ${props => (props.zIndex < 0 ? 'none' : 'block')};
`;

export default Finder;
