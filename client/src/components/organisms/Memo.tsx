import React from 'react';

import { IMemo } from '../../types/interface';
import AppFrame, { AppFrameProps } from '../atoms/AppFrame';

import MemoContent from '../molecules/MemoContent';
import MemoHeader from '../molecules/MemoHeader';

export type FinderProps = AppFrameProps & {
  closeEvent: () => void;
  MemoContents: IMemo[];
};

const Memo = ({ closeEvent, MemoContents = [], ...props }: FinderProps) => {
  return (
    <AppFrame {...props}>
      <MemoHeader {...props} redClick={closeEvent} />
      {MemoContents ? <MemoContent MemoContents={MemoContents} /> : ''}
    </AppFrame>
  );
};

export default Memo;
