import { chatRoomListState } from './../recoil/atom';
import { useRecoilValueLoadable } from 'recoil';

function useChatRoomList() {
  const chatRoomList = useRecoilValueLoadable(chatRoomListState);

  return {
    chatRoomList,
  };
}

export default useChatRoomList;
