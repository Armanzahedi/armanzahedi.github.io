import { Box, Flex, Spinner, useColorModeValue } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

interface Props {}

function Loading({}: Props): ReactElement {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bg={useColorModeValue('white', '#171717')}
    >
      <Box w="90%" maxWidth="500px" textAlign="center">
        <Spinner color="primary.500" />
      </Box>
    </Flex>
  );
}

export default Loading;
