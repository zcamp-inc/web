import { useEffect } from "react";
import { useRouter } from "next/router";

import {
  Box,
  CloseButton,
  Divider,
  Flex,
  Heading,
  Text,
  Avatar,
  Badge,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";
import NavLink from "./NavLink";
import UserProfile from "./UserProfile";

const LinkItems = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "Trending", icon: FiTrendingUp, href: "#" },
  { label: "Explore", icon: FiCompass, href: "#" },
  { label: "Favorite", icon: FiStar, href: "#" },
  { label: "Setting", icon: FiSettings, href: "#" },
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
      transition="3s ease"
      bg="grey"
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="95vh"
      mt="2.5vh"
      left="5"
      {...rest}
    >
      <Flex h="20" alignItems="center" p={4} mx={2} justifyContent="space-between">
        <img src='/homelogo.png' width="40vh"/>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
      <Divider display="flex" />

      <Flex p="5%" flexDir="column" w="100%" alignItems="center" mb={4}>
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex flexDir="column" ml={4} display="flex">
            <Heading as="h3" size="sm">
              Sylwia Weller
            </Heading>
          </Flex>
            <Badge colorScheme="green" ml={1}>Fish</Badge>
        </Flex>
      </Flex>
    </Box>
  );
}
