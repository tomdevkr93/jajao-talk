import React, { useCallback, memo } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/global-styles';
import useChatRoomList from '../../hooks/useChatRoomList';
import Link from 'next/link';

function ChatRoomList() {
  const { chatRoomList } = useChatRoomList();

  const setLastMessageTime = useCallback((chatLogTime: string): number => {
    const logTime = new Date(chatLogTime);
    const diffMinute = Math.ceil((Date.now() - logTime.getTime()) / (1000 * 60));

    return diffMinute;
  }, []);

  return (
    <List>
      {chatRoomList.state === 'hasValue' &&
        chatRoomList.contents.map(({ chatRoomId, category, subject, headCount, chatLog: { content, chatLogTime } }) => (
          <li key={chatRoomId}>
            <Link href="/chat-room/[id]" as={`/chat-room/${chatRoomId}`}>
              <a>
                <header>
                  <Category>{category}</Category>
                  <Title>
                    {subject}
                    <HeadCount>&nbsp;({headCount}/5)</HeadCount>
                  </Title>
                </header>
                <LastMessage>{content}</LastMessage>
                <LastMessageTime className={setLastMessageTime(chatLogTime) < 30 ? 'not-long-after' : ''}>
                  {setLastMessageTime(chatLogTime)}분전 대화
                </LastMessageTime>
              </a>
            </Link>
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

  &.not-long-after {
    color: #fd79a8;
  }
`;
