import React from 'react';
import styled from 'styled-components';

const VideoPlayer = () => {
  return (
    <Wrapper>
      <video controls width="500">
        <source src="/media/cc0-videos/flower.webm" type="video/webm"></source>
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

export default VideoPlayer;
