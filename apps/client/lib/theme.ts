// theme.ts

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: (props) => ({
      body: {
        bg: props.colorMode === 'dark' ? '#1E1E1E' : 'gray.100',
      },
    }),
  },
  fonts: {
    heading: 'iranYekan',
    body: 'iranYekan',
  },
  shadows: { outline: '0 !important' },
  colors: {
    primary: {
      50: '#f0eefc',
      100: '#d1d0e4',
      200: '#b2b0ce',
      300: '#9390ba',
      400: '#7471a6',
      500: '#5b578c',
      600: '#47446e',
      700: '#32314f',
      800: '#1e1d31',
      900: '#090916',
    },
    // primary: {
    //   50: '#ABC9ED',
    //   100: '#9BBEE9',
    //   200: '#8AB3E5',
    //   300: '#79A8E2',
    //   400: '#689DDE',
    //   500: '#5892DA',
    //   600: '#4688D8',
    //   700: '#357DD4',
    //   800: '#2B72CA',
    //   900: '#2769B9',
    // },
  },
});

export default theme;
