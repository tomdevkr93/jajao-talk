import { selector } from 'recoil';
import axios from '../lib/axios';

type Category = {
  categoryCode: string;
  category: string;
};

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
