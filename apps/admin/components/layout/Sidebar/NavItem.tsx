import {
  Flex,
  FlexProps,
  Icon,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { ReactElement, ReactNode, ReactText } from 'react';
import { IconType } from 'react-icons';
import NavLink from 'next/link';
import NavItemType from 'apps/admin/lib/ui/types/NavItemType';

interface Props extends FlexProps {
  isActive: boolean;
  icon?: IconType;
  url?: string;
  children?: ReactNode;
}

function NavItem({
  icon,
  isActive,
  url,
  children,
  ...rest
}: Props): ReactElement {
  return (
    <NavLink href={url ?? '#'}>
      <Link>
        <Flex
          align="center"
          color={
            isActive
              ? useColorModeValue('primary.500', 'white')
              : useColorModeValue('gray.500', 'gray.400')
          }
          borderLeft={isActive ? '4px' : '0'}
          fontWeight="medium"
          p="3"
          my="2"
          mr="3"
          bg={isActive ? useColorModeValue('gray.100', '#1E1E1E') : null}
          borderRadius="sm"
          borderRightRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            color: useColorModeValue('primary.500', 'white'),
            borderLeft: '4px',
          }}
          {...rest}
        >
          {icon && (
            <Icon
              ml="4"
              fontSize="20"
              _groupHover={{
                color: useColorModeValue('primary.500', 'white'),
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    </NavLink>
  );
}

export default NavItem;
