import { useState, useCallback } from 'react';
import { meState } from './../recoil/atom';
import { useSetRecoilState } from 'recoil';
import { useRouter } from 'next/router';
import axios from '../lib/axios';

type ResponseLogin = {
  data: { nickname: string };
  message: string;
  status: number;
  success: boolean;
};

function useLogin() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const setMeState = useSetRecoilState(meState);
  const router = useRouter();

  const onChangeNickname = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /[-!$%^&*()_+|~=`{₩}'"[:; \\//<>?,.@#\]]/g;
    const resultNickname = event.target.value;
    if (!regex.test(resultNickname)) {
      setNickname(resultNickname);
    }
  }, []);

  const onChangePassword = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }, []);

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const {
        data: { nickname: responseNickname },
      }: ResponseLogin = await axios.post('/user/login', {
        nickname,
        password,
      });

      try {
        if (responseNickname) {
          // 로그인 성공
          setMeState({
            nickname: responseNickname,
          });
          router.push('/');
        } else {
          // 로그인 실패
          setPassword('');
          setPasswordError(true);
        }
      } catch (e) {
        throw new Error(e);
      }
    },
    [nickname, password],
  );

  return {
    nickname,
    password,
    onChangeNickname,
    onChangePassword,
    onSubmit,
    passwordError,
    setPasswordError,
  };
}

export default useLogin;
