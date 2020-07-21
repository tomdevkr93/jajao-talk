import { meState, createModalPopupState } from './../recoil/atom';
import { useCallback } from 'react';
import { useResetRecoilState, useRecoilState } from 'recoil';
import { useRouter } from 'next/router';

function useNav() {
  const setMeState = useResetRecoilState(meState);
  const [createModalState, setCreateModalState] = useRecoilState(createModalPopupState);
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
