import { useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useRecoilValue } from 'recoil';
import { meState } from '../recoil/atom';
function useChatRoomSubmit(webSocket: WebSocket) {
  const [message, setMessage] = useState('');
  const { nickname } = useRecoilValue(meState);
  const router = useRouter();

  const onChangeMessage = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (event.keyCode === 13) {
        onSubmit();
      }
    },
    [message],
  );

  const sendMessage = useCallback((message: string) => {
    const {query: { id: chatRoomId }} = router;
    
    webSocket.send(
      JSON.stringify({
        type: 'MESSAGE',
        chatRoomId,
        nickname,
        content: message,
      }),
    );
  }, []);

  const onSubmit = useCallback(
    (event?: React.FormEvent<HTMLFormElement>) => {
      if (event) {
        event.preventDefault();
      }
      if (message.length === 0) {
        return;
      }

      sendMessage(message);
      setTimeout(() => {
        setMessage('');
      });
    },
    [message],
  );

  return { onChangeMessage, onKeyDown, onSubmit, message };
}

export default useChatRoomSubmit;
