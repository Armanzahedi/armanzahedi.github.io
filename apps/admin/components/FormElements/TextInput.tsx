import React, { ReactElement } from 'react';
import { FieldProps, getIn } from 'formik';
import {
  FormControl as ChakraFormControl,
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
interface TextInputProps extends FieldProps {
  label?: string;
  helperText?: string;
  id?: string;
  icon?: ReactElement;
}

function TextInput({
  field,
  form,
  label,
  helperText,
  id,
  icon,
  ...props
}: TextInputProps): ReactElement {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <FormControl isInvalid={!!errorText}>
      {label && (
        <FormLabel fontSize="sm" htmlFor={field.name}>
          {label}
        </FormLabel>
      )}
      {icon ? (
        <InputGroup>
          <InputRightElement
            pointerEvents="none"
            color="gray.300"
            children={icon}
          />
          <Input fontSize="sm" id={id ?? field.name} {...field} {...props} />
          <InputLeftElement />
        </InputGroup>
      ) : (
        <Input fontSize="sm" id={id ?? field.name} {...field} {...props} />
      )}
      {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
}

export default TextInput;
