import React, { ReactElement, useState } from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
} from '@chakra-ui/react';
interface AlertProps {
  title?: string;
  description: string;
}

function AlertMessage({
  title = 'خطا',
  description,
}: AlertProps): ReactElement {
  const [IsShow, setIsShow] = useState(true);
  return (
    <>
      {IsShow && (
        <Alert status="error" borderRadius="md" mb={3}>
          <AlertIcon />
          <AlertTitle ml={3}>{title}</AlertTitle>
          <AlertDescription>{description}</AlertDescription>
          <CloseButton
            onClick={() => setIsShow(false)}
            position="absolute"
            left="8px"
            top="8px"
          />
        </Alert>
      )}
    </>
  );
}

export default AlertMessage;
