import React from 'react';
import WithAuth from '../components/auth/WithAuth';

function Home({ nickname }: any) {
  return <>Hello World! {nickname} </>;
}

export default WithAuth(Home);
