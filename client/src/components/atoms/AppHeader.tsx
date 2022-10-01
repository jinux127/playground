/* eslint-disable no-console */
import React from 'react';
import styled from 'styled-components';

export type AppHeaderProps = {
  children?: React.ReactNode;
  onMouseDown?: any;
  onMouseMove?: any;
  onMouseUp?: any;
  handleViewList?: (key: string) => void;
};

const AppHeader = ({ children, onMouseDown, onMouseMove, onMouseUp }: AppHeaderProps) => {
  return (
    <Wrapper onMouseDown={onMouseDown} onMouseMove={onMouseMove} onMouseUp={onMouseUp}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 7vh;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  border-radius: 12px 12px 0px 0px;
  padding-right: 12px;
  color: #fff;
  width: 100%;
  top: 0%;
  background-color: #2e2e2e;
  cursor: move;
`;

export default AppHeader;
