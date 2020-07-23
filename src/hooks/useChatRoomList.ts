import { chatRoomListQuery } from './../recoil/selector';
import { useRecoilValueLoadable } from 'recoil';

function useChatRoomList() {
  const chatRoomList = useRecoilValueLoadable(chatRoomListQuery);

  return {
    chatRoomList,
  };
}

export default useChatRoomList;
