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
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import {
  IoMailOutline,
  IoMail,
  IoNotificationsOutline,
  IoNotifications,
  IoCompassOutline,
  IoCompass,
  IoApps,
  IoCaretDown,
  IoFlashOutline,
  IoFlash
} from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FiHome, FiSettings, FiBookmark, FiLogOut } from "react-icons/fi";
import { RiHome7Fill, RiHome7Line } from "react-icons/ri";
import React from "react";
import { useRouter } from "next/router";

export default function UserProfile({ onOpen, ...rest }: { onOpen: any }) {
  const router = useRouter();
  return (
    <HStack spacing={{ base: "0", md: "3" }} ml={1}>
      <HStack spacing={{ base: 1, md: 2 }}>
        <NextLink href="/" passHref>
          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color={router.pathname === "/" ? "#57FFF5" : "#000a16"}
            // _hover={{
            //   // bg: "#DDB2FF",
            //   color: "white",
            //   variant: 'outline'
            // }}
            mr={{ base: 0, md: 2 }}
            bg={router.pathname === "/" ? "#000a16" : "none"}
          >
            <IconButton
              icon={router.pathname === "/" ? <RiHome7Fill /> : <RiHome7Line />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Home"
              variant="ghost"
            />
            <Text
              ml="1"
              display={{
                base: "none",
                md: router.pathname === "/" ? "flex" : "none",
              }}
              pr={2}
            >
              Home
            </Text>
          </Flex>
        </NextLink>

        <NextLink href="/trending" passHref>
          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color={router.pathname === "/trending" ? "#57FFF5" : "#000a16"}
            // _hover={{
            //   bg: "#000a16",
            //   color: "white",
            // }}
            mr={{ base: 0, md: 2 }}
            bg={router.pathname === "/trending" ? "#000a16" : "none"}
          >
            <IconButton
              icon={router.pathname === "/trending" ? <IoFlash /> : <IoFlashOutline />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Trending"
              variant="ghost"
            />
            <Text
              ml="1"
              display={{
                base: "none",
                md: router.pathname === "/trending" ? "flex" : "none",
              }}
              pr={2}
            >
              Trending
            </Text>
          </Flex>
        </NextLink>

        <NextLink href="/explore" passHref>
          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color={router.pathname === "/explore" ? "#57FFF5" : "#000a16"}
            
            mr={{ base: 0, md: 2 }}
            bg={router.pathname === "/explore" ? "#000a16" : "none"}
          >
            <IconButton
              icon={router.pathname === "/explore" ? <IoCompass /> : <IoCompassOutline />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Explore"
              variant="ghost"
            />
            <Text
              ml="1"
              display={{
                base: "none",
                md: router.pathname === "/explore" ? "flex" : "none",
              }}
              pr={2}
            >
              Explore
            </Text>
          </Flex>
        </NextLink>

        <NextLink href="/messages" passHref>
          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color={router.pathname === "/messages" ? "#57FFF5" : "#000a16"}
            
            mr={{ base: 0, md: 2 }}
            bg={router.pathname === "/messages" ? "#000a16" : "none"}
          >
            <IconButton
              icon={router.pathname === "/messages" ? <IoMail /> : <IoMailOutline />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Messages"
              variant="ghost"
            />
            <Text
              ml="1"
              display={{
                base: "none",
                md: router.pathname === "/messages" ? "flex" : "none",
              }}
              pr={2}
            >
              Messages
            </Text>
          </Flex>
        </NextLink>

        <NextLink href="/notifications" passHref>
          <Flex
            align="center"
            borderRadius="full"
            role="group"
            cursor="pointer"
            color={router.pathname === "/notifications" ? "#57FFF5" : "#000a16"}
            
            mr={{ base: 0, md: 2 }}
            bg={router.pathname === "/notifications" ? "#000a16" : "none"}
          >
            <IconButton
              icon={router.pathname === "/notifications" ? <IoNotifications /> : <IoNotificationsOutline />}
              borderRadius="full"
              fontSize={{ base: 24, md: 26 }}
              // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
              _hover={{ color: "none", bg: "none" }}
              aria-label="Notification"
              variant="ghost"
            />
            <Text
              ml="1"
              display={{
                base: "none",
                md: router.pathname === "/notifications" ? "flex" : "none",
              }}
              pr={2}
            >
              Notifications
            </Text>
          </Flex>
        </NextLink>
      </HStack>

      <Flex
        alignItems="center"
        _hover={{ bg: "#000a16", color: "white" }}
        borderRadius="full"
        bg={{ base: "none", md: "gray.200" }}
        minW={{ base: 0, md: 40 }}
        h={{ base: 0, md: 12 }}
      >
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
              display={{ base: "none", md: "flex" }}
            >
              <Avatar size="sm" ml={1} mr={1}>
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
                <Text fontWeight={600} fontSize="0.9em">
                  John Doe
                </Text>
                <Text fontSize="0.7rem">204 Points</Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                {/* <Badge colorScheme="green" ml={1} mr={4} variant="outline">
                    Fish
                  </Badge> */}
                <IoCaretDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            fontSize="full"
            bg="white"
            color="#000a16"
            borderColor="gray.200"
            display={{ base: "none", md: "flex" }}
          >
            <MenuGroup title="My Stuff" width={40}>
              <MenuItem icon={<CgProfile />}>Profile</MenuItem>
              <MenuItem icon={<FiBookmark />}>Saved Posts </MenuItem>
              <MenuItem icon={<FiSettings />}>Settings</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuGroup title="Help" width={20}>
              <MenuItem>Docs</MenuItem>
              <MenuItem>FAQ</MenuItem>
            </MenuGroup>
            <MenuDivider />
            <NextLink href="/login" passHref>
              <MenuItem
                icon={<FiLogOut />}
                width={40}
                // onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </MenuItem>
            </NextLink>
          </MenuList>
        </Menu>
      </Flex>
      <IconButton
        icon={<IoApps fontSize={24} />}
        aria-label="More Options"
        variant="ghost"
        display={{ base: "none", md: "flex" }}
        onClick={onOpen}
      />

      {/* Mobile View Avatar */}
      <HStack
        spacing="2"
        align="center"
        onClick={onOpen}
        cursor="pointer"
        p={2}
        display={{ base: "flex", md: "none" }}
      >
        <Avatar size="sm" ml={1} mr={1}>
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
          <Text fontWeight={600} fontSize="0.9em">
            John Doe
          </Text>
          <Text fontSize="0.7rem">204 Points</Text>
        </VStack>
        <Box display={{ base: "none", md: "flex" }}>
          {/* <Badge colorScheme="green" ml={1} mr={4} variant="outline">
                    Fish
                  </Badge> */}
          <IoCaretDown />
        </Box>
      </HStack>
    </HStack>
  );
}
