import React from 'react';
import styled from 'styled-components';

export type IconProps = {
  backgroundImage: string;
  width: number;
  height: number;
  margin: string;
  hover?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const Icon = (props: IconProps) => {
  return <Wrapper {...props}></Wrapper>;
};

const Wrapper = styled.div<IconProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: ${props => props.margin};
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export default Icon;
