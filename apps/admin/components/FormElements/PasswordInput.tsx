import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import React, { ReactElement, useState } from 'react';
import { FieldProps, getIn } from 'formik';
import { FaEye, FaEyeSlash, FaLock } from 'react-icons/fa';

interface PasswordInputProps extends FieldProps {
  label?: string;
  helperText?: string;
  id?: string;
  showable?: string;
}
PasswordInput.defaultProps = {
  showable: true,
};
function PasswordInput({
  field,
  form,
  label,
  helperText,
  id,
  showable,
  ...props
}: PasswordInputProps): ReactElement {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  const [showPassword, setShowPassword] = useState(false);
  const handleShow = () => setShowPassword(!showPassword);
  return (
    <FormControl isInvalid={!!errorText}>
      {label && (
        <FormLabel fontSize="sm" htmlFor={field.name}>
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          color="gray.300"
          children={<FaLock color="gray.300" />}
        />
        <Input
          fontSize="sm"
          type={showPassword ? 'text' : 'password'}
          id={id ?? field.name} 
          {...field}
          {...props}
        />
        {showable ? (
          <InputLeftElement color="gray.300">
            <Button
              h="1.75rem"
              p={0}
              bg="transparent"
              _hover={{
                bg: 'transparent',
              }}
              _active={{
                bg: 'transparent',
              }}
              onClick={handleShow}
            >
              {showPassword ? (
                <FaEyeSlash color="gray.300" />
              ) : (
                <FaEye color="gray.300" />
              )}
            </Button>
          </InputLeftElement>
        ) : (
          <InputLeftElement />
        )}
      </InputGroup>
      {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export default PasswordInput;
