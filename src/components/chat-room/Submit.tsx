import React, { memo, useCallback, useState } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/global-styles';
function Submit() {
  const [message, setMessage] = useState('');

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

  return (
    <SubmitContainer onSubmit={onSubmit}>
      <textarea onKeyDown={onKeyDown} onChange={onChangeMessage} value={message} />
      <button>전송</button>
    </SubmitContainer>
  );
}

export default memo(Submit);

const SubmitContainer = styled.form`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-radius: 0 0 5px 5px;

  textarea {
    padding: 5px;
    width: 75%;
    height: 100%;
    border-radius: 0 0 0 5px;
    font-family: 'Noto Sans KR', 'Noto Sans', sans-serif;
  }

  textarea:focus {
    outline: none;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 25%;
    height: 100%;
    background-color: ${MAIN_COLOR};
    color: white;
    border: none;
    border-radius: 0 0 5px 0;
    cursor: pointer;
  }
`;
