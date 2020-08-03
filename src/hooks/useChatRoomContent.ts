import { useRecoilValue } from 'recoil';
import { useState, useEffect } from 'react';
import { meState } from '../recoil/atom';

type ChatContent = {
  type: 'ENTER' | 'MESSAGE' | 'LEAVE';
  chatRoomId: number;
  nickname: string;
  content: string;
  chatLogTime: string;
};

function useChatRoomContent() {
  const { nickname: meNickname } = useRecoilValue(meState);
  const [chatContents] = useState<ChatContent[]>([
    {
      type: 'MESSAGE',
      chatRoomId: 2,
      nickname: 'test',
      content: '테스트',
      chatLogTime: '2020-08-02T02:20:48.613',
    },
    {
      type: 'MESSAGE',
      chatRoomId: 2,
      nickname: '개발자가되고싶은아이',
      content: '하이',
      chatLogTime: '2020-08-02T02:22:48.613',
    },
    {
      type: 'MESSAGE',
      chatRoomId: 2,
      nickname: 'tester',
      content: '테스트',
      chatLogTime: '2020-08-02T02:23:48.613',
    },
    {
      type: 'ENTER',
      chatRoomId: 2,
      nickname: 'devho',
      content: 'devho님이 채팅방에 입장하셨습니다.',
      chatLogTime: '2020-08-02T02:20:48.613',
    },
    {
      type: 'MESSAGE',
      chatRoomId: 2,
      nickname: 'tester',
      content: '테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스',
      chatLogTime: '2020-08-02T02:26:48.613',
    },
    {
      type: 'LEAVE',
      chatRoomId: 2,
      nickname: 'tester',
      content: 'tester님이 채팅방을 나가셨습니다.',
      chatLogTime: '2020-08-02T02:20:48.613',
    },
    {
      type: 'MESSAGE',
      chatRoomId: 2,
      nickname: 'test',
      content: '테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트',
      chatLogTime: '2020-08-02T02:23:48.613',
    },
    {
      type: 'MESSAGE',
      chatRoomId: 2,
      nickname: '개발자가되고싶은아이',
      content: '테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트테스트 테스트',
      chatLogTime: '2020-08-02T02:23:48.613',
    },
  ]);

  useEffect(() => {}, []);

  return {
    meNickname,
    chatContents,
  };
}

export default useChatRoomContent;
