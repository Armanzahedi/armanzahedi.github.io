import {
  Box,
  Drawer,
  DrawerContent,
  useDisclosure,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';
import Header from '../Header/Header';
import SidebarContent from './SidebarContent';

function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Header onOpen={onOpen} />
      <Box>
        <SidebarContent
          onClose={() => onClose}
          display={{ base: 'none', md: 'block' }}
        />
        <Drawer
          autoFocus={false}
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          returnFocusOnClose={false}
          onOverlayClick={onClose}
          size="full"
        >
          <DrawerContent bg={useColorModeValue('white', '#171717')}>
            <SidebarContent onClose={onClose} />
          </DrawerContent>
        </Drawer>
        <Box
          mr={{ base: 0, md: '260' }}
          p={4}
          mt="105px"
          minH="87vh"
          display="block"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
        >
          {children}
        </Box>
      </Box>
    </div>
  );
}

export default SidebarWithHeader;
