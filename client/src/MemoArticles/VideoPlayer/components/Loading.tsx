import React from 'react';
import styled, { keyframes } from 'styled-components';

interface ILoading {
  dotColor?: string;
  dotSize?: string;
}

const Loading = ({ dotColor = '#fff', dotSize = '30px' }: ILoading) => {
  return (
    <Wrapper>
      <LoadingBar>
        <Dot bgColor={dotColor} dotSize={dotSize} />
        <Dot bgColor={dotColor} dotSize={dotSize} />
        <Dot bgColor={dotColor} dotSize={dotSize} />
      </LoadingBar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 9998;
`;

const upside = keyframes`
  0%,
  100% {
    transform: translateY(0px) ;
  }
  50% {
    transform: translateY(-15px) ;
  }
`;

const LoadingBar = styled.div`
  transform: translate(0%, 50%);
  width: auto;
  height: 200px;
  display: flex;
  justify-content: center;
  z-index: 9999;

  & > div:not(:first-child) {
    margin-left: 20px;
  }

  & > div:nth-child(1) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 100ms;
  }

  & > div:nth-child(2) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 250ms;
  }

  & > div:nth-child(3) {
    animation: ${upside} 0.7s infinite;
    animation-delay: 400ms;
  }
`;

const Dot = styled.div<{ dotSize: string; bgColor: string }>`
  width: ${props => props.dotSize};
  height: ${props => props.dotSize};
  background-color: ${props => props.bgColor};
  border-radius: 50%;
`;

export default Loading;
