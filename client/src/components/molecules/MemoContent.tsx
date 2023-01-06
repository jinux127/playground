import React, { Fragment, useState } from 'react';
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

  const nullCheck = contentIndex !== null && MemoContents[contentIndex] !== null;

  return (
    <Wrapper>
      <List>
        <ul>
          {MemoContents.map((content, i) => (
            <Fragment key={i}>
              <ListItem onClick={() => handleSelect(i)} index={i} contentIndex={contentIndex}>
                <div>
                  <Title>{content.title}</Title>
                  <Date>{content.date}</Date>
                </div>
              </ListItem>
            </Fragment>
          ))}
        </ul>
      </List>
      <Content>{nullCheck ? MemoContents[contentIndex].content : ''}</Content>
    </Wrapper>
  );
};

const Title = styled.div`
  font-size: 0.9rem;
`;
const Date = styled.div`
  font-size: 0.5rem;
`;

const ListItem = styled.li<{ index: number; contentIndex: number | null }>`
  background-color: ${props =>
    props.index === props.contentIndex ? ` rgba(255,255,255,0.1)` : ''};
  border-radius: 7px;
  padding: 1rem;
  border-bottom: 0.1px solid rgba(173, 173, 173, 0.1);
`;

const Content = styled.div`
  width: 98%;
  height: 100%;
  margin-right: 1px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
  }
`;
const List = styled.div`
  width: 40%;
  overflow: auto;
  background-color: #333333;
  height: 100%;
  border-radius: 0px 0px 0px 12px;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0);
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
  }
  ul {
    padding: 0 0.5rem;
  }
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
`;

export default MemoContent;
