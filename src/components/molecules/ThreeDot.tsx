import styled from 'styled-components';

import DotButton from '../atoms/DotButton';

type ThreeDotProps = {
  redClick: () => void;
  yellowClick?: () => void;
  greenClick?: () => void;
};

const ThreeDot = ({ redClick, yellowClick, greenClick }: ThreeDotProps) => {
  return (
    <DotWrapper>
      <DotButton backgroundColor="rgb(202, 47, 47)" onClick={() => redClick()} />
      <DotButton backgroundColor="rgb(202, 179, 47)" onClick={() => yellowClick} />
      <DotButton backgroundColor="rgb(132, 202, 47)" onClick={() => greenClick} />
    </DotWrapper>
  );
};

const DotWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export default ThreeDot;
