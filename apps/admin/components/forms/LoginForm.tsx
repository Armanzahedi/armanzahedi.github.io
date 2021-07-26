import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  Link,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

interface Props {}

const LoginForm = (props: Props) => {
  return (
    <Box my={8} textAlign="left">
      <form>
        <FormControl>
          <FormLabel>آدرس ایمیل</FormLabel>
          <Input type="email" placeholder="ایمیل خود را وارد کنید" />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>رمز عبور</FormLabel>
          <Input type="password" placeholder="رمز عبور خود را وارد کنید" />
        </FormControl>

        <Stack isInline justifyContent="space-between" mt={4}>
          <Box>
            <Checkbox size="sm" fontWeight="medium" color="gray">
              من را به خاطر بسپار
            </Checkbox>
          </Box>
          <Box>
            <Link fontSize="sm" color={`teal.500`}>
              رمز عبور خود را فراموش کرده اید؟
            </Link>
          </Box>
        </Stack>

        <Button
          bg="teal.500"
          color="white"
          _hover={{
            bg: 'teal.600',
          }}
          width="full"
          mt={10}
        >
          ورود
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
