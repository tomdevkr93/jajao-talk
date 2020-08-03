import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useRouter } from 'next/router';
import { meState } from '../../recoil/atom';

function useAuth() {
  const router = useRouter();
  const { nickname } = useRecoilValue(meState);

  useEffect(() => {
    if (!nickname) {
      router.push('/login');
    }
  }, [nickname]);

  return {
    message: '사용자 인증 성공',
  };
}
export default useAuth;
