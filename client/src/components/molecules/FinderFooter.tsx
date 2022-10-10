import React from 'react';
import styled from 'styled-components';

type FinderFooterProps = {
  count: number;
};

const FinderFooter = (props: FinderFooterProps) => {
  return (
    <Wrapper>
      <div>{props.count}개의 항목</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  border-radius: 0 0px 12px 12px;

  color: #c2c2c2;
  height: 3vh;
  position: absolute;
  width: 100%;
  bottom: 0%;
  background-color: #2e2e2e;
`;

export default FinderFooter;
