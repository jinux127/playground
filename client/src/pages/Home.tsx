import React from 'react';

import { useState } from 'react';
import styled from 'styled-components';
import { keys } from '../constants/keys';
import Dock from '../components/organisms/Dock';
import Finder from '../components/organisms/Finder';
import Memo from '../components/organisms/Memo';

import MemoArticles from '../MemoArticles';
import Launchpad from '../components/organisms/Launchpad';
import Message from '../components/organisms/Message';
import MacAlert from '../components/molecules/MacAlert';
import useView from '../hooks/useView';
import useFinderData from '../hooks/useFinderData';
import useMacAlert from '../hooks/useMacAlert';

const Home = () => {
  const { handleCloseView, handleViewList, viewList } = useView();
  const { handleCloseAlert, macAlert, setMacAlert } = useMacAlert();
  const { data: finderData } = useFinderData();

  const [isFirstLanding, setIsFirstLanding] = useState(0);

  window.addEventListener('beforeunload', function (e) {});
  return (
    <Wrapper>
      <Finder
        zIndex={viewList.indexOf(keys.Finder)}
        top={120}
        left={100}
        redClick={(e: React.MouseEvent<Element, MouseEvent>) => handleCloseView(e, keys.Finder)}
        finderData={finderData?.data}
        height={30}
        width={50}
        title="글 목록"
        handleClick={() => handleViewList(keys.Finder)}
        setMacAlert={setMacAlert}
      />
      <Memo
        zIndex={viewList.indexOf(keys.Memo)}
        top={130}
        left={150}
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
          isFirstLanding={isFirstLanding}
          setMacAlert={setMacAlert}
        />
      )}
      <Message
        zIndex={viewList.indexOf(keys.Message)}
        top={140}
        left={100}
        height={35}
        width={50}
        closeEvent={(e: React.MouseEvent<Element, MouseEvent>) => handleCloseView(e, keys.Message)}
        handleClick={() => handleViewList(keys.Message)}
      />

      <Finder
        zIndex={viewList.indexOf(keys.Trash)}
        top={130}
        left={180}
        redClick={(e: React.MouseEvent<Element, MouseEvent>) => handleCloseView(e, keys.Trash)}
        handleClick={() => handleViewList(keys.Trash)}
        finderData={[
          {
            title: '나태',
            date: '2022년 10월 20일',
            desc: '임시',
            href: '',
            likes: '',
          },
          {
            title: '시기',
            date: '2022년 10월 20일',
            desc: '임시',
            href: '',
            likes: '',
          },
          {
            title: '자만',
            date: '2022년 10월 20일',
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
  overflow: hidden;
`;

export default Home;
