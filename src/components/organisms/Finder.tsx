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

export type FinderProps = {
  zIndex: number;
  top?: number;
  left?: number;
  closeEvent: () => void;
};

const Finder = ({ closeEvent, ...props }: FinderProps) => {
  return (
    <Wrapper {...props}>
      <FinderHeader {...props} redClick={closeEvent} title={'글 목록'} />
      <FinderContent FinderContents={content} />
      <FinderFooter />
    </Wrapper>
  );
};

const Wrapper = styled.div<{ zIndex: number; top?: number; left?: number }>`
  position: absolute;
  width: 50vw;
  box-shadow: 3px;
  height: 45vh;
  border-radius: 12px;
  background-color: rgb(31, 31, 31);
  top: ${props => props.top || 5}%;
  left: ${props => props.left || 5}%;
  z-index: ${props => props.zIndex};
  display: ${props => (props.zIndex < 0 ? 'none' : 'block')};
`;

export default Finder;
