import React from 'react';
import styled from 'styled-components';
import { IMemo } from '../../types/interface';

import MemoContent from '../molecules/MemoContent';
import MemoHeader from '../molecules/MemoHeader';

export type FinderProps = {
  zIndex: number;
  top?: number;
  left?: number;
  closeEvent: () => void;
  MemoContents: IMemo[];
};

const Memo = ({ closeEvent, MemoContents = [], ...props }: FinderProps) => {
  return (
    <Wrapper {...props}>
      <MemoHeader {...props} redClick={closeEvent} title={'글 목록'} />
      {MemoContents ? <MemoContent MemoContents={MemoContents} /> : ''}
    </Wrapper>
  );
};

const Wrapper = styled.div<{ zIndex: number; top?: number; left?: number }>`
  position: absolute;
  width: 60vw;
  box-shadow: 3px;
  height: 65vh;
  border-radius: 12px;
  background-color: rgb(31, 31, 31);
  top: ${props => props.top || 5}%;
  left: ${props => props.left || 5}%;
  z-index: ${props => props.zIndex};
  display: ${props => (props.zIndex < 0 ? 'none' : 'block')};
`;

export default Memo;
