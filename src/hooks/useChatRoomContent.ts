import { useRecoilValue } from 'recoil';
import { useState, useEffect, useCallback } from 'react';
import { meState } from '../recoil/atom';

type ChatContent = {
  type: 'ENTER' | 'MESSAGE' | 'LEAVE';
  chatRoomId: number;
  nickname: string;
  content: string;
  chatLogTime: string;
};

function useChatRoomContent(webSocket: WebSocket) {
  const { nickname: meNickname } = useRecoilValue(meState);
  const [chatContents, setChatContents] = useState<ChatContent[]>([]);

  useEffect(() => {
    webSocket.onmessage = onMessage;
  }, []);

  const onMessage = useCallback((event: MessageEvent) => {
    const newMessage = JSON.parse(event.data);
    setChatContents((prevState) => [...prevState, newMessage]);
  }, []);

  return {
    meNickname,
    chatContents,
  };
}

export default useChatRoomContent;
