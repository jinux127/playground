import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { keys } from '../components/constants/keys';
import Dock from '../components/organisms/Dock';
import Finder from '../components/organisms/Finder';
import Trash from '../components/organisms/Trash';

const Home = () => {
  const [viewList, setViewList] = useState<string[]>([]);

  const handleViewList = (key: string) => {
    const newViewList = viewList.filter(view => view !== key);
    setViewList([...newViewList, key]);
  };

  /* eslint-disable no-unused-vars */
  /* eslint-disable no-console */
  const handleCloseView = (key: string) => {
    const newViewList = viewList.filter(view => view !== key);
    setViewList([...newViewList]);
  };
  useEffect(() => {
    console.log(viewList);
  }, [viewList]);
  return (
    <Wrapper>
      <Finder
        zIndex={viewList.indexOf(keys.Finder)}
        top={30}
        left={30}
        closeEvent={() => handleCloseView(keys.Finder)}
      />
      <Trash
        zIndex={viewList.indexOf(keys.Trash)}
        top={5}
        left={5}
        closeEvent={() => handleCloseView(keys.Trash)}
      />
      <Dock handleViewList={handleViewList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
`;

export default Home;
