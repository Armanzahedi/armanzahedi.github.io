import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import theme from '../lib/ui/theme';
import '../public/styles/globals.css';
import { Provider } from 'next-auth/client';
import { AuthGuard } from '../contexts/AuthGuard';
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to admin!</title>
      </Head>
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Provider session={pageProps.session}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </>
  );
}

export default CustomApp;
