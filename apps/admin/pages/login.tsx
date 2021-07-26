import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import LoginForm from '../components/forms/LoginForm';
import ThemeSelector from '../components/layout/ThemeSelector';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bg={useColorModeValue('white', 'black')}
    >
      <Box
        borderWidth={1}
        px={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector textAlign="left" py={4} />
        <Box p={4}>
          <Box textAlign="center">
            <Heading as="h2" fontSize="x-large" pb={2}>
              ورود به پنل مدیریت
            </Heading>
            <Text>
              <Link fontSize="sm" color={`teal.500`}>
                لطفا اطلاعات خود را وارد کنید
              </Link>
            </Text>
          </Box>
          <LoginForm />
        </Box>
      </Box>
    </Flex>
  );
}

export default Login;
