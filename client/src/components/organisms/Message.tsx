import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { postMail } from '../../apis/mail';
import { INIT_MESSAGES } from '../../constants/messages';
import { refScrollTop } from '../../utils';
import RoundInput from '../atoms/RoundInput';

import MessageContent from '../molecules/MessageContent';
import MessageHeader from '../molecules/MessageHeader';
import { v4 as uuidv4 } from 'uuid';
import AppFrame, { AppFrameProps } from '../atoms/AppFrame';

export type MessageProps = AppFrameProps & {
  closeEvent: () => void;
};

export type user = { email: string; name: string };

const Message = ({ closeEvent, ...props }: MessageProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState(INIT_MESSAGES);
  const [loading, setLoading] = useState(false);
  const [callerInfo, setCallerInfo] = useState<user>({ email: '', name: '' });

  const uuid = useRef(uuidv4());
  const randomId = uuid.current.slice(0, 8);
  const sendEmail = async (text: string) => {
    if (loading) return;
    setLoading(true);

    try {
      await postMail({
        contents: text,
        email: callerInfo.email ? callerInfo.email : `익명${randomId}@anonymous.com`,
        name: callerInfo.name ? callerInfo.name : `익명${randomId}`,
      });
      setMessages(message => [...message, { text, isLeft: false }]);
    } catch (error) {
      setMessages(message => [
        ...message,
        { text, isLeft: false },
        { text: '이메일 전송에 실패했습니다.', isLeft: true },
      ]);
    }
    setLoading(false);
  };

  useEffect(() => {
    refScrollTop(scrollRef);
  }, [messages]);

  return (
    <AppFrame {...props}>
      <MessageHeader
        {...props}
        redClick={closeEvent}
        callerInfo={callerInfo}
        setCallerInfo={setCallerInfo}
        randomId={randomId}
      />
      <ContentWrapper ref={scrollRef}>
        <MessageContent messages={messages} loading={loading} />
      </ContentWrapper>
      <RoundInput onSubmit={sendEmail} />
    </AppFrame>
  );
};

const ContentWrapper = styled.div`
  height: 90%;
  overflow: scroll;
  padding: 2px;
`;

export default Message;