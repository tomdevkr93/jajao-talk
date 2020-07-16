import React from 'react';
import WithAuth from '../components/auth/WithAuth';
import styled from 'styled-components';
import media from '../utils/media-query';
import ChatRoomList from '../components/home/ChatRoomList';
import Nav from '../components/common/Nav';

export type RootPage = {
  type: 'home' | 'chat-room';
};

function Home() {
  return (
    <HomeContainer>
      <Nav type="home" />
      <ChatRoomList />
    </HomeContainer>
  );
}

export default WithAuth(Home);

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  ${media.tablet`
    border-radius: 10px;
    box-shadow: 0px 0px 5px black;
  `}
`;
