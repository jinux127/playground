import React from 'react';
import styled from 'styled-components';

import Video from './components/Video';

const VideoPlayer = () => {
  return (
    <Wrapper>
      <VideoWrapper>
        <Video videoSrc="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4" />
      </VideoWrapper>
    </Wrapper>
  );
};

const VideoWrapper = styled.div`
  width: 480px;
  position: relative;
`;

const Wrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export default VideoPlayer;
