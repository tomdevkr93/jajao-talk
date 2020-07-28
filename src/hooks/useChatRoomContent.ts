import { useRecoilValue } from 'recoil';
import { useState, useEffect } from 'react';
import { meState } from '../recoil/atom';

type ChatContent = {
  id: number;
  nickname: string;
  content: string;
};

function useChatRoomContent() {
  const { nickname: meNickname } = useRecoilValue(meState);
  const [chatContents] = useState<ChatContent[]>([
    {
      id: 1,
      nickname: '개발자가되고싶은아이',
      content: '네 반가워요?',
    },
    {
      id: 2,
      nickname: 'test',
      content: '안녕하세요?',
    },
    {
      id: 3,
      nickname: '개발자가되고싶은아이',
      content:
        '네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~',
    },
    {
      id: 4,
      nickname: 'test',
      content:
        '반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다',
    },
    {
      id: 5,
      nickname: '개발자가되고싶은아이',
      content: '네 반가워요?',
    },
    {
      id: 6,
      nickname: 'test',
      content: '잘 지내셨어요?',
    },
    {
      id: 7,
      nickname: '개발자가되고싶은아이',
      content: '네 잘 지냈어요~ oo님은 잘 지내셨어요? 하하하 가나다 라마바사 아자차카 타파하',
    },
    {
      id: 8,
      nickname: '개발자가되고싶은아이',
      content: '네 반가워요?',
    },
    {
      id: 9,
      nickname: '개발자가되고싶은아이',
      content: '네 반가워요?',
    },
    {
      id: 10,
      nickname: '개발자가되고싶은아이',
      content: '네 반가워요?',
    },
  ]);

  useEffect(() => {}, []);

  return {
    meNickname,
    chatContents,
  };
}

export default useChatRoomContent;
