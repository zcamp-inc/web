import { useEffect } from "react";
import { useRouter } from "next/router";

import {
  Box,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text,
  HStack,
  Badge,
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  VStack,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiSettings, FiBookmark } from "react-icons/fi";
import {
  IoMailOutline,
  IoNotificationsOutline,
  IoTrendingUp,
} from "react-icons/io5";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BsListStars } from "react-icons/bs";
import NavLink from "./NavLink";
import UserProfile from "./UserProfile";

const LinkItems = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "Trending", icon: IoTrendingUp, href: "/Trending" },
  { label: "Explore", icon: HiOutlineViewGridAdd, href: "/Explore" },
  { label: "Notifications", icon: IoNotificationsOutline, href: "/" },
  { label: "Messages", icon: IoMailOutline, href: "/" },
  { label: "Favorites", icon: BsListStars, href: "#" },
  { label: "Settings", icon: FiSettings, href: "#" },
];

export default function LeftBar({ onClose, ...rest }: { onClose: any }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", onClose);
    return () => {
      router.events.off("routeChangeComplete", onClose);
    };
  }, [router.events, onClose]);

  return (
    <Box
      transition="1s ease"
      bg="white"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      borderRadius="10px 0 10px 10px "
      borderRight="1px"
      borderRightColor="gray.200"
      // ml={{ base: 0, md: 5 }}
      // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        p={5}
        mx={2}
        justifyContent="space-between"
      >
        <img src="/relogo.png" width="40vh" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}

      
      <UserProfile />

      <Divider />

      {/* <Box
        mt="5px"
        borderRadius="10px"
        p={{ base: 2, md: 0 }}
        w={{ base: "full", md: 60 }}
      >
        <Box
          bg="#000a16"
          borderRadius="10px"
          h="280px"
          w={{ base: "full", md: 60 }}
        >
          <Flex borderRadius="10px 10px 0 0">
            <img src="/rewavy.png" width="100%" />
          </Flex>
          <Flex ml={5} mt={2}>
            <Text color="white" fontWeight={400} fontSize={14} w={56}>
              Discover new camps, join and interact with campers.
              <br /> Define your homefeed with your favorite camps
            </Text>
          </Flex>
          <VStack mt={2}>
            <Button
              w={40}
              variant="outline"
              color="#57FFF5"
              outlineColor="#57FFF5"
              _hover={{ bg: "#57FFF5", color: "#000a16" }}
            >
              Create Subcamp
            </Button>
          </VStack>
        </Box>
      </Box> */}
    </Box>
  );
}
