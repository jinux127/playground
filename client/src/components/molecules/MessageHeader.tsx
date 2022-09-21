import React from 'react';
import styled from 'styled-components';

import ThreeDot from './ThreeDot';

type MessageHeaderProps = {
  redClick: () => void;
  title?: string;
};

const MessageHeader = ({ redClick, title, ...props }: MessageHeaderProps) => {
  return (
    <Wrapper>
      <LeftWapper>
        <ThreeDot redClick={redClick} />
        <NameWrapper>
          <span>받는 사람:</span> Jinux (wlsdn0127@naver.com)
        </NameWrapper>
      </LeftWapper>
    </Wrapper>
  );
};

const NameWrapper = styled.div`
  color: #b9b9b9;
  span {
    color: white;
  }
`;

const LeftWapper = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: 6vh;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  border-radius: 12px 12px 0px 0px;
  padding-right: 12px;
  color: #fff;
  width: 100%;
  top: 0%;
  background-color: #2e2e2e;
`;

export default MessageHeader;
