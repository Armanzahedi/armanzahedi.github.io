import '../public/styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import React from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
