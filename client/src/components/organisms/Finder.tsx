/* eslint-disable no-console */
import React from 'react';
import useDrag from '../../hooks/useDrag';
import { IFinder } from '../../types/interface';
import AppFrame, { AppFrameProps } from '../atoms/AppFrame';

import { FinderContent, FinderFooter, FinderHeader } from '../molecules';
import { FinderHeaderProps } from '../molecules/FinderHeader';

export type FinderProps = AppFrameProps &
  FinderHeaderProps & {
    finderData: IFinder[];
    title: string;
  };

const Finder = ({ finderData = [], title, left, top, ...props }: FinderProps) => {
  const { handleMouseDown, handleMouseMove, handleMouseUp, x, y } = useDrag(left, top);

  return (
    <AppFrame {...props} top={y} left={x}>
      <FinderHeader
        {...props}
        title={title}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      {finderData ? <FinderContent FinderContents={finderData} /> : ''}
      <FinderFooter />
    </AppFrame>
  );
};

export default Finder;
