import React from 'react';
import styled from 'styled-components';

type ArrowButtonProps = {
  rotate: string;
};

const ArrowButton = (props: ArrowButtonProps) => {
  return <Wrapper {...props}></Wrapper>;
};

const Wrapper = styled.div<{ rotate?: string }>`
  /* margin-right: 25px; */
  position: relative;
  cursor: pointer;
  width: 20px;
  height: 20px;
  border-radius: 5px;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  ::after {
    position: absolute;
    top: 5px;
    left: 5px;
    content: '';
    width: 10px; /* 사이즈 */
    height: 10px; /* 사이즈 */
    border-top: 2px solid #fff; /* 선 두께 */
    border-right: 2px solid #fff; /* 선 두께 */
    transform: rotate(${props => props.rotate}); /* 각도 */
  }
`;

export default ArrowButton;
