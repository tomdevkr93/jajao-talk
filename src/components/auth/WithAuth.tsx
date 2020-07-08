import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { useRecoilValue } from 'recoil';
import { meState } from '../../recoil/atom';

const withAuth = (WrappedPageComponent: NextPage) => {
  const FuncComponent = ({ children, ...props }: any) => {
    const router = useRouter();
    const { nickname } = useRecoilValue(meState);

    useEffect(() => {
      if (!nickname) {
        router.push('/login');
      }
    }, [nickname]);

    return <WrappedPageComponent {...props}>{children}</WrappedPageComponent>;
  };

  return FuncComponent;
};

export default withAuth;
