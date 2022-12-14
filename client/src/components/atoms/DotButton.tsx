import React from 'react';
import styled from 'styled-components';

type DotButtonProps = {
  backgroundColor: string;
  onClick?: (e: React.MouseEvent<Element, MouseEvent>) => void;
};

const DotButton = (props: DotButtonProps) => {
  return <Wrapper {...props}></Wrapper>;
};

const Wrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
  width: 12px;
  height: 12px;
  margin: 4px;
  cursor: pointer;
`;

export default DotButton;
