import React, { memo } from 'react';
import styled from 'styled-components';
import { MAIN_COLOR, hideScrollBar } from '../../utils/global-styles';
import useChatRoomContent from '../../hooks/useChatRoomContent';
function Content() {
  const { meNickname, chatContents } = useChatRoomContent();

  return (
    <ContentContainer>
      {chatContents.map(({ id, nickname, content }) => (
        <li key={id} className={meNickname === nickname ? 'me' : 'others'}>
          {meNickname !== nickname && <span>{nickname}</span>}
          <p>{content}</p>
        </li>
      ))}
    </ContentContainer>
  );
}

export default memo(Content);

const ContentContainer = styled.ul`
  position: relative;
  padding-bottom: 15px;
  width: 100%;
  height: calc(100% - (45px + 100px));
  overflow-y: scroll;
  ${hideScrollBar}

  li {
    position: relative;
    width: 100%;

    span {
      display: inline-block;
      position: absolute;
      left: 15px;
      top: -17px;
      font-size: 12px;
    }

    p {
      display: inline-block;
      max-width: 300px;
      margin: 0 10px;
      padding: 8px;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0.35);
      color: white;
      font-size: 13px;
      line-height: 1.3;
      text-align: left;
    }
  }

  li.me {
    margin-top: 20px;
    text-align: right;

    p {
      background-color: ${MAIN_COLOR};
      color: white;
    }
  }

  li.others {
    margin-top: 37px;
  }
`;
