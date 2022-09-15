import React from 'react';
import InfiniteView from './components/InfiniteView';
import { UnsplashProvider } from './context/UnsplashContext';

const InfiniteScroll = () => {
  return (
    <UnsplashProvider>
      <div>
        <InfiniteView />
      </div>
    </UnsplashProvider>
  );
};

export default InfiniteScroll;
