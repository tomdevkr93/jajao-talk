import React from 'react';
import styled from 'styled-components';
import Nav from '../../components/common/Nav';
import Chatting from '../../components/chat-room/Chatting';
import useAuth from '../../hooks/auth/useAuth';

function ChatRoom() {
  useAuth();

  return (
    <ChatRoomContainer>
      <Nav type="chat-room" />
      <Chatting />
    </ChatRoomContainer>
  );
}

export default ChatRoom;

const ChatRoomContainer = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 5px black;
`;
