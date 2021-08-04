import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  Stack,
  ButtonGroup,
} from '@chakra-ui/react';
import React, { useCallback, useState } from 'react';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../FormElements/TextInput';
import PasswordInput from '../FormElements/PasswordInput';
import CheckboxInput from '../FormElements/CheckboxInput';
import { useRouter } from 'next/router';
import { getCsrfToken, signIn } from 'next-auth/client';
import { arrayExtensions } from 'mobx/dist/internal';
import AlertMessage from '../common/AlertMessage';
interface Props {}

const LoginForm = (props: Props) => {
  const router = useRouter();

  // const onSubmit = useCallback(
  //   (values: any, { setSubmitting }) => {
  //     login(values.email, values.password);
  //     setSubmitting(false);
  //     if (user) {
  //       router.push('/');
  //     }
  //   }
  //   ,
  //   []
  // );

  const initialValues = {
    email: 'a@a.com',
    password: '123456',
    // rememberMe: true,
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('ایمیل وارد شده معتبر نیست')
      .required('لطفا ایمیل خود را وارد کنید'),
    password: Yup.string().required('لطفا رمز عبر خود را وارد کنید'),
  });

  return (
    <Box my={8} textAlign="left">
      {/* <AlertMessage description="نام کاربری یا رمز عبور وارد شده پیدا نشد" /> */}
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          signIn('credentials', values)
            .then(() => {
              setSubmitting(false);
              router.push('/');
            })
            .catch((e) => {
              console.log('asdasad');
              alert(e);
            });
        }}
        validationSchema={validationSchema}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <Field
              label="ایمیل"
              name="email"
              placeholder="ایمیل خود را وارد کنید"
              icon={<MdEmail fontSize="20px" color="gray.300" />}
              component={TextInput}
            />
            <Box mt={4} />
            <Field
              label="رمز عبور"
              name="password"
              placeholder="رمز عبور خود را وارد کنید"
              component={PasswordInput}
            />
            <Box py={['20px', '40px']}>
              {/* {JSON.stringify(values, null, 2)}
              <br />
              {JSON.stringify(errors, null, 2)} */}
            </Box>
            <Stack
              isInline
              justify="space-between"
              mt={4}
              flexDir={['column', 'row']}
              align={['flex-start', 'center']}
            >
              <Field
                label="من را به خاطر بسپار"
                name="rememberMe"
                type="checkbox"
                component={CheckboxInput}
              />
              <Box>
                <Link fontSize={['11px', 'sm']} color={`primary.400`}>
                  رمز عبور خود را فراموش کرده اید؟
                </Link>
              </Box>
            </Stack>

            <Button
              bg="primary.400"
              color="white"
              _hover={{
                bg: 'primary.500',
              }}
              width="full"
              mt={10}
              type="submit"
              isLoading={isSubmitting}
            >
              ورود
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default LoginForm;
