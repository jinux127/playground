import styled from 'styled-components';
import { FinderContent, FinderFooter, FinderHeader } from '../molecules';
import { IFinderContent } from '../molecules/FinderContent';

const content: IFinderContent[] = [
  { name: '블라블라', time: '2020-02-02', category: '테스트' },
  { name: '블라블라', time: '2020-02-02', category: '테스트' },
  { name: '블라블라', time: '2020-02-02', category: '테스트' },
  { name: '블라블라', time: '2020-02-02', category: '테스트' },
  { name: '블라블라', time: '2020-02-02', category: '테스트' },
  { name: '블라블라', time: '2020-02-02', category: '테스트' },
];

const Finder = () => {
  return (
    <Wrapper>
      <FinderHeader />
      <FinderContent FinderContents={content} />
      <FinderFooter />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  width: 50vw;
  box-shadow: 3px;
  height: 45vh;
  border-radius: 12px;
  background-color: rgb(31, 31, 31);
  top: 5%;
  left: 5%;
`;

export default Finder;
