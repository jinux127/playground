import React, { useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { background } from '../../assets/images';

import Carousel from '../molecules/Carousel';

export type LaunchpadProps = {
  zIndex: number;
  closeEvent: () => void;
  LaunchpadContents: any;
  isFirstLanding: number;
  setMacAlert: React.Dispatch<
    React.SetStateAction<{
      title: string;
      url: string;
      icon: string;
      isView: boolean;
    }>
  >;
};

const Launchpad = ({ closeEvent, LaunchpadContents, setMacAlert, ...props }: LaunchpadProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [count] = useState(1);

  const handleCarousel = count => {
    if (!carouselRef.current) return;

    if (count === 5) {
      carouselRef.current.style.transform = 'translateX(0)';
    } else {
      carouselRef.current.style.transform = `translateX(-${window.innerWidth * count}px)`;
    }
  };

  return (
    <Wrapper {...props} onClick={closeEvent}>
      <CarouselWrapper {...props}>
        <Carousel
          carouselList={LaunchpadContents}
          carouselRef={carouselRef}
          count={count}
          handleCarousel={handleCarousel}
          isView={!(props.zIndex < 0)}
          setMacAlert={setMacAlert}
          closeEvent={closeEvent}
        />
      </CarouselWrapper>
    </Wrapper>
  );
};
const CarouselWrapper = styled.div<{ zIndex: number }>`
  width: 100%;
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fadeOut = keyframes`
    from {
      opacity: 1;
      transform: scale(1);
    }
    to {
      opacity: 0;
      transform: scale(1.1);
      display:none;

    }
    `;
const fadeIn = keyframes`
    from {
      opacity: 0;
      display: block;
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
    `;

const Wrapper = styled.div<{
  zIndex: number;

  isFirstLanding: number;
}>`
  display: flex;
  position: absolute;

  ::before {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${background});
    background-size: cover;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
    z-index: -1;
    content: '';
  }
  z-index: ${props => props.zIndex};
  animation: ${props => (props.zIndex < 0 ? fadeOut : fadeIn)} 0.4s;
  animation-fill-mode: forwards;
  width: 100vw;
  height: 100vh;
`;
export default Launchpad;
