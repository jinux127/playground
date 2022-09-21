import React from 'react';
import styled from 'styled-components';

export type MessageLeftBoxProps = {
  isLeft?: boolean;
  text?: string;
  viewTooltip?: boolean;
};
const defaultString = `email: wlsdn0127@naver.com
안녕하세요 프론트엔드 개발자 정진우입니다.
저는 만들고 이야기하는 것을 좋아합니다. 저에게 연락을 남겨주세요 😁`;

const MessageLeftBox = ({
  isLeft = true,
  text = defaultString,
  viewTooltip = false,
}: MessageLeftBoxProps) => {
  return (
    <Wrapper isLeft={isLeft}>
      <MessageBox isLeft={isLeft} viewTooltip={viewTooltip}>
        {text}
      </MessageBox>
    </Wrapper>
  );
};

const Wrapper = styled.div<MessageLeftBoxProps>`
  display: flex;
  justify-content: ${props => (props.isLeft ? 'flex-start' : 'flex-end')};
  margin: 10px;
`;

const MessageBox = styled.div<MessageLeftBoxProps>`
  max-width: 80%;

  padding: 10px;
  border-radius: 10px;
  background-color: ${props => (props.isLeft ? '#424242' : '#0f5bb1')};
  word-break: break-all;
  position: relative;
  ::after {
    ${props => (props.viewTooltip && !props.isLeft ? 'content:"전송됨";' : '')}

    position: absolute;
    bottom: -12px;
    right: 0;
    font-size: 2px;
    color: #9a9a9a;
  }
`;

export default MessageLeftBox;
