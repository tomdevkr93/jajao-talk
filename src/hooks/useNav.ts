import { meState } from './../recoil/atom';
import { useCallback } from 'react';
import { useResetRecoilState } from 'recoil';
function useNav() {
  const setMeState = useResetRecoilState(meState);

  const onLogout = useCallback(() => {
    setMeState();
  }, []);

  return {
    onLogout,
  };
}

export default useNav;
