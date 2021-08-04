import { Box, IconButton, useColorMode } from '@chakra-ui/react';
import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

interface Props {
  [x: string]: any;
  onClick: () => void;
  isDarkMode: boolean;
}

const ThemeSelector = ({ onClick, isDarkMode, ...rest }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box {...rest}>
      {isDarkMode ? (
        <IconButton
          bg="transparent"
          size="sm"
          aria-label="dark"
          icon={<FaSun />}
          onClick={onClick}
        />
      ) : (
        <IconButton
          background="transparent"
          size="sm"
          aria-label="light"
          icon={<FaMoon />}
          onClick={onClick}
        />
      )}
    </Box>
  );
};

export default ThemeSelector;
