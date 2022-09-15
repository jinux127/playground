import React, { useState } from 'react';
import styled from 'styled-components';
import { IMemo } from '../../types/interface';

export interface IMemoContentProps {
  MemoContents: IMemo[];
}

const MemoContent = (props: IMemoContentProps) => {
  const { MemoContents } = props;
  const [contentIndex, setContentIndex] = useState<null | number>(null);

  const handleSelect = (i: number) => {
    setContentIndex(i);
  };

  return (
    <Wrapper>
      <List>
        <ul>
          {MemoContents.map((content, i) => (
            <>
              <li onClick={() => handleSelect(i)}>{content.title}여기</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
              <li>{content.title}</li>
            </>
          ))}
        </ul>
      </List>
      <Content>{contentIndex !== null ? MemoContents[contentIndex].content : ''}</Content>
    </Wrapper>
  );
};
const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  margin: 1rem;
`;
const List = styled.div`
  width: 30%;
  overflow: auto;
  background-color: #333333;
  height: 100%;
  border-radius: 0px 0px 0px 12px;
  ul {
    li {
      padding-bottom: 1rem;
    }
  }
`;

const Wrapper = styled.div`
  height: 59vh;
  display: flex;
`;

export default MemoContent;
