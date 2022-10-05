import React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { preload } from '../utils';

type LogoProps = {
  src: string;
};

const Booting = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);
  const [limitCount, setLimitCount] = useState(0);
  const countInterval = useRef<any>(null);

  useEffect(() => {
    preload(
      [
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
      () => setCount(old => old + 6)
    );

    countInterval.current = setInterval(() => {
      if (limitCount < 10) {
        setLimitCount(limitCount => limitCount + 1);
        setCount(old => old + 1);
      }
    }, 200);

    return () => {
      clearInterval(countInterval.current);
    };
  }, []);

  useEffect(() => {
    if (count >= 100) {
      setCount(0);
      clearInterval(countInterval.current);
      navigate('/home');
    }
  }, [count]);

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
