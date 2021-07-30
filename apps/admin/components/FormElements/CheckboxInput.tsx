import React, { ReactElement } from 'react';
import { FieldProps, getIn } from 'formik';
import {
  Box,
  Checkbox,
  CheckboxProps,
  FormErrorMessage,
} from '@chakra-ui/react';

type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export type CheckboxControlProps = Overwrite<
  CheckboxProps,
  { value: string | number }
> & { name: string; label?: string };

interface CheckboxInputProps extends FieldProps {
  label?: string;
  id?: string;
}

function CheckboxInput({
  field,
  form,
  label,
  id,
  ...props
}: CheckboxInputProps): ReactElement {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <Box>
      <Checkbox
        size="sm"
        colorScheme="primary"
        fontWeight="medium"
        color="gray"
        isInvalid={!!errorText}
        id={id ?? field.name}
        isChecked={field.checked}
        onChange={(e) => form.setFieldValue(field.name, e.target.checked)}
      >
        {label}
      </Checkbox>
      {errorText && <FormErrorMessage>{errorText}</FormErrorMessage>}
    </Box>
  );
}

export default CheckboxInput;
