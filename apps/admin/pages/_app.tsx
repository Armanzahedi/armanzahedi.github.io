import { ChakraProvider, CSSReset } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React, { useState } from 'react';
import theme from '../lib/ui/theme';
import '../public/styles/globals.css';
import { Provider } from 'next-auth/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration';
import { ReactQueryDevtools } from 'react-query/devtools';
function CustomApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Welcome to admin!</title>
        </Head>
        <ChakraProvider theme={theme}>
          <CSSReset />
          <Hydrate state={pageProps.dehydratedState}>
            <ReactQueryDevtools />
            <Provider session={pageProps.session}>
              <Component {...pageProps} />
            </Provider>
          </Hydrate>
        </ChakraProvider>
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
