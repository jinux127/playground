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
  return (
    <Wrapper {...props}>
      <Test>
        <Test2>asdf</Test2>
      </Test>
    </Wrapper>
  );
};
const Test = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  border: 1px solid;
  justify-content: center;
  align-items: center;
`;
const Test2 = styled.div`
  width: 100px;
  height: 100px;
  background-color: aliceblue;
`;
const Wrapper = styled.div<{ zIndex: number; top?: number; left?: number }>`
  display: flex;
  position: absolute;
  ::before {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: ${background};
    backdrop-filter: blur(5px);
    z-index: -1;
    content: '';
  }
  width: 100vw;
  height: 100vh;
  z-index: ${props => props.zIndex};
  display: ${props => (props.zIndex < 0 ? 'none' : 'block')};
`;

export default Launchpad;
