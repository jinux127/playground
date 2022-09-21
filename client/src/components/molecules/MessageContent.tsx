import React from 'react';
import styled from 'styled-components';
import { IMessage } from '../../constants/messages';

import MessageBox from '../atoms/MessageBox';

export type IMessageContentProps = {
  // scrollRef: React.RefObject<HTMLDivElement>;
  messages: IMessage[];
};

const MessageContent = ({ messages }: IMessageContentProps) => {
  return (
    <Wrapper>
      {messages.map((message, i) => (
        <MessageBox text={message.text} key={i} isLeft={message.isLeft} />
      ))}
      {/* <div ref={scrollRef} style={{ height: '1px' }}></div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MessageContent;
