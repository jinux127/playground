import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { logo_boot_apple } from '../assets/images';
import { ProgressBar } from '../components/atoms';

type LogoProps = {
  src: string;
};

const Booting = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(10);
  const countInterval = useRef<any>(null);

  useEffect(() => {
    countInterval.current = setInterval(() => setCount(old => old + 1), 15);
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