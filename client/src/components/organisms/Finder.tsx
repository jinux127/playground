import React from 'react';
import { IFinder } from '../../types/interface';
import AppFrame, { AppFrameProps } from '../atoms/AppFrame';

import { FinderContent, FinderFooter, FinderHeader } from '../molecules';

export type FinderProps = AppFrameProps & {
  closeEvent: () => void;
  finderData: IFinder[];
};

const Finder = ({ closeEvent, finderData = [], ...props }: FinderProps) => {
  return (
    <AppFrame {...props}>
      <FinderHeader {...props} redClick={closeEvent} title={'글 목록'} />
      {finderData ? <FinderContent FinderContents={finderData} /> : ''}
      <FinderFooter />
    </AppFrame>
  );
};

export default Finder;
