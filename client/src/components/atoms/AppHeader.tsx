import React from 'react';
import styled from 'styled-components';

type AppHeaderProps = {
  children: React.ReactNode;
};

const AppHeader = ({ children }: AppHeaderProps) => {
  return <Wrapper>{children}</Wrapper>;
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
`;

export default AppHeader;
