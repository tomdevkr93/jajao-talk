import { useState, useCallback, useEffect } from 'react';
function useChatRoomSubmit() {
  const [message, setMessage] = useState('');

  useEffect(() => {}, []);

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

  const onSubmit = useCallback(
    (event?: React.FormEvent<HTMLFormElement>) => {
      if (event) {
        event.preventDefault();
      }
      if (message.length === 0) {
        return;
      }

      console.log(message);
      setTimeout(() => {
        setMessage('');
      });
    },
    [message],
  );

  return { onChangeMessage, onKeyDown, onSubmit, message };
}

export default useChatRoomSubmit;
