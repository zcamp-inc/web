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

export default function RightCard() {
  const router = useRouter();

//   useEffect(() => {
//     router.events.on("routeChangeComplete", onClose);
//     return () => {
//       router.events.off("routeChangeComplete", onClose);
//     };
//   }, [router.events, onClose]);

  return (
    <Box
      transition="1s ease"
      bg="tan"
      w={{ base: "full", md: 80 }}        
      h="full"
      borderRadius="10px "
      borderRight = "1px" 
      borderRightColor = "gray.200"
      // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
    
    >
      
      {/* {LinkItems.map((link, i) => (
        <NavLink key={i} link={link} />
      ))}

      <Divider /> */}

      <Box
        mt="5px"
        borderRadius="10px"
        w={{ base: "full", md: 80 }}
      >
        <Box
          bg="#000a16"
          borderRadius="10px"
          h="280px"
          w={{ base: "full", md: 80 }}
        >
          <Flex borderRadius="10px 10px 0 0">
            <img src="/rewavy.png" width="100%" />
          </Flex>
          <Flex ml={5} mt={2}>
            <Text color="white" fontWeight={400} fontSize={14} w={56} >
              Discover new camps, join and interact with campers.<br/> Define your homefeed with your favorite camps
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
