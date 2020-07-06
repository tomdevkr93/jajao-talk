import React from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../utils/global-styles';
import useLogin from '../hooks/useLogin';

function Login() {
  const { nickname, password, onChangeNickname, onChangePassword, onSubmit } = useLogin();

  return (
    <LoginContainer>
      <form id="login" onSubmit={onSubmit}>
        <LoginFormWrapper form="login">
          <legend>로고이미지</legend>
          <input
            type="text"
            placeholder="닉네임"
            value={nickname}
            onChange={onChangeNickname}
            minLength={2}
            maxLength={8}
            required={true}
          />
          <input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
            minLength={4}
            maxLength={15}
            required={true}
          />
          <button>로그인</button>
        </LoginFormWrapper>
      </form>
    </LoginContainer>
  );
}
export default Login;

const LoginContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  height: 100%;
  background-color: ${MAIN_COLOR};
`;

const LoginFormWrapper = styled.fieldset`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;

  legend {
    width: 100%;
  }

  input {
    display: block;
    margin: 0 auto;
    padding: 0.8em;
    width: 80%;
    border: none;
  }
  input::placeholder {
    opacity: 0.5;
  }

  input:first-of-type {
    margin-top: 80px;
    border-radius: 5px 5px 0 0;
  }
  input:last-of-type {
    border-radius: 0 0 5px 5px;
  }

  button {
    margin-top: 0.5em;
    padding: 0.8em;
    width: 80%;
    border: none;
    border-radius: 5px;
    text-align: center;
    cursor: pointer;
  }
`;
