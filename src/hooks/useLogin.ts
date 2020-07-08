import { useState, useCallback } from 'react';
import { meState } from './../recoil/atom';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import { useRouter } from 'next/router';

function useLogin() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
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

      try {
        const {
          data: { nickname: resultNickname },
          message,
        } = await axios.post('/login', {
          nickname,
          password,
        });

        if (resultNickname) {
          // 로그인 성공
          setMeState({
            nickname: resultNickname,
          });
          router.push('/');
        } else {
          // 로그인 실패
          alert(message);
          setPassword('');
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
  };
}

export default useLogin;
