import { ChatRoom, Category } from './types';
import { chatRoomListState } from './atom';
import { selector } from 'recoil';
import axios from '../lib/axios';

export const chatRoomListQuery = selector<ChatRoom[]>({
  key: 'ChatRoomListQuery',
  get: async ({ get }) => {
    const chatRoomList = get(chatRoomListState);

    if (chatRoomList.length === 0) {
      try {
        const { data: chatRoomList } = await axios('/chatrooms', {
          params: {
            subject: '',
            offset: 0,
            limit: 30,
          },
        });

        return chatRoomList;
      } catch (e) {
        throw new Error(e);
      }
    } else {
      return chatRoomList;
    }
  },
  set: ({ set }, newChatRoom) => {
    set(chatRoomListState, newChatRoom);
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
