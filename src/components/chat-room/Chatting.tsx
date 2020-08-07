import React, { memo, useEffect, useRef, useCallback } from 'react';
import Submit from './Submit';
import Content from './Content';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { meState } from '../../recoil/atom';

function Chatting() {
  const { query: { id: chatRoomId } } = useRouter();
  const { nickname } = useRecoilValue(meState);
  const webSocket = useRef<WebSocket | null>(
    typeof window !== 'undefined' ? new WebSocket(process.env.NEXT_PUBLIC_BASE_SOCKET_URL as string) : null,
  );

  useEffect(() => {
    if(webSocket.current){
      webSocket.current.onopen = sendEnter;
    }

    return () => {
      if (webSocket.current) {
        sendLeave();
        webSocket.current.close();
        webSocket.current = null;
      }
    };
  }, []);

  const sendEnter = useCallback(() => {
    if (webSocket.current) {
      webSocket.current.send(
        JSON.stringify({
          type: 'ENTER',
          chatRoomId,
          nickname,
        }),
      );
    }
  }, []);

  const sendLeave = useCallback(() => {
    if (webSocket.current) {
      webSocket.current.send(
        JSON.stringify({
          type: 'LEAVE',
          chatRoomId,
          nickname,
        }),
      );
    }
  }, []);

  return (
    webSocket.current && (
      <>
        <Content webSocket={webSocket.current} />
        <Submit webSocket={webSocket.current} />
      </>
    )
  );
}

export default memo(Chatting);
