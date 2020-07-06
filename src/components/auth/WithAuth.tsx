import React, { useEffect } from 'react';
import { NextPage, NextPageContext } from 'next';
import Cookies from 'universal-cookie';
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

  FuncComponent.getInitialProps = async (ctx: NextPageContext) => {
    const props = WrappedPageComponent.getInitialProps && (await WrappedPageComponent.getInitialProps(ctx));
    let nickname = null;

    if (ctx && ctx.req) {
      // SSR
      const cookies = new Cookies(ctx.req?.headers?.cookie);
      nickname = cookies.get('nickname');
    } else {
      // CSR
      const cookies = new Cookies();
      nickname = cookies.get('nickname');
    }

    return { nickname, ...props };
  };

  return FuncComponent;
};

export default withAuth;
