import React from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/global-styles';
function Content() {
  return (
    <ContentContainer>
      <li className="others">
        <span>개발자가되고싶은아이</span>
        <p>네 반가워요?</p>
      </li>
      <li className="me">
        <p>안녕하세요?</p>
      </li>
      <li className="others">
        <span>개발자가되고싶은아이</span>
        <p>
          네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~ 네
          안녕하세요~네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~ 네 안녕하세요~네 안녕하세요~ 네 안녕하세요~ 네
          안녕하세요~ 네 안녕하세요~
        </p>
      </li>
      <li className="me">
        <p>
          반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
          반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다 반갑습니다
        </p>
      </li>
      <li className="others">
        <span>개발자가되고싶은아이</span>
        <p>네 반가워요?</p>
      </li>
      <li className="me">
        <p>잘 지내셨어요?</p>
      </li>
      <li className="others">
        <span>개발자가되고싶은아이</span>
        <p>네 잘 지냈어요~ oo님은 잘 지내셨어요? 하하하 가나다 라마바사 아자차카 타파하</p>
      </li>
    </ContentContainer>
  );
}

export default Content;

const ContentContainer = styled.ul`
  position: relative;
  padding-bottom: 15px;
  width: 100%;
  height: calc(100% - (45px + 100px));
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }

  li {
    position: relative;
    width: 100%;

    span {
      display: inline-block;
      position: absolute;
      left: 15px;
      top: -18px;
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
    margin-top: 38px;
  }
`;
