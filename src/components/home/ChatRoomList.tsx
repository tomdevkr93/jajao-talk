import React, { useCallback, memo } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/global-styles';
import { useRouter } from 'next/router';
import useChatRoomList from '../../hooks/useChatRoomList';

function ChatRoomList() {
  const router = useRouter();
  const { chatRoomList } = useChatRoomList();

  const onClickChatRoom = useCallback(() => {
    router.push('/chat-room');
  }, []);

  return (
    <List>
      {chatRoomList.map(({ chatRoomId, category, subject, headCount, chatLog: { content, chatLogTime } }) => (
        <li onClick={onClickChatRoom} key={chatRoomId}>
          <header>
            <Category>{category}</Category>
            <Title>
              {subject}
              <HeadCount>&nbsp;({headCount}/5)</HeadCount>
            </Title>
          </header>
          <LastMessage>{content}</LastMessage>
          <LastMessageTime>{chatLogTime}</LastMessageTime>
        </li>
      ))}
    </List>
  );
}
export default memo(ChatRoomList);

const List = styled.ul`
  height: calc(100% - 40px);
  overflow-y: scroll;

  li {
    position: relative;
    padding: 8px 10px;
    height: 80px;
    cursor: pointer;
    user-select: none;
    border-bottom: 1px solid #f8f8f8;
  }

  li:last-of-type {
    border-bottom: none;
  }

  li:hover {
    background-color: #f8f8f8;
  }
`;

const Category = styled.span`
  font-size: 12px;
  color: ${MAIN_COLOR};
`;
const Title = styled.h3`
  font-size: 15px;
  margin-top: 5px;
`;
const HeadCount = styled.span`
  display: inline-block;
  font-size: 14px;
`;
const LastMessage = styled.p`
  margin-top: 8px;
  font-size: 12px;
  color: rgba(131, 131, 131, 0.8);
`;
const LastMessageTime = styled.span`
  position: absolute;
  display: inline-block;
  right: 10px;
  bottom: 8px;
  font-size: 12px;
  color: ${MAIN_COLOR};
`;
