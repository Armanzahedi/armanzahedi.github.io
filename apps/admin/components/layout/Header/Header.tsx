import {
  Flex,
  FlexProps,
  IconButton,
  useColorModeValue,
  Text,
  HStack,
  Menu,
  MenuButton,
  Avatar,
  VStack,
  Box,
  MenuList,
  MenuItem,
  MenuDivider,
  Image,
  useColorMode,
} from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import { FiBell, FiChevronDown, FiMenu } from 'react-icons/fi';
import { FaMoon, FaSun } from 'react-icons/fa';
import ThemeSelector from '../ThemeSelector';
interface Props extends FlexProps {
  onOpen: () => void;
}

function Header({ onOpen, ...rest }: Props): ReactElement {
  return (
    <Box
      width="100vw"
      top="0"
      right="0"
      pos="fixed"
      bg={useColorModeValue('white', '#171717')}
    >
      <Flex
        px="10"
        py="2"
        alignItems="center"
        justifyContent="space-between"
        {...rest}
      >
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          variant="outline"
          aria-label="open menu"
          border="none"
          bg={useColorModeValue('white', '#1E1E1E')}
          icon={<FiMenu />}
        />

        <Text
          display={{ base: 'none', md: 'flex' }}
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          mr="8"
        >
          Logo
        </Text>
        <Flex alignItems="center" justifyContent="space-between">
          <HStack spacing={{ base: '3', md: '6' }}>
            <ThemeSelector />
            <IconButton
              size="sm"
              variant="ghost"
              aria-label="open menu"
              icon={<FiBell />}
            />
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  py={2}
                  transition="all 0.3s"
                  _focus={{ boxShadow: 'none' }}
                >
                  <HStack>
                    <Image
                      boxSize="40px"
                      borderRadius="lg"
                      objectFit="cover"
                      src="https://bit.ly/dan-abramov"
                      alt="User"
                    />
                    <VStack
                      display={{ base: 'none', md: 'flex' }}
                      alignItems="flex-start"
                      spacing="1px"
                      mr="2"
                      pl="8"
                    >
                      <Text fontSize="sm">Justina Clark</Text>
                      <Text fontSize="xs" color="gray.600">
                        Admin
                      </Text>
                    </VStack>
                    <Box display={{ base: 'none', md: 'flex' }}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList
                  bg={useColorModeValue('white', '#171717')}
                  borderColor={useColorModeValue('gray.200', '#171717')}
                >
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Billing</MenuItem>
                  <MenuDivider />
                  <MenuItem>Sign out</MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </HStack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
