import React, { useRef } from 'react';
import styled from 'styled-components';
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
  // const [editDone, ]
  // const scrollToBottom = useCallback(() => {
  //   if (editDone) {
  //     // 스크롤 내리기
  //     scrollRef.current.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
  //   }
  // }, [editDone]);

  const sendEmail = () => {
    // eslint-disable-next-line no-console
    console.log('send');
  };

  // useEffect(() => {
  //   RefExample();
  // }, [RefExample])

  return (
    <Wrapper {...props} ref={scrollRef}>
      <MessageHeader {...props} redClick={closeEvent} />
      <ContentWrapper>
        <MessageContent />
      </ContentWrapper>
      <RoundInput onSubmit={sendEmail} />
    </Wrapper>
  );
};

const ContentWrapper = styled.div`
  height: 100%;
  overflow: auto;
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
