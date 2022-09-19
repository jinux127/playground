import React from 'react';
import styled from 'styled-components';
import { background } from '../../assets/images';

export type LaunchpadProps = {
  zIndex: number;
  top?: number;
  left?: number;
  closeEvent: () => void;
};

const Launchpad = ({ closeEvent, ...props }: LaunchpadProps) => {
  return <Wrapper {...props}>asdf</Wrapper>;
};

const Wrapper = styled.div<{ zIndex: number; top?: number; left?: number }>`
  position: absolute;
  width: 100vw;
  height: 90vh;
  background-image: ${background};
  background-color: black;
  z-index: ${props => props.zIndex};
  display: ${props => (props.zIndex < 0 ? 'none' : 'block')};
`;

export default Launchpad;
