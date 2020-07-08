import { atom } from 'recoil';

export const meState = atom({
  key: 'MeState', // unique ID (with respect to other atoms/selectors)
  default: {
    nickname: null,
  },
});
