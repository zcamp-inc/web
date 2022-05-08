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
import {
  FiHome,
  FiTrendingUp,
  FiSettings,
  FiBookmark,
} from "react-icons/fi";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { BsListStars } from "react-icons/bs";
import NavLink from "./NavLink";


const LinkItems = [
  { label: "Home", icon: FiHome, href: "/" },
  { label: "Trending", icon: FiTrendingUp, href: "#" },
  { label: "Explore", icon: HiOutlineViewGridAdd, href: "#" },
  { label: "Favorites", icon: BsListStars, href: "#" },
  { label: "Settings", icon: FiSettings, href: "#" },
];

export default function LeftBar({ onClose,  ...rest }: { onClose: any}) {
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
      h="390px"
      borderRadius="10px 0 10px 10px "
      borderRight = "1px" 
      borderRightColor = "gray.200"
      // ml={{ base: 0, md: 5 }}
      // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
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

      <Box
        mt='4vh'
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
              You decide your homefeed <br /> Come here to check in and explore
              your favorite subcamps
            </Text>
          </Flex>
          <VStack mt={2}>
            <Button
              w={40}
              color="#000a16"
              bg= "#57FFF5"
              _hover={{ bg: "#57FFF5", color: "#000a16" }}
            >
              Create Post
            </Button>
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
      </Box>
    </Box>
  );
}
