import { useCallback, useState } from 'react';
function useChatRoomCreateForm() {
  const [title, setTitle] = useState('');
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [headCount, setHeadCount] = useState(1);

  const onChangeTitle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  }, []);

  const onChangeHeadCountRange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setHeadCount(parseInt(event.target.value));
  }, []);

  const onClickCategoryItem = useCallback(
    (index: number) => () => {
      setActiveCategoryIndex(index);
    },
    [],
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log({ title, activeCategoryIndex, headCount });
    },
    [title, activeCategoryIndex, headCount],
  );

  return {
    onSubmit,
    onChangeTitle,
    title,
    onChangeHeadCountRange,
    headCount,
    onClickCategoryItem,
    activeCategoryIndex,
  };
}

export default useChatRoomCreateForm;
