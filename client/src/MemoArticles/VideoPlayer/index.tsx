import React from 'react';
import styled from 'styled-components';
import UploadAndPlayer from './components/UploadAndPlayer';

const VideoPlayer = () => {
  return (
    <Wrapper>
      <UploadAndPlayer />
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

export default VideoPlayer;
