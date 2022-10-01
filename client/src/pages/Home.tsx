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

  const handleCloseView = (key: string) => {
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

  const onDrop = e => {
    // eslint-disable-next-line no-console
    console.log('test');
    // eslint-disable-next-line no-console
    console.log(e.pageX);
  };
  function dragover(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  return (
    <Wrapper onDrop={onDrop} onDragOver={dragover}>
      <Finder
        zIndex={viewList.indexOf(keys.Finder)}
        top={15}
        left={15}
        closeEvent={() => handleCloseView(keys.Finder)}
        finderData={finderData || []}
        height={30}
        width={50}
        title="글 목록"
      />
      <Memo
        zIndex={viewList.indexOf(keys.Memo)}
        top={5}
        left={5}
        closeEvent={() => handleCloseView(keys.Memo)}
        MemoContents={MemoArticles}
        height={35}
        width={50}
      />
      {isFirstLanding >= 1 && (
        <Launchpad
          zIndex={viewList.indexOf(keys.Launchpad)}
          top={5}
          left={5}
          closeEvent={() => handleCloseView(keys.Launchpad)}
          LaunchpadContents={sampleData}
          isFirstLanding={isFirstLanding}
          setMacAlert={setMacAlert}
        />
      )}
      <Message
        zIndex={viewList.indexOf(keys.Message)}
        top={10}
        left={20}
        height={35}
        width={50}
        closeEvent={() => handleCloseView(keys.Message)}
      />

      <Finder
        zIndex={viewList.indexOf(keys.Trash)}
        top={10}
        left={30}
        closeEvent={() => handleCloseView(keys.Trash)}
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
