import { chatRoomListState } from './../recoil/atom';
import { useEffect } from 'react';
import axios from '../lib/axios';
import { useRecoilState } from 'recoil';

function useChatRoomList() {
  const [chatRoomList, setChatRoomList] = useRecoilState(chatRoomListState);

  useEffect(() => {
    (async () => {
      try {
        const res: any = await axios.get('/chatrooms', {
          params: {
            offset: 0,
            limit: 10,
          },
        });

        if (res.success) {
          setChatRoomList(res.data);
        } else {
          throw new Error(res.message);
        }
      } catch (e) {
        throw new Error(e);
      }
    })();
  }, []);

  return {
    chatRoomList,
  };
}

export default useChatRoomList;
