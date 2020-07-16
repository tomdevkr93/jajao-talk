import React from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/global-styles';
import useChatRoomCreateForm from '../../hooks/useChatRoomCreateForm';

function ChatRoomCreateForm() {
  const {
    onSubmit,
    onChangeTitle,
    title,
    onClickCategoryItem,
    activeCategoryIndex,
    onChangeHeadCountRange,
    headCount,
  } = useChatRoomCreateForm();

  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor="title">채팅방 제목</label>
      <input
        id="title"
        type="text"
        required={true}
        onChange={onChangeTitle}
        value={title}
        autoComplete="off"
        maxLength={30}
      />
      <label>채팅방 카테고리</label>
      <CategoryList>
        <li className={activeCategoryIndex === 0 ? 'active' : ''} onClick={onClickCategoryItem(0)}>
          #자유
        </li>
        <li className={activeCategoryIndex === 1 ? 'active' : ''} onClick={onClickCategoryItem(1)}>
          #고민
        </li>
        <li className={activeCategoryIndex === 2 ? 'active' : ''} onClick={onClickCategoryItem(2)}>
          #운동
        </li>
        <li className={activeCategoryIndex === 3 ? 'active' : ''} onClick={onClickCategoryItem(3)}>
          #태그4
        </li>
        <li className={activeCategoryIndex === 4 ? 'active' : ''} onClick={onClickCategoryItem(4)}>
          #태그5
        </li>
      </CategoryList>
      <label htmlFor="headCount">
        채팅방 인원수&nbsp;&nbsp;<HeadCount>{headCount}명</HeadCount>
      </label>
      <input
        id="headCount"
        type="range"
        required={true}
        min={1}
        max={5}
        step={1}
        onChange={onChangeHeadCountRange}
        value={headCount}
      />
      <button>채팅방 생성</button>
    </Form>
  );
}

export default ChatRoomCreateForm;

const Form = styled.form`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  width: 100%;
  padding: 0 45px;
  color: white;

  label {
    display: inline-block;
    margin-top: 40px;
    font-size: 16px;
    cursor: pointer;
  }

  input {
    display: block;
    margin-top: 8px;
    padding: 8px;
    width: 100%;
    border-radius: 5px;
    font-size: 14px;
  }

  input[type='range'] {
    cursor: pointer;
  }

  button {
    margin-top: 40px;
    padding: 0.8em;
    width: 100%;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    text-align: center;
    color: ${MAIN_COLOR};
    cursor: pointer;
    background-color: white;
  }
`;

const CategoryList = styled.ul`
  margin-top: 8px;

  & > li {
    display: inline-block;
    padding: 6px 8px;
    margin: 5px;
    border-radius: 5px;
    background-color: rgba(125, 125, 125, 0.9);
    color: white;
    font-size: 14px;
    cursor: pointer;
  }

  & > li.active {
    color: white;
    background-color: ${MAIN_COLOR};
  }
`;

const HeadCount = styled.span`
  color: ${MAIN_COLOR};
`;
