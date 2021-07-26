import {
  Box,
  BoxProps,
  Flex,
  useColorModeValue,
  Text,
  CloseButton,
  useDisclosure,
  Collapse,
  Icon,
} from "@chakra-ui/react";
import { transform } from "framer-motion";
import React, { Fragment, ReactElement } from "react";
import { IconType } from "react-icons";
import {
  FiCompass,
  FiHome,
  FiSettings,
  FiStar,
  FiTrendingUp,
} from "react-icons/fi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import NavItem from "./NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  children?: LinkItemProps[];
}
const LinkItems: Array<LinkItemProps> = [
  { name: "خانه", icon: FiHome },
  { name: "مطالب", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  {
    name: "Settings",
    icon: FiSettings,
    children: [
      { name: "Fuck", icon: FiStar },
      { name: "You", icon: FiTrendingUp },
    ],
  },
];

interface Props extends BoxProps {
  onClose: () => void;
}

function SidebarContent({ onClose, ...rest }: Props): ReactElement {
  const integrations = useDisclosure();
  return (
    <Box
      bg={useColorModeValue("white", "#171717")}
      w={{ base: "full", md: 60 }}
      m="5"
      top={{ base: "0", md: "95px" }}
      pos="fixed"
      h="85%"
      borderRadius="15"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        mx="8"
        justifyContent="space-between"
        display={{ base: "flex", md: "none" }}
      >
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton onClick={onClose} />
      </Flex>
      <Box mt={{ base: "none", md: "5" }}>
        {LinkItems.map((link, i) => {
          if (link.children != null && link.children.length > 0) {
            return (
              <Fragment key={link.name}>
                <NavItem
                  icon={link.icon}
                  key={link.name}
                  onClick={integrations.onToggle}
                >
                  Integrations
                  <Icon
                    as={MdKeyboardArrowLeft}
                    mr="auto"
                    ml={{ base: "7", md: "0" }}
                    style={{
                      transform: integrations.isOpen ? "rotate(90deg)" : "",
                    }}
                    transition=".5s ease"
                  />
                </NavItem>
                <Collapse in={integrations.isOpen}>
                  <Box></Box>
                  <NavItem pr="12" py="2">
                    Shopify
                  </NavItem>
                  <NavItem pr="12" py="2">
                    Slack
                  </NavItem>
                  <NavItem pr="12" py="2">
                    Zapier
                  </NavItem>
                </Collapse>
              </Fragment>
            );
          } else {
            return (
              <NavItem key={link.name} icon={link.icon}>
                {link.name}
              </NavItem>
            );
          }
        })}
      </Box>
    </Box>
  );
}

export default SidebarContent;
