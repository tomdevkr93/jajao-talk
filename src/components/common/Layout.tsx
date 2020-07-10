import React, { ReactNode, useEffect, useState } from 'react';
import styled from 'styled-components';
import media from '../../utils/media-query';
import Loading from './Loading';

type Props = {
  children: ReactNode;
};
function Layout({ children }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 800); // 로딩 1사이클
  }, []);

  return (
    <>
      <LayoutContainer>{children}</LayoutContainer>
      <Loading isLoading={isLoading} />
    </>
  );
}

export default Layout;

const LayoutContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 414px;
  max-height: 900px;

  ${media.tablet`
    width: 95%;
    height: 95%;
  `}
`;
