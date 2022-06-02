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
  Image,
} from "@chakra-ui/react";

export default function LeftBar() {
  return (
    <Box
      w={{ base: "full", md: 80 }}
      pos="fixed"
      zIndex="2"
      // ml={{ base: 0, md: 5 }}
      // boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
    >
       <Box borderRadius="10px" px={1} pt={4}>
        <Box bg="#000a16" borderRadius="10px" pb={3} w={80}>
          <Flex borderRadius="10px 10px 0 0">
            <img src="/signuppic.png" width='full' />
          </Flex>
          <Flex ml={5} mt={2}>
            <Text color="white" fontWeight={400} fontSize={14} w={56}>
              Discover new camps, join and interact with campers.
              <br /> Define your homefeed with your favorite camps
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
