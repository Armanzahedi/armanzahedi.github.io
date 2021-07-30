import {
  Box,
  Flex,
  Heading,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { getCsrfToken } from 'next-auth/client';
import { Router, useRouter } from 'next/router';
import React, { useEffect } from 'react';
import LoginForm from '../components/forms/LoginForm';
import ThemeSelector from '../components/layout/ThemeSelector';

/* eslint-disable-next-line */
export interface LoginProps {}

export function Login(props: LoginProps) {
  // const { login, loading, error, user } = useAuth();
  const router = useRouter();
  // const { error } = router.query;
  // useEffect(() => {
  //   if (user) {
  //     router.push('/');
  //   }
  // }, [user]);
  return (
    <Flex
      minHeight="100vh"
      width="full"
      align="center"
      justifyContent="center"
      bg={useColorModeValue('white', '#171717')}
    >
      <Box
        borderWidth={1}
        px={4}
        w="90%"
        maxWidth="500px"
        borderRadius={15}
        textAlign="center"
        boxShadow="lg"
      >
        <ThemeSelector textAlign="left" py={4} />
        <Box p={4}>
          <Box textAlign="center">
            <Heading as="h2" fontSize={['lg', 'x-large']} pb={2}>
              ورود به پنل مدیریت
            </Heading>
            <Text>
              <Link fontSize={['xs', 'sm']} color={`primary.400`}>
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
