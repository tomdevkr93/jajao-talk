import React, { memo } from 'react';
import styled from 'styled-components';

type Props = {
  createModalState: boolean;
};

function CreateChatRoomModal({ createModalState }: Props) {
  return <CreateChatRoomModalContainer createModalState={createModalState}></CreateChatRoomModalContainer>;
}

export default memo(CreateChatRoomModal);

const CreateChatRoomModalContainer = styled.div<{ createModalState: boolean }>`
  visibility: ${({ createModalState }) => (createModalState ? 'visible' : 'hidden')};
  opacity: ${({ createModalState }) => (createModalState ? 1 : 0)};
  position: fixed;
  left: 0;
  top: 45px;
  width: 100%;
  height: calc(100% - 45px);
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 0 0 10px 10px;
  z-index: 99;

  transition: opacity 0.5s, visibility 0.5s;
`;
