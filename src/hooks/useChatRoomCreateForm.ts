import { meState, createModalPopupState } from './../recoil/atom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { useCallback, useState, useEffect } from 'react';
import axios from '../lib/axios';

type Category = {
  categoryCode: string;
  category: string;
};
function useChatRoomCreateForm() {
  const [subject, setSubject] = useState('');
  const [activeCategoryCode, setActiveCategoryCode] = useState('CATEGORY_FREEDOM');
  const [headCount, setHeadCount] = useState(1);
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const { nickname } = useRecoilValue(meState);
  const [createModelState, setCreateModalState] = useRecoilState(createModalPopupState);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios('/chatroom/categories');
        const categoryList = res.data;
        setCategoryList(categoryList);
      } catch (e) {
        throw new Error(e);
      }
    })();
  }, []);

  useEffect(() => {
    if (createModelState === false) {
      resetFormData();
    }
  }, [createModelState]);

  const onChangeSubject = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(event.target.value);
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

  const resetFormData = useCallback(() => {
    setSubject('');
    setActiveCategoryCode('CATEGORY_FREEDOM');
    setHeadCount(1);
  }, []);

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      try {
        const res: any = await axios.post('/chatroom', {
          nickname,
          categoryCode: activeCategoryCode,
          subject,
          headCount,
        });

        if (res.success) {
          alert(res.message);
          setCreateModalState(false);
        } else {
          alert(res.message);
        }
      } catch (e) {
        throw new Error(e);
      }
    },
    [nickname, subject, activeCategoryCode, headCount],
  );

  return {
    onSubmit,
    onChangeSubject,
    subject,
    onChangeHeadCountRange,
    headCount,
    onClickCategoryItem,
    activeCategoryCode,
    categoryList,
  };
}

export default useChatRoomCreateForm;
