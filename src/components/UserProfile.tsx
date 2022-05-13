import {
  IconButton,
  Avatar,
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  MenuGroup,
  Badge,
  VStack,
  AvatarBadge,
  Link,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { CgProfile } from "react-icons/cg";
import {
  FiChevronDown,
  FiSettings,
  FiBookmark,
  FiLogOut,
  FiBell,
} from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


export default function UserProfile() {
  return (
    <HStack spacing={{ base: "0", md: "3" }} ml={1}>      
      <Flex alignItems="center" _hover={{ bg: "#000a16", color: "white" }} borderRadius={10}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}

          >
            <HStack
              spacing="2"
              align="center"
              cursor="pointer"              
              p={2}
              
            >
              <Avatar size="sm" ml={1} mr={2}>
                {" "}
                <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
              </Avatar>
              <VStack
                flexDir="column"
                // ml={2}
                // mr={1}
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
              >
                <Heading as="h3" size="sm">
                  Jane TestGg
                </Heading>
                <Text>204 Points</Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <Badge colorScheme="green" ml={1} mr={4} variant="outline">
                  Fish
                </Badge>
                <HiOutlineDotsHorizontal />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList fontSize="lg" bg="white" color="#000a16" borderColor="gray.200" display={{ base: "none", md: "flex"}}>
            <MenuGroup title="My Stuff">
              <MenuItem icon={<CgProfile />}>Profile</MenuItem>
              <MenuItem icon={<FiBookmark />}>Saved Posts </MenuItem>
              <MenuItem icon={<FiSettings />}>Settings</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help">
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <NextLink href="/login" passHref>
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </NextLink>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  );
}
