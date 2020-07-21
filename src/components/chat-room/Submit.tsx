import React from 'react';
import styled from 'styled-components';
import { MAIN_COLOR } from '../../utils/global-styles';
function Submit() {
  return (
    <SubmitContainer>
      <textarea></textarea>
      <button>전송</button>
    </SubmitContainer>
  );
}

export default Submit;

const SubmitContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100px;
  border-radius: 0 0 5px 5px;

  textarea {
    width: 75%;
    height: 100%;
    border-radius: 0 0 0 5px;
  }

  textarea:focus {
    outline: none;
  }

  button {
    position: absolute;
    right: 0;
    top: 0;
    width: 25%;
    height: 100%;
    background-color: ${MAIN_COLOR};
    color: white;
    border: none;
    border-radius: 0 0 5px 0;
    cursor: pointer;
  }
`;
