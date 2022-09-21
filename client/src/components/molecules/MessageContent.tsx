import React from 'react';
import styled from 'styled-components';
import { IMessage } from '../../constants/messages';

import MessageBox from '../atoms/MessageBox';

export type IMessageContentProps = {
  // scrollRef: React.RefObject<HTMLDivElement>;
  messages: IMessage[];
  loading: boolean;
};

const MessageContent = ({ messages, loading }: IMessageContentProps) => {
  return (
    <Wrapper>
      {messages.map((message, i) => (
        <MessageBox text={message.text} key={i} isLeft={message.isLeft} viewTooltip={true} />
      ))}

      {loading ? <MessageBox text="전송중" isLeft={false} /> : ''}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MessageContent;
