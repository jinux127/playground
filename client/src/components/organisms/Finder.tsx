import React from 'react';
import { IFinder } from '../../types/interface';
import AppFrame, { AppFrameProps } from '../atoms/AppFrame';

import { FinderContent, FinderFooter, FinderHeader } from '../molecules';

export type FinderProps = AppFrameProps & {
  closeEvent: () => void;
  finderData: IFinder[];
  title: string;
};

const Finder = ({ closeEvent, finderData = [], title, ...props }: FinderProps) => {
  return (
    <AppFrame {...props}>
      <FinderHeader {...props} redClick={closeEvent} title={title} />
      {finderData ? <FinderContent FinderContents={finderData} /> : ''}
      <FinderFooter />
    </AppFrame>
  );
};

export default Finder;
