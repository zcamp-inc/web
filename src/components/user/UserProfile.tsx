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
  Button,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";

import NextLink from "next/link";
import {
  IoChatbubbleEllipses,
  IoChatbubbleEllipsesOutline,
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
import { FiSettings, FiBookmark, FiLogOut } from "react-icons/fi";
import { RiHome7Fill, RiHome7Line } from "react-icons/ri";
import React from "react";
import { useRouter } from "next/router";
import { useLogoutMutation, useMeQuery } from "../../generated/graphql";

export default function UserProfile({ onOpen, ...rest }: { onOpen: any }) {
  const router = useRouter();
  const [,logout] = useLogoutMutation();
  const [{ data, fetching }] = useMeQuery()
  

  let head = null;
  let mobilehead = null;
  let iconbutton = null;
  if (fetching){
    head
  } else if(!data?.me?.user){
    head = (
      <>
      <NextLink href='/login'>
      <Button ml={3} mr={3} colorScheme='blue' color='white' borderRadius='md' size='sm'>Login</Button>
      </NextLink>
      <NextLink href='/register'>
      <Button mr={3} colorScheme='blue' variant='ghost' borderRadius='md' size='sm'>Register</Button>
      </NextLink>
      </>
    )

    mobilehead = (
      <>
      <NextLink href='/login'>
      <Button ml={3} mr={3} bg='#8225CE' color='white' borderRadius='md' size='sm'>Login</Button>
      </NextLink>
      <NextLink href='/register'>
      <Button mr={3} color='#8225CE' variant='ghost' borderRadius='md' size='sm'>Register</Button>

      </NextLink>
      </>
    )
  } else{
    iconbutton = (
      <HStack spacing={{ base: 1, md: 2 }}>
      

      <NextLink href="/trending" passHref>
        <Flex
          align="center"
          borderRadius="md"
          role="group"
          cursor="pointer"
          color={router.pathname === "/trending" ? "#5E00AB" : "gray.700"}
          // _hover={{
          //   bg: "gray.700",
          //   color: "white",
          // }}
          
          bg={router.pathname === "/trending" ? "#EBD2FF" : "none"}
        >
          <IconButton
            icon={router.pathname === "/trending" ? <IoFlash /> : <IoFlashOutline />}
            borderRadius="md"
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
          borderRadius="md"
          role="group"
          cursor="pointer"
          color={router.pathname === "/explore" ? "#5E00AB" : "gray.700"}
          
         
          bg={router.pathname === "/explore" ? "#EBD2FF" : "none"}
        >
          <IconButton
            icon={router.pathname === "/explore" ? <IoCompass /> : <IoCompassOutline />}
            borderRadius="md"
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
          borderRadius="md"
          role="group"
          cursor="pointer"
          color={router.pathname === "/messages" ? "#5E00AB" : "gray.700"}
          
          mr={{ base: 0, md: 2 }}
          bg={router.pathname === "/messages" ? "#EBD2FF" : "none"}
        >
          <IconButton
            icon={router.pathname === "/messages" ? <IoChatbubbleEllipses /> : <IoChatbubbleEllipsesOutline />}
            borderRadius="md"
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
          borderRadius="md"
          role="group"
          cursor="pointer"
          color={router.pathname === "/notifications" ? "#5E00AB" : "gray.700"}
          
          mr={{ base: 0, md: 2 }}
          bg={router.pathname === "/notifications" ? "#EBD2FF" : "none"}
        >
          <IconButton
            icon={router.pathname === "/notifications" ? <IoNotifications /> : <IoNotificationsOutline />}
            borderRadius="md"
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
    )

    head = (
      <>
     
      <Flex
      alignItems="center"
      _hover={{ bg: "#EBD2FF", color: "#000a16" }}
      borderRadius="md"
      bg={{ base: "none", md: "none" }}
      minW={{ base: 0, md: 40 }}
      h={{ base: 0, md: 12 }}
      display={{ base: 'none', md: 'flex' }}
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
            pr={2}
            display={{ base: "none", md: "flex" }}
          >
            <Avatar src={data.me?.user?.profileImgUrl} size="sm" ml={1} mr={1}>
              {" "}
              <AvatarBadge boxSize="1.25em" bg="green.500" />{" "}
            </Avatar>
            <VStack
              flexDir="column"
              display={{ base: "none", md: "flex" }}
              alignItems="flex-start"
              spacing="1px"
            >
              <Text fontWeight={600} fontSize="0.9em">
               {data.me?.user?.username}
              </Text>
              <Text fontSize="0.7rem">204 Points</Text>
            </VStack>
            <Box display={{ base: "none", md: "flex" }}>
              <IoCaretDown />
            </Box>
          </HStack>
        </MenuButton>
        <MenuList
          // fontSize="md"
          bg="white"
          color="gray.700"
          borderColor="gray.200"
          display={{ base: "none", md: "block" }}
          mt={-2}
        >
          <MenuGroup title="My Stuff" >
            <NextLink href={{ pathname: '/u/[username]', query: { username: data?.me?.user.username} }} passHref>
            <MenuItem icon={<CgProfile />}>
              Profile
             </MenuItem>
            </NextLink>
            <MenuItem icon={<FiBookmark />}>Saved Posts </MenuItem>
            <MenuItem icon={<FiSettings />}>Settings</MenuItem>
          </MenuGroup>
          <MenuDivider />
          <MenuGroup title="Help" >
            <MenuItem>Docs</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </MenuGroup>
          <MenuDivider />
          
            <MenuItem
              icon={<FiLogOut />}              
              onClick={() => {
                logout();
                router.push("/");
              }}
            >
              Logout
            </MenuItem>
         
        </MenuList>
      </Menu>
    </Flex>
</>
    ),
    mobilehead = (
      <>
        
      <HStack
      spacing="2"
      align="center"
      onClick={onOpen}
      cursor="pointer"
      p={2}
      display={{ base: "flex", md: "none" }}
    >
      <Avatar src={data.me?.user?.profileImgUrl} size="sm" ml={1} mr={1}>
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
    </>
    )

  }

  return (
    <HStack spacing={{ base: "0", md: "3" }} ml={1}>
        <Flex
          align="center"
          borderRadius="md"
          role="group"
          cursor="pointer"
          color={router.pathname === "/" ? "#5E00AB" : "gray.700"}
          // _hover={{
          //   // bg: "#DDB2FF",
          //   color: "white",
          //   variant: 'outline'
          // }}
          bg={router.pathname === "/" ? "#EBD2FF" : "none"}
          onClick={() => router.push('/')}
        >
          <IconButton
            icon={router.pathname === "/" ? <RiHome7Fill /> : <RiHome7Line />}
            borderRadius="md"
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

      <Flex>
        { iconbutton }
      </Flex>

      <Flex display={{ base: 'none', md: 'flex'}}>
        { head }
      </Flex>

     
      <IconButton
        icon={<IoApps fontSize={24} />}
        aria-label="More Options"
        variant="ghost"
        display={{ base: "none", md: "flex" }}
        onClick={onOpen}
        isDisabled ={ !data?.me?.user ? true: false }
      />

      {/* Mobile View Avatar */}
      <Flex ml={'auto'} display={{ base: 'flex', md: 'none' }}> {mobilehead} </Flex>
    </HStack>
  );
}
