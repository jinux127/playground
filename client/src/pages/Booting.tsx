import React from 'react';
import styled from 'styled-components';
import {
  icon_bingsu,
  icon_photocalendar,
  icon_quarantine,
  icon_sodong,
  icon_togefit,
  logo_boot_apple,
} from '../assets/images';
import { ProgressBar } from '../components/atoms';
import {
  icon_chrome,
  icon_finder,
  icon_launchpad,
  icon_memo,
  icon_message,
  icon_trash,
  icon_vscode,
  background,
} from '../assets/images';
import useLoading from '../hooks/useLoading';
import useFinderData from '../hooks/useFinderData';

type LogoProps = {
  src: string;
};

const Booting = () => {
  const { isLoading } = useFinderData();
  const { count } = useLoading({
    loadFiles: [
      logo_boot_apple,
      icon_togefit,
      icon_bingsu,
      icon_sodong,
      icon_photocalendar,
      icon_quarantine,
      icon_chrome,
      icon_finder,
      icon_launchpad,
      icon_memo,
      icon_message,
      icon_trash,
      icon_vscode,
      background,
    ],
    isLoading,
  });

  return (
    <Wrapper>
      <Logo src={logo_boot_apple} />
      <ProgressBar bgColor="white" completed={count} />
    </Wrapper>
  );
};

const Logo = styled.img<LogoProps>`
  src: url(${logo_boot_apple});
  width: 100px;
  height: 100px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

export default Booting;
