import React, { useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import { useRouter } from 'next/dist/client/router';

const withAuth = (WrappedPageComponent: NextPage) => {
  const FuncComponent = ({ children, ...props }: any) => {
    const router = useRouter();

    useEffect(() => {
      const { nickname } = props;
      if (!nickname) {
        router.push('/login');
      }
    }, []);

    return <WrappedPageComponent {...props}>{children}</WrappedPageComponent>;
  };

  return FuncComponent;
};

export default withAuth;
