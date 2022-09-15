import { IMemo } from '../types/interface';
import InfiniteScroll from './InfiniteScroll';

const MemoArticles: IMemo[] = [
  {
    title: '무한스크롤',
    date: '2022년 09월 15일',
    content: InfiniteScroll(),
  },
  {
    title: '테스트',
    date: '2022년 09월 15일',
    content: InfiniteScroll(),
  },
  {
    title: '테스트2',
    date: '2022년 09월 15일',
    content: InfiniteScroll(),
  },
];

export default MemoArticles;
