import React from 'react';
import styled from 'styled-components';

export type TooltipProps = {
  content: string;
};

const Tooltip = (props: TooltipProps) => {
  const { content } = props;
  return <Wrapper>{content}</Wrapper>;
};

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 5px 10px;
  border-radius: 5px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -300%);
  white-space: nowrap;
  ::after {
    content: ' ';
    border-color: rgba(0, 0, 0, 0.4) transparent;
    border-width: 8px 6px 0 6px;
    border-style: solid;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%);
  }
`;

export default Tooltip;
