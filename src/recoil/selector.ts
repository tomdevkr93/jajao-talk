import { selector } from 'recoil';
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

type Category = {
  categoryCode: string;
  category: string;
};

export const chatRoomListQuery = selector<ChatRoom[]>({
  key: 'chatRoomListQuery',
  get: async () => {
    try {
      const { data: chatRoomList } = await axios('/chatrooms', {
        params: {
          subject: '',
          offset: 0,
          limit: 10,
        },
      });
      return chatRoomList;
    } catch (e) {
      throw new Error(e);
    }
  },
});

export const categoryListQuery = selector<Category[]>({
  key: 'categoryListQuery',
  get: async () => {
    try {
      const { data: categoryList } = await axios('/chatroom/categories');
      return categoryList;
    } catch (e) {
      throw new Error(e);
    }
  },
});
