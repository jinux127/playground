import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Controlbar from './Controlbar';

interface IProps {
  videoSrc: string;
}

const Video = ({ videoSrc }: IProps) => {
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const ref = useRef<HTMLVideoElement>(null);

  const totalTime = Math.round((ref && ref.current && ref.current.duration) ?? 0);
  const videoElement = ref && ref.current;

  const startTime = Math.floor(currentTime);

  // 동영상 시간 업데이트 함수
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener('timeupdate', function () {
        setCurrentTime(observedVideoElement.currentTime);
      });
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  // progress 이동시켰을때 실행되는 함수
  const onProgressChange = (percent: number) => {
    if (videoElement && ref.current) {
      const playingTime = videoElement.duration * (percent / 100);
      ref.current.currentTime = playingTime;
      setCurrentTime(playingTime);
    }
  };

  // play icon 클릭했을떄 실행되는 함수
  const onPlayIconClick = () => {
    if (videoElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        videoElement.pause();
      } else {
        setNowPlaying(true);
        videoElement.play();
      }
    }
  };

  // control bar visible 관련 함수
  const handleControlVisible = (isOver: boolean) => {
    setShowControl(isOver);
  };

  return (
    <Wrapper
      onMouseOver={() => handleControlVisible(true)}
      onMouseOut={() => handleControlVisible(false)}
    >
      <video muted={true} ref={ref} playsInline={true}>
        <source
          src="https://storage.googleapis.com/web-dev-assets/video-and-source-tags/chrome.webm"
          type="video/webm"
        />
        <source src={videoSrc} type="video/mp4" />
      </video>
      <Controlbar
        onProgressChange={onProgressChange}
        onPlayIconClick={onPlayIconClick}
        totalTime={totalTime}
        currentTime={currentTime}
        startTime={startTime}
        showControl={showControl}
        nowPlaying={nowPlaying}
        videoElement={videoElement}
      />
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

export default Video;
