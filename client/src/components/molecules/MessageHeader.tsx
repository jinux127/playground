import React from 'react';
import styled from 'styled-components';
import AppHeader, { AppHeaderProps } from '../atoms/AppHeader';
import { user } from '../organisms/Message';

import ThreeDot from './ThreeDot';

type MessageHeaderProps = AppHeaderProps & {
  redClick: () => void;
  title?: string;
  callerInfo: user;
  setCallerInfo: React.Dispatch<React.SetStateAction<user>>;
  randomId: string;
};

const MessageHeader = ({
  redClick,
  title,
  setCallerInfo,
  callerInfo,
  randomId,
  ...props
}: MessageHeaderProps) => {
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCallerInfo(info => {
      return { ...info, [e.target.name]: e.target.value };
    });
  };

  return (
    <AppHeader {...props}>
      <LeftWapper>
        <ThreeDot redClick={redClick} />
        <NameWrapper>
          <div>
            <span>받는 사람:</span> Jinux (wlsdn0127@naver.com)
          </div>
          <div>
            <span>보내는 사람:</span>{' '}
            <input
              onChange={handleInput}
              name="name"
              value={callerInfo.name}
              placeholder={`익명${randomId}`}
            />
            <span>이메일:</span>{' '}
            <input
              onChange={handleInput}
              name="email"
              value={callerInfo.email}
              placeholder={`익명${randomId}@anonymous.com`}
            />
          </div>
        </NameWrapper>
      </LeftWapper>
    </AppHeader>
  );
};

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #b9b9b9;
  div {
    margin: 5px;
  }
  span {
    color: white;
  }
  input {
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    :focus {
      background-color: rgba(255, 255, 255, 0.2);
    }
    border-radius: 3px;
    margin-right: 10px;
  }

  input:nth-of-type(1) {
    width: 100px;
  }
  input:nth-of-type(2) {
    width: 220px;
  }
`;

const LeftWapper = styled.div`
  display: flex;
  align-items: center;
`;

export default MessageHeader;
