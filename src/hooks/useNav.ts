import { meState } from './../recoil/atom';
import { useCallback, useState } from 'react';
import { useResetRecoilState } from 'recoil';
import { useRouter } from 'next/router';

function useNav() {
  const setMeState = useResetRecoilState(meState);
  const [createModalState, setCreateModalState] = useState(false);
  const router = useRouter();

  const onBackSpace = useCallback(
    (type: string) => () => {
      if (type === 'home') {
        setMeState();
        return;
      }
      if (type === 'chat-room') {
        router.back();
        return;
      }
    },
    [],
  );

  const onCreateChatRoom = useCallback(() => {
    setCreateModalState((prvState) => !prvState);
  }, []);

  return {
    onBackSpace,
    createModalState,
    onCreateChatRoom,
  };
}

export default useNav;
