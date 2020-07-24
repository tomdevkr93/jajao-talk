import React from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/global-styles';
function Content() {
  return (
    <ContentContainer>
      <li className="me">
        <p>안녕하세요?</p>
      </li>
      <li className="others">
        <span>devho</span>
        <p>네 안녕하세요~</p>
      </li>
      <li className="me">
        <p>반갑습니다</p>
      </li>
      <li className="others">
        <span>devho</span>
        <p>네 반가워요?</p>
      </li>
      <li className="me">
        <p>잘 지내셨어요?</p>
      </li>
      <li className="others">
        <span>devho</span>
        <p>네 잘 지냈어요~ oo님은 잘 지내셨어요? 하하하 가나다 라마바사 아자차카 타파하</p>
      </li>
    </ContentContainer>
  );
}

export default Content;

const ContentContainer = styled.ul`
  position: relative;
  width: 100%;

  li {
    position: relative;
    width: 100%;
    min-height: 50px;
    margin-top: 15px;

    span {
      display: inline-block;
      position: absolute;
      left: 5px;
      top: -18px;
      font-size: 14px;
    }

    p {
      display: inline-block;
      padding: 8px;
      border-radius: 15px;
      background-color: rgba(0, 0, 0, 0.35);
      color: white;
      font-size: 14px;
      line-height: 1.2;
    }
  }

  li.me > p {
    position: absolute;
    right: 5px;
    background-color: ${MAIN_COLOR};
    color: white;
  }

  li.others {
    margin-left: 5px;
  }
`;
