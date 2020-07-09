import React from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/global-styles';

function ChatRoomList() {
  return (
    <List>
      <li>
        <header>
          <Category>게임</Category>
          <Title>
            카트라이더 모바일 같이 하실뿐 들어오세요~
            <HeadCount>&nbsp;(4/5)</HeadCount>
          </Title>
        </header>
        <LastMessage>지금 ㄲ?</LastMessage>
        <LastMessageTime>12분전 대화</LastMessageTime>
      </li>
      <li>
        <header>
          <Category>취미</Category>
          <Title>
            주식 쟁이 커먼
            <HeadCount>&nbsp;(3/5)</HeadCount>
          </Title>
        </header>
        <LastMessage>다음 상장 빅히트라는데...</LastMessage>
        <LastMessageTime>46분전 대화</LastMessageTime>
      </li>
      <li>
        <header>
          <Category>일상</Category>
          <Title>
            20대 30대 친구 구합니다!
            <HeadCount>&nbsp;(3/5)</HeadCount>
          </Title>
        </header>
        <LastMessage></LastMessage>
        <LastMessageTime>대화내역 없음</LastMessageTime>
      </li>
      <li>
        <header>
          <Category>게임</Category>
          <Title>
            메이플 쩔해드려요!
            <HeadCount>&nbsp;(2/5)</HeadCount>
          </Title>
        </header>
        <LastMessage>시간당 3억메소에 쩔해드립니다.</LastMessage>
        <LastMessageTime>33분전 대화</LastMessageTime>
      </li>
      <li>
        <header>
          <Category>취미</Category>
          <Title>
            배드민턴 잘치시는분?
            <HeadCount>&nbsp;(4/5)</HeadCount>
          </Title>
        </header>
        <LastMessage>배드민턴 동호회 들어오실레요?</LastMessage>
        <LastMessageTime>56분전 대화</LastMessageTime>
      </li>
    </List>
  );
}
export default ChatRoomList;

const List = styled.ul`
  height: calc(100% - 40px);
  overflow-y: scroll;

  li {
    position: relative;
    padding: 8px 10px;
    height: 80px;
    cursor: pointer;
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
