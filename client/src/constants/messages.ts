export const INIT_MESSAGES: IMessage[] = [
  { text: '안녕하세요! 프론트엔드 개발자 정진우입니다.', isLeft: true },
  { text: '저는 만들고 이야기하는 것을 좋아해요!', isLeft: true },
  { text: '저에게 연락을 남겨주세요~!😁', isLeft: true },
];

export interface IMessage {
  text: string;
  isLeft: boolean;
}
