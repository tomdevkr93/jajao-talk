import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import media from '../../utils/media-query';
import SearchForm from './SearchForm';
import useNav from '../../hooks/useNav';

function Nav() {
  const { onLogout } = useNav();

  return (
    <NavContainer>
      <SearchForm />
      <ul>
        <li>
          <AddChatRoom title="채팅방 생성" />
        </li>
        <li>
          <Logout title="로그아웃" onClick={onLogout} />
        </li>
      </ul>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.nav`
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

    li {
      display: inline-block;
    }
  }
`;

const AddChatRoom = styled(FaTimes)`
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
