/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const UploadAndPlayer = () => {
  return (
    <Wrapper>
      {/* <input
        type="file"
        accept="video/mp4,video/mkv, video/x-m4v,video/*"
      /> */}
      <video controls width="500">
        <source
          src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm"
          type="video/webm"
        />
        <source
          src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.mp4"
          type="video/mp4"
        />
      </video>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export default UploadAndPlayer;
