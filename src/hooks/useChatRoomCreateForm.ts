import { useCallback, useState, useEffect } from 'react';
import axios from '../lib/axios';

type Category = {
  categoryCode: string;
  categoryName: string;
};
function useChatRoomCreateForm() {
  const [title, setTitle] = useState('');
  const [activeCategoryCode, setActiveCategoryCode] = useState('CATEGORY_FREEDOM');
  const [headCount, setHeadCount] = useState(1);
  const [categoryList, setCategoryList] = useState<Category[]>([]);

  useEffect(() => {
    // Create an scoped async function in the hook
    async function getCategoryList() {
      try {
        const res = await axios('/chat/category');
        const categoryList = res.data;
        setCategoryList(categoryList);
      } catch (e) {
        throw Error(e);
      }
    }
    // Execute the created function directly
    getCategoryList();
  }, []);

  const onChangeTitle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);

  const onChangeHeadCountRange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadCount(parseInt(event.target.value));
  }, []);

  const onClickCategoryItem = useCallback(
    (categoryCode: string) => () => {
      setActiveCategoryCode(categoryCode);
    },
    [],
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log({ title, activeCategoryCode, headCount });
    },
    [title, activeCategoryCode, headCount],
  );

  return {
    onSubmit,
    onChangeTitle,
    title,
    onChangeHeadCountRange,
    headCount,
    onClickCategoryItem,
    activeCategoryCode,
    categoryList,
  };
}

export default useChatRoomCreateForm;
