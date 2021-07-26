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
});

export default theme;
