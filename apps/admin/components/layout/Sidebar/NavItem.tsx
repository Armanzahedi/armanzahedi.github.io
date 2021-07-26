import {
  Flex,
  FlexProps,
  Icon,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { ReactElement, ReactNode, ReactText } from "react";
import { IconType } from "react-icons";

interface Props extends FlexProps {
  icon?: IconType;
  children?: ReactNode;
}

function NavItem({ icon, children, ...rest }: Props): ReactElement {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        color={useColorModeValue("gray.500", "gray.400")}
        fontWeight="medium"
        p="3"
        mr="4"
        borderRadius="sm"
        role="group"
        cursor="pointer"
        _hover={{
          color: useColorModeValue("blue.600", "white"),
          borderLeft: "4px",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            ml="4"
            fontSize="20"
            _groupHover={{
              color: useColorModeValue("blue.600", "white"),
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
}

export default NavItem;
