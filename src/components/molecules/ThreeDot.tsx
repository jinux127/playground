import styled from 'styled-components';

import DotButton from '../atoms/DotButton';

const ThreeDot = () => {
  return (
    <DotWrapper>
      <DotButton backgroundColor="rgb(202, 47, 47)" />
      <DotButton backgroundColor="rgb(202, 179, 47)" />
      <DotButton backgroundColor="rgb(132, 202, 47)" />
    </DotWrapper>
  );
};

const DotWrapper = styled.div`
  display: flex;
  padding: 10px;
`;

export default ThreeDot;
