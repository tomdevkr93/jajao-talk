import { useState, useCallback } from 'react';
import { meState } from './../recoil/atom';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import { useRouter } from 'next/Router';

function useLogin() {
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [, setMeState] = useRecoilState(meState);
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

      // 서버 request -> 성공 -> session storage 저장 -> recoil 저장 -> 채팅 페이지 진입
      // TODO: 백엔드 데이터 연동시 리팩토링 같이 진행
      try {
        const {
          data: { nickname: resultNickname },
        } = await axios.post('/login', {
          nickname,
          password,
        });

        typeof window !== 'undefined' && window.sessionStorage.setItem('nickname', resultNickname);
        setMeState({
          nickname: resultNickname,
        });

        router.push('/');
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
