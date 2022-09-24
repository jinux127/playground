import React, { useState } from 'react';
import styled from 'styled-components';
import { icon_chrome } from '../../assets/images';

type MacAlertProps = {
  title: string;
  url: string;
};

const MacAlert = ({ title, url }: MacAlertProps) => {
  const [isHover, setIsHover] = useState(false);

  const overMouse = () => {
    setIsHover(true);
  };

  const outMouse = () => {
    setIsHover(false);
  };

  const closeEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert('종료');
  };

  const moveEvent = (e: React.MouseEvent) => {
    alert('페이지 이동');
  };

  return (
    <Wrapper onMouseOver={overMouse} onMouseOut={outMouse} onClick={moveEvent}>
      <IconWrapper>
        <img src={icon_chrome} alt="아이콘" />
      </IconWrapper>
      <MessageWrapper>
        <MessageTitle>{title}</MessageTitle>
        <MessageUrl>{url}</MessageUrl>
        <Message>새창으로 이동합니다.</Message>
      </MessageWrapper>
      {isHover ? <CircleButton onClick={closeEvent}>x</CircleButton> : ''}
    </Wrapper>
  );
};

const Message = styled.p``;
const CircleButton = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: rgb(56, 56, 56);
  position: absolute;
  border-radius: 0.75rem;
  border: 1px solid #fafafa38;
  left: -0.5rem;
  top: -0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const MessageUrl = styled.p`
  font-weight: bold;
  font-size: 0.5rem;
`;
const MessageTitle = styled.p`
  font-weight: bold;
`;

const MessageWrapper = styled.div`
  p {
    margin: 2px;
  }
`;

const IconWrapper = styled.div`
  width: 3rem;
  margin: 1rem;
  img {
    object-fit: cover;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  font-size: 0.8rem;
  border-radius: 12px;
  cursor: pointer;
  margin: 1rem;
  color: white;
  height: 4rem;
  position: absolute;
  width: 20rem;
  right: 0%;

  border: 1px solid #fafafa38;
  background-color: rgb(56, 56, 56);
`;

export default MacAlert;
