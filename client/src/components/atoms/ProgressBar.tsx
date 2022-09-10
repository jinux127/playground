import React from 'react';
import styled from 'styled-components';

type ProgressBardProps = {
  bgColor: string;
  completed: number;
};

const ProgressBar = (props: ProgressBardProps) => {
  return (
    <ContainerStyles>
      <FillerStyles {...props}></FillerStyles>
    </ContainerStyles>
  );
};

const ContainerStyles = styled.div`
  position: absolute;
  top: 60%;
  width: 300px;
  height: 13px;
  margin: 80px;
  border-radius: 10px;
  background-color: #3d3d3d;
`;

const FillerStyles = styled.div<{ completed: number; bgColor: string }>`
  height: 100%;
  border-radius: 10px;
  width: ${props => props.completed}%;
  background-color: ${props => props.bgColor};
  border-radius: inherit;
  text-align: right;
  transition: width 0.2s ease-in-out;
`;

export default ProgressBar;
