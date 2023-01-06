import { IMemo } from '../types/interface';
import InfiniteScroll from './InfiniteScroll';
import Toast from './Toast';
import VideoPlayer from './VideoPlayer';

const MemoArticles: IMemo[] = [
  {
    title: '토스트',
    date: '2023년 01월 07일',
    content: Toast(),
  },
  {
    title: '비디오 플레이어',
    date: '2022년 10월 11일',
    content: VideoPlayer(),
  },
  {
    title: '무한스크롤',
    date: '2022년 09월 15일',
    content: InfiniteScroll(),
  },
];

export default MemoArticles;
