import React from 'react';

import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { keys } from '../constants/keys';
import Dock from '../components/organisms/Dock';
import Finder from '../components/organisms/Finder';
import { IFinder } from '../types/interface';
import Memo from '../components/organisms/Memo';

import MemoArticles from '../MemoArticles';

// const sampleData = [{ title: '123' }];

const Home = () => {
  const [viewList, setViewList] = useState<string[]>([]);
  const [finderData, setFinderData] = useState<IFinder[]>([]);
  const handleViewList = (key: string) => {
    const newViewList = viewList.filter(view => view !== key);
    setViewList([...newViewList, key]);
  };

  const handleCloseView = (key: string) => {
    const newViewList = viewList.filter(view => view !== key);
    setViewList([...newViewList]);
  };

  const getFinderData = async () => {
    const res = await fetch('api/data');
    const json = await res.json();
    const finderData = json.data;
    // eslint-disable-next-line no-console
    console.log(finderData);
    setFinderData(finderData);
  };

  useEffect(() => {
    getFinderData();
  }, []);

  return (
    <Wrapper>
      <Finder
        zIndex={viewList.indexOf(keys.Finder)}
        top={30}
        left={30}
        closeEvent={() => handleCloseView(keys.Finder)}
        finderData={finderData || []}
      />
      <Memo
        zIndex={viewList.indexOf(keys.Memo)}
        top={5}
        left={5}
        closeEvent={() => handleCloseView(keys.Memo)}
        MemoContents={MemoArticles}
      />
      <Dock handleViewList={handleViewList} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
`;

export default Home;
