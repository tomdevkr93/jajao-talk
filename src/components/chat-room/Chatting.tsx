import React, { memo } from 'react';
import Submit from './Submit';
import Content from './Content';

function Chatting() {
  return (
    <>
      <Content />
      <Submit />
    </>
  );
}

export default memo(Chatting);
