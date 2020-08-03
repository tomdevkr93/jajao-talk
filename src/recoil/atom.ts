import { atom } from 'recoil';
import axios from '../lib/axios';

type ChatRoom = {
  chatRoomId: number;
  chatLog: {
    chatLogId: number;
    content: string;
    chatLogTime: string;
  };
  category: string;
  subject: string;
  headCount: number;
  createdTime: string;
};

export const meState = atom({
  key: 'MeState', // unique ID (with respect to other atoms/selectors)
  default: {
    nickname: '',
  },
});

export const createModalPopupState = atom({
  key: 'CreateModalPopupState',
  default: false,
});

export const chatRoomListState = atom<ChatRoom[]>({
  key: 'ChatRoomListState',
  default: new Promise(async (resolve) => {
    try {
      const { data: chatRoomList } = await axios('/chatrooms', {
        params: {
          subject: '',
          offset: 0,
          limit: 30,
        },
      });
      resolve(chatRoomList);
    } catch (e) {
      throw new Error(e);
    }
  }),
});
