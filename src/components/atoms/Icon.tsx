import styled from 'styled-components';

type CssProps = {
  backgroundImage: string;
  width: number;
  height: number;
  margin: string;
  tooltipMargin?: string;
  tooltip?: string;
};

const Icon = (props: CssProps) => {
  return <Wrapper {...props}></Wrapper>;
};

const Wrapper = styled.div<CssProps>`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin: ${props => props.margin};
  background-image: url(${props => props.backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export default Icon;
