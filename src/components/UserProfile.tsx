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
  Button,
} from "@chakra-ui/react";

import NextLink from "next/link";

import { CgProfile } from "react-icons/cg";
import { FiSettings, FiBookmark, FiLogOut, FiBell } from "react-icons/fi";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useAuth0 } from "@auth0/auth0-react";

import React from "react";

export default function UserProfile() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } =
    useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <HStack spacing={{ base: "0", md: "3" }} ml={1}>
      {!isAuthenticated && (
        <NextLink href="/api/auth/signin" passHref>
          <Button
            onClick={(e: { preventDefault: () => void }) => {
              e.preventDefault();
              loginWithRedirect();
            }}
          >
            {" "}
            Login{" "}
          </Button>
        </NextLink>
      )}

      {isAuthenticated && (
        <Flex
          alignItems="center"
          _hover={{ bg: "#000a16", color: "white" }}
          borderRadius={10}
        >
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: "none" }}
            >
              <HStack spacing="2" align="center" cursor="pointer" p={2}>
                <Avatar size="sm" ml={1} mr={1} src={user?.picture}>
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
                  <Text fontWeight={600} >
                    {user?.nickname}
                  </Text>
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
            <MenuList
              fontSize="lg"
              bg="white"
              color="#000a16"
              borderColor="gray.200"
              display={{ base: "none", md: "flex" }}
            >
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

              <MenuItem
                icon={<FiLogOut />}
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      )}
    </HStack>
  );
}
