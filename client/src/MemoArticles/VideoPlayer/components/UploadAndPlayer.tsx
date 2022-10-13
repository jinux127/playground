import React from 'react';
import styled from 'styled-components';

const UploadAndPlayer = () => {
  return (
    <Wrapper>
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
