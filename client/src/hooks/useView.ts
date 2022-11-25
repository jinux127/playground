import React from 'react';

import { useState } from 'react';
import { keys } from '../constants/keys';

const useView = () => {
  const [viewList, setViewList] = useState<string[]>([]);
  const LAUNCHPAD = keys.Launchpad;

  const handleViewList = (key: string) => {
    const newViewList = viewList.filter(view => view !== key);

    const isViewLaunchpadAndClickLaunchpad = viewList.includes(LAUNCHPAD) && key === LAUNCHPAD;
    const isViewLaunchpadAndClickOther = viewList.includes(LAUNCHPAD) && key !== LAUNCHPAD;

    if (isViewLaunchpadAndClickLaunchpad) {
      setViewList([...newViewList]);
    } else if (isViewLaunchpadAndClickOther) {
      const newViewList = viewList.filter(view => view !== key && view !== LAUNCHPAD);
      setViewList([...newViewList, key]);
    } else {
      setViewList([...newViewList, key]);
    }
  };

  const handleCloseView = (e: React.MouseEvent<Element, MouseEvent>, key: string) => {
    const newViewList = viewList.filter(view => view !== key);
    setViewList([...newViewList]);
  };
  return { viewList, handleViewList, handleCloseView };
};

export default useView;
