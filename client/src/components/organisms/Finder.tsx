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
    setMacAlert?: React.Dispatch<
      React.SetStateAction<{
        title: string;
        url: string;
        icon: string;
        isView: boolean;
      }>
    >;
  };

const Finder = ({ finderData = [], title, left, top, setMacAlert, ...props }: FinderProps) => {
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
      {finderData ? <FinderContent FinderContents={finderData} setMacAlert={setMacAlert} /> : ''}
      <FinderFooter />
    </AppFrame>
  );
};

export default Finder;
