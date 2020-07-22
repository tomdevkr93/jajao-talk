import { atom } from 'recoil';

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

export const chatRoomListState = atom({
  key: 'ChatRoomListState',
  default: [],
});
