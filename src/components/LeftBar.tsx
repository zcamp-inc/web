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
  Popover,
  PopoverTrigger,
  Portal,
  PopoverContent,
  PopoverHeader,
  PopoverArrow,
  PopoverCloseButton,
 
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
} from "react-icons/fi";

import { HiOutlineViewGridAdd } from 'react-icons/hi';

import NavLink from "./NavLink";
import UserProfile from "./UserProfile";

const LinkItems = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "Trending", icon: FiTrendingUp, href: "#" },
  { label: "Explore", icon: HiOutlineViewGridAdd, href: "#" },
  { label: "Favorite", icon: FiStar, href: "#" },
  { label: "Settings", icon: FiSettings, href: "#" },
];

export default function LeftBar({ onClose, ...rest }: { onClose: any}) {
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
      h="95vh"

      left="5"
      borderRadius="30px 0 0 30px "
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      {...rest}
    >
      <Flex
        h="20"
        alignItems="center"
        p={4}
        mx={2}
        justifyContent="space-between"
      >
        <img src="/homelogo.png" width="40vh" />
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}
      
    </Box>
  );
}
