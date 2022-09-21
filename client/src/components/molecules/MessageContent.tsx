import React from 'react';
import styled from 'styled-components';

import MessageBox from '../atoms/MessageBox';

export type IMessageContentProps = {
  scrollRef: React.RefObject<HTMLDivElement> | null;
};

const MessageContent = ({ scrollRef }: IMessageContentProps) => {
  return (
    <Wrapper>
      {/* <Content>{nullCheck ? MemoContents[contentIndex].content : ''}</Content> */}

      <MessageBox text={'안녕하세요! 프론트엔드 개발자 정진우입니다.'} />
      <MessageBox text={'저는 만들고 이야기하는 것을 좋아해요!'} />
      <MessageBox text={'저에게 연락을 남겨주세요~!😁'} />
      <MessageBox isLeft={false} />
      <MessageBox isLeft={false} />
      <MessageBox isLeft={false} />
      <MessageBox isLeft={false} />
      <MessageBox isLeft={false} />
      <MessageBox isLeft={false} />
      <div ref={scrollRef}></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default MessageContent;
