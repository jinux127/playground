import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { pauseIcon, muteIcon, playIcon, volumeIcon, fullscreenIcon } from '../assets/images';
import ProgressBar from './ProgressBar';
import { toTimeString } from '../utils';

interface IProps {
  onProgressChange: (percent: number) => void;
  onPlayIconClick: () => void;
  startTime: number;
  totalTime: number;
  currentTime: number;
  showControl: boolean;
  nowPlaying: boolean;
  videoElement: HTMLVideoElement | null;
}

const Controlbar = ({
  onProgressChange,
  onPlayIconClick,
  totalTime,
  currentTime,
  startTime,
  showControl,
  nowPlaying,
  videoElement,
}: IProps) => {
  const [volumeClicked, setVolumeClicked] = useState(false);

  const handleVolume = () => {
    if (volumeClicked) {
      if (videoElement) {
        videoElement.muted = true;
      }
      setVolumeClicked(false);
    } else {
      if (videoElement) {
        videoElement.muted = false;
      }
      setVolumeClicked(true);
    }
  };

  const onMouseUp = () => {
    if (videoElement) {
      // controller를 옮긴 시점에 currentTime이 최신화 되지 않아, 이를 위해 수정
      videoElement.currentTime = currentTime;
      nowPlaying ? videoElement.play() : videoElement.pause();
    }
  };

  const onMouseDown = () => {
    if (videoElement) {
      videoElement.pause();
    }
  };

  const handleFullScreen = () => {
    if (videoElement) {
      videoElement.requestFullscreen();
    }
  };

  return (
    <>
      <ControlBarWrapper showControl={showControl}>
        <ProgressBar
          max={totalTime}
          value={currentTime}
          onChange={onProgressChange}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
        <TimeText>
          {toTimeString(startTime)} / {toTimeString(totalTime)}
        </TimeText>
        <Volume src={volumeClicked ? volumeIcon : muteIcon} onClick={handleVolume} />
        <Volume src={fullscreenIcon} onClick={handleFullScreen} />
      </ControlBarWrapper>
      <PlayControl showControl={showControl}>
        <PlayBg onClick={onPlayIconClick}>
          <PlayIcon src={nowPlaying ? pauseIcon : playIcon} />
        </PlayBg>
      </PlayControl>
    </>
  );
};

const Volume = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 4px;
`;

const PlayBg = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
`;

const PlayIcon = styled.img`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
`;

const PlayControl = styled.div<{ showControl: boolean }>`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: white;
  opacity: ${props => (props.showControl ? 1 : 0)};
  transition: opacity 0.2s;
  cursor: pointer;
`;

const TimeText = styled.span`
  color: white;
  font-size: 14px;
  width: 200px;
  padding: 0 14px;
  text-align: center;
`;

const ControlBarWrapper = styled.div<{ showControl: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 55px;
  z-index: 9999;
  background-image: linear-gradient(to bottom, rgba(34, 34, 34, 0), #222222);
  opacity: ${props => (props.showControl ? 1 : 0)};
  transition: opacity 0.2s;
  cursor: pointer;
  padding: 0px 10px;
  box-sizing: border-box;
  @media (max-width: 320px) {
    padding: 0px 4px;
  }
`;

export default Controlbar;
