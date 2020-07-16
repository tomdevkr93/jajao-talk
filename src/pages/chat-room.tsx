import React from 'react';
import styled from 'styled-components';
import withAuth from '../components/auth/WithAuth';
import Nav from '../components/common/Nav';
import Chatting from '../components/chat-room/Chatting';

function ChatRoom() {
  return (
    <ChatRoomContainer>
      <Nav type="chat-room" />
      <Chatting />
    </ChatRoomContainer>
  );
}

export default withAuth(ChatRoom);

const ChatRoomContainer = styled.div`
  width: 100%;
  height: 100%;
`;
