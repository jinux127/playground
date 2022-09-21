import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { INIT_MESSAGES } from '../../constants/messages';
import { refScrollTop } from '../../utils';
import RoundInput from '../atoms/RoundInput';

import MessageContent from '../molecules/MessageContent';
import MessageHeader from '../molecules/MessageHeader';

export type MessageProps = {
  zIndex: number;
  top?: number;
  left?: number;
  closeEvent: () => void;
};

const Message = ({ closeEvent, ...props }: MessageProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(INIT_MESSAGES);

  const sendEmail = (text: string) => {
    setMessages(message => [...message, { text, isLeft: false }]);
  };

  useEffect(() => {
    refScrollTop(scrollRef);
  }, [messages]);

  return (
    <Wrapper {...props}>
      <MessageHeader {...props} redClick={closeEvent} />
      <ContentWrapper ref={scrollRef}>
        <MessageContent messages={messages} />
      </ContentWrapper>
      <RoundInput onSubmit={sendEmail} />
    </Wrapper>
  );
};

const ContentWrapper = styled.div`
  height: 100%;
  overflow: scroll;
  padding: 2px;
`;

const Wrapper = styled.div<{ zIndex: number; top?: number; left?: number }>`
  position: absolute;
  width: 50vw;
  box-shadow: 3px;
  height: 60vh;
  border-radius: 12px;
  background-color: rgb(31, 31, 31);
  top: ${props => props.top || 5}%;
  left: ${props => props.left || 5}%;
  z-index: ${props => props.zIndex};
  display: ${props => (props.zIndex < 0 ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: space-between;
`;

export default Message;
