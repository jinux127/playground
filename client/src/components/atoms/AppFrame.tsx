import React from 'react';
import styled from 'styled-components';

export type AppFrameProps = {
  zIndex: number;
  top: number;
  left: number;
  width: number;
  height: number;
  children?: React.ReactNode;
};

const AppFrame = ({ children, ...props }: AppFrameProps) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

const Wrapper = styled.div<AppFrameProps>`
  position: absolute;
  width: ${props => props.width}rem;
  height: ${props => props.height}rem;
  box-shadow: 1px 1px 15px 5px #000000;
  border: 1px solid #fafafa38;
  border-radius: 12px;
  background-color: rgb(31, 31, 31);
  top: ${props => props.top || 5}%;
  left: ${props => props.left || 5}%;
  z-index: ${props => props.zIndex};
  display: ${props => (props.zIndex < 0 ? 'none' : 'block')};
  padding-bottom: 7vh;
`;

export default AppFrame;
