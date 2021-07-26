import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface Props {
  [x: string]: any;
}

const ThemeSelector = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box {...props}>
      {colorMode === 'dark' ? (
        <IconButton
          bg="transparent"
          size="sm"
          aria-label="dark"
          icon={<FaSun />}
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          background="transparent"
          size="sm"
          aria-label="light"
          icon={<FaMoon />}
          onClick={toggleColorMode}
        />
      )}
    </Box>
  );
};

export default ThemeSelector;
