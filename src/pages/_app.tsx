import React from 'react';
import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import GlobalStyles from '../utils/global-styles';
import Head from 'next/head';
import { RecoilRoot } from 'recoil';
import Layout from '../components/common/Layout';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({ Component, pageProps }: any) => {
  return (
    <>
      <Head>
        <title>JAJAO TALK</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0" />
        <meta name="description" content="JAJAO TALK" />
        <meta name="author" content="Lee Chanho<devho813@gmail.com>" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />

        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyles />
      <Layout>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
      </Layout>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }: AppContext): Promise<AppInitialProps> => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return { pageProps };
};

export default MyApp;
