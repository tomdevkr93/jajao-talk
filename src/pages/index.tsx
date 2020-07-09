import React from 'react';
import WithAuth from '../components/auth/WithAuth';
import { useRecoilValue } from 'recoil';
import { meState } from '../recoil/atom';
import styled from 'styled-components';
import media from '../utils/media-query';

function Home() {
  const { nickname } = useRecoilValue(meState);

  return <HomeContainer>Hello World! {nickname}</HomeContainer>;
}

export default WithAuth(Home);

const HomeContainer = styled.div`
  width: 100%;
  height: 100%;

  ${media.tablet`
    border-radius: 20px;
    box-shadow: 0px 0px 5px black;
  `}
`;
