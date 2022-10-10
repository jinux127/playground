import React from 'react';

import { useState } from 'react';
import styled from 'styled-components';
import { keys } from '../constants/keys';
import Dock from '../components/organisms/Dock';
import Finder from '../components/organisms/Finder';
import { IFinder } from '../types/interface';
import Memo from '../components/organisms/Memo';

import MemoArticles from '../MemoArticles';
import useInterval from '../hooks/useInterval';
import Launchpad from '../components/organisms/Launchpad';
import Message from '../components/organisms/Message';
import MacAlert from '../components/molecules/MacAlert';

const sampleData = [
  {
    id: 1,
    src: '../images/slide-img01.jpg',
    text: '첫번째 슬라이드 버튼',
    alt: '첫번째 슬라이드',
  },
  {
    id: 2,
    src: '../images/slide-img02.jpg',
    text: '두번째 슬라이드 버튼',
    alt: '두번째 슬라이드',
  },
  {
    id: 3,
    src: '../images/slide-img03.jpg',
    text: '세번째 슬라이드 버튼',
    alt: '세번째 슬라이드',
  },
  {
    id: 4,
    src: '../images/slide-img04.jpg',
    text: '네번째 슬라이드 버튼',
    alt: '네번째 슬라이드',
  },
  {
    id: 5,
    src: '../images/slide-img05.jpg',
    text: '다섯번째 슬라이드 버튼',
    alt: '다섯번째 슬라이드',
  },
];

const LAUNCHPAD = keys.Launchpad;

const Home = () => {
  const [viewList, setViewList] = useState<string[]>([]);
  const [finderData, setFinderData] = useState<IFinder[]>([]);

  const [isFirstLanding, setIsFirstLanding] = useState(0);
  const [macAlert, setMacAlert] = useState({ title: '', url: '', icon: '', isView: false });

  const handleViewList = (key: string) => {
    const newViewList = viewList.filter(view => view !== key);

    const isViewLaunchpadAndClickLaunchpad = viewList.includes(LAUNCHPAD) && key === LAUNCHPAD;
    const isViewLaunchpadAndClickOther = viewList.includes(LAUNCHPAD) && key !== LAUNCHPAD;

    if (isViewLaunchpadAndClickLaunchpad) {
      setViewList([...newViewList]);
    } else if (isViewLaunchpadAndClickOther) {
      const newViewList = viewList.filter(view => view !== key && view !== LAUNCHPAD);
      setViewList([...newViewList, key]);
    } else {
      setViewList([...newViewList, key]);
    }
  };

  const handleCloseView = (e: React.MouseEvent<Element, MouseEvent>, key: string) => {
    const newViewList = viewList.filter(view => view !== key);
    setViewList([...newViewList]);
  };

  const getFinderData = async () => {
    const res = await fetch('api/data');
    const json = await res.json();
    const finderData = json.data;
    setFinderData(finderData);
  };

  useInterval(() => {
    if (!finderData.length) getFinderData();
  }, 1000);

  const handleCloseAlert = () => {
    setMacAlert(cur => ({ ...cur, isView: false }));
  };

  return (
    <Wrapper>
      <Finder
        zIndex={viewList.indexOf(keys.Finder)}
        top={120}
        left={200}
        redClick={(e: React.MouseEvent<Element, MouseEvent>) => handleCloseView(e, keys.Finder)}
        finderData={finderData || []}
        height={30}
        width={50}
        title="글 목록"
        handleClick={() => handleViewList(keys.Finder)}
        setMacAlert={setMacAlert}
      />
      <Memo
        zIndex={viewList.indexOf(keys.Memo)}
        top={130}
        left={250}
        closeEvent={(e: React.MouseEvent<Element, MouseEvent>) => handleCloseView(e, keys.Memo)}
        MemoContents={MemoArticles}
        height={35}
        width={50}
        handleClick={() => handleViewList(keys.Memo)}
      />
      {isFirstLanding >= 1 && (
        <Launchpad
          zIndex={viewList.indexOf(keys.Launchpad)}
          closeEvent={(e: React.MouseEvent<Element, MouseEvent>) =>
            handleCloseView(e, keys.Launchpad)
          }
          LaunchpadContents={sampleData}
          isFirstLanding={isFirstLanding}
          setMacAlert={setMacAlert}
        />
      )}
      <Message
        zIndex={viewList.indexOf(keys.Message)}
        top={140}
        left={300}
        height={35}
        width={50}
        closeEvent={(e: React.MouseEvent<Element, MouseEvent>) => handleCloseView(e, keys.Message)}
        handleClick={() => handleViewList(keys.Message)}
      />

      <Finder
        zIndex={viewList.indexOf(keys.Trash)}
        top={130}
        left={280}
        redClick={(e: React.MouseEvent<Element, MouseEvent>) => handleCloseView(e, keys.Trash)}
        handleClick={() => handleViewList(keys.Trash)}
        finderData={[
          {
            title: '임시 기능입니다.',
            date: '2022년 09월 25일',
            desc: '임시',
            href: '',
            likes: '',
          },
        ]}
        height={30}
        width={50}
        title="휴지통"
      />

      <MacAlert {...macAlert} handleCloseAlert={handleCloseAlert} />
      <Dock handleViewList={handleViewList} setIsFirstLanding={setIsFirstLanding} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #fff;
  width: 100vw;
  height: 100vh;
`;

export default Home;
