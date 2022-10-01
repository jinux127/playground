import React from 'react';
import useDrag from '../../hooks/useDrag';

import { IMemo } from '../../types/interface';
import AppFrame, { AppFrameProps } from '../atoms/AppFrame';

import MemoContent from '../molecules/MemoContent';
import MemoHeader from '../molecules/MemoHeader';

export type FinderProps = AppFrameProps & {
  closeEvent: () => void;
  MemoContents: IMemo[];
};

const Memo = ({ closeEvent, MemoContents = [], left, top, ...props }: FinderProps) => {
  const { handleMouseDown, handleMouseMove, handleMouseUp, x, y } = useDrag(left, top);

  return (
    <AppFrame {...props} top={y} left={x}>
      <MemoHeader
        {...props}
        redClick={closeEvent}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      {MemoContents ? <MemoContent MemoContents={MemoContents} /> : ''}
    </AppFrame>
  );
};

export default Memo;
