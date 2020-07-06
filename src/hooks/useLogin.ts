import { useState, useCallback } from 'react';
import { meState } from './../recoil/atom';
import { useRecoilState } from 'recoil';

function useLogin() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [, setMeState] = useRecoilState(meState);

  const onChangeNickname = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(event.target.value);
  }, []);

  const onChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      // 서버 request -> 성공 -> session storage 저장 -> recoil 저장 -> 채팅 페이지 진입
    },
    [nickname],
  );

  return {
    nickname,
    password,
    onChangeNickname,
    onChangePassword,
    onSubmit,
  };
}

export default useLogin;
