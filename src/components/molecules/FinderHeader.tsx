import styled from 'styled-components';

import FinderMenu from './FinderMenu';
import LRArrow from './LRArrow';
import ThreeDot from './ThreeDot';

type FinderHeaderProps = {
  redClick: () => void;
};

const FinderHeader = ({ redClick }: FinderHeaderProps) => {
  return (
    <Wrapper>
      <LeftWapper>
        <ThreeDot redClick={redClick} />
        <LRArrow />
        <span>글 목록</span>
      </LeftWapper>
      <RightWrapper>
        <FinderMenu />
      </RightWrapper>
    </Wrapper>
  );
};

const RightWrapper = styled.div`
  display: flex;
`;

const LeftWapper = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  height: 6vh;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  border-radius: 12px 12px 0px 0px;
  padding-right: 12px;
  color: #fff;
  width: 100%;
  top: 0%;
  background-color: #2e2e2e;
`;

export default FinderHeader;
