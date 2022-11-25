import React, { useState } from 'react';
import styled from 'styled-components';

type MacAlertProps = {
  title: string;
  url: string;
  icon: string;
  isView: boolean;
  handleCloseAlert: any;
};

const MacAlert = ({ title, url, icon, isView, handleCloseAlert }: MacAlertProps) => {
  const [isHover, setIsHover] = useState(false);

  const overMouse = () => {
    setIsHover(true);
  };

  const outMouse = () => {
    setIsHover(false);
  };

  const closeEvent = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleCloseAlert();
  };

  const moveEvent = (e: React.MouseEvent) => {
    window.open(url);
    handleCloseAlert();
  };

  return (
    <Wrapper onMouseOver={overMouse} onMouseOut={outMouse} onClick={moveEvent} isView={isView}>
      <IconWrapper>
        <img src={icon} alt="아이콘" />
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
  text-overflow: ellipsis;
  overflow: hidden;
  p {
    width: 100%;
    white-space: nowrap;
    margin: 2px;
  }
`;

const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 1rem;
  img {
    border-radius: 0.4rem;
    object-fit: contain;
    min-width: 3rem;
  }
`;

const Wrapper = styled.div<{ isView: boolean }>`
  display: flex;
  justify-content: start;
  align-items: center;

  font-size: 0.8rem;

  border-radius: 12px;
  cursor: pointer;
  color: white;
  height: 4rem;
  position: fixed;
  width: 20rem;
  right: ${props => (props.isView ? '0' : '-25')}rem;
  margin: 1rem;
  /* opacity: ${props => (props.isView ? '1' : '0')}; */
  transition: right 0.2s cubic-bezier(0.3, 0.5, 0.5, 1);

  border: 1px solid #fafafa38;
  background-color: rgb(56, 56, 56);
`;

export default MacAlert;
