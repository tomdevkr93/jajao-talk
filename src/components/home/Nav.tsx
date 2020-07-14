import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import media from '../../utils/media-query';
import SearchForm from './SearchForm';
import useNav from '../../hooks/useNav';
import CreateChatRoomModal from './CreateChatRoomModal';

function Nav() {
  const { onLogout } = useNav();
  const [createModalState, setCreateModalState] = useState(false);

  const onCreateChatRoom = useCallback(() => {
    setCreateModalState((prvState) => !prvState);
  }, []);

  return (
    <NavContainer createModalState={createModalState}>
      <SearchForm />
      <ul>
        <li>
          <CreateChatRoom title="채팅방 생성" onClick={onCreateChatRoom} />
        </li>
        <li>
          <Logout title="로그아웃" onClick={onLogout} />
        </li>
      </ul>
      <CreateChatRoomModal createModalState={createModalState} />
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.nav<{ createModalState: boolean }>`
  position: relative;
  width: 100%;
  height: 45px;
  background-color: #3c4043;

  ${media.tablet`
    border-radius: 10px 10px 0 0;
  `}

  ul {
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

const Logout = styled(FaTimes)`
  margin-left: 8px;
  padding: 4px;
  width: 23px;
  height: 23px;
  color: #990100;
  background-color: #f74e48;
  border-radius: 50%;
  transform: translateY(1px);
  cursor: pointer;
`;
