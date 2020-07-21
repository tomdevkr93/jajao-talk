import React, { memo } from 'react';
import styled, { css } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import media from '../../utils/media-query';
import SearchForm from '../home/SearchForm';
import useNav from '../../hooks/useNav';
import CreateChatRoomModal from '../home/CreateChatRoomModal';
import { RootPage } from '../../pages';

type Props = RootPage;

function Nav({ type }: Props) {
  const { onBackSpace, onCreateChatRoom, createModalState } = useNav();

  return (
    <NavContainer createModalState={createModalState}>
      <SearchForm type={type} />
      <ul>
        <li>{type === 'home' && <CreateChatRoom title="채팅방 생성" onClick={onCreateChatRoom} />}</li>
        <li>
          <BackSpace title="뒤로가기" onClick={onBackSpace(type)} />
        </li>
      </ul>
      <CreateChatRoomModal />
    </NavContainer>
  );
}

export default memo(Nav);

const NavContainer = styled.nav<{ createModalState: boolean }>`
  position: relative;
  width: 100%;
  height: 45px;
  background-color: #3c4043;

  ${media.tablet`
    border-radius: 10px 10px 0 0;
  `}

  & > ul {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;

    li {
      display: inline-block;
      transition: transform 0.5s;
    }

    ${({ createModalState }) =>
      createModalState &&
      css`
        li:first-of-type {
          position: relative;
          transform: translate(20px, 60px) scale(1.2) rotate(225deg);
        }
      `}
  }
`;

const CreateChatRoom = styled(FaTimes)`
  padding: 4px;
  width: 23px;
  height: 23px;
  color: #006400;
  background-color: #29cf42;
  border-radius: 50%;
  transform: rotate(45deg);
  cursor: pointer;
`;

const BackSpace = styled(FaTimes)`
  margin-left: 10px;
  padding: 4px;
  width: 23px;
  height: 23px;
  color: #990100;
  background-color: #f74e48;
  border-radius: 50%;
  transform: translateY(1px);
  cursor: pointer;
`;
