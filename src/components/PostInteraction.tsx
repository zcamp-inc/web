import { HStack, Box, Flex, Icon, Text, IconButton } from "@chakra-ui/react";
import {
  FiChevronUp,
  FiBookmark,
  FiChevronDown,
  FiUpload,
} from "react-icons/fi";

import { IoChatbubbleOutline } from "react-icons/io5";

export default function PostInteraction() {
  return (
    <HStack spacing={{ base: 20, md: 20, lg: 48}}>
      <HStack spacing={5}>
      <Flex
        align="center"
        p={2}
        mx={4}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="#000a16"
        _hover={{ color: "#5E00AB" }}
      >
        <IconButton
          icon={<FiChevronUp />}
          aria-label="upvote"
          _hover={{ color: "#5E00AB",  bg: "#DDB2FF" }}
          fontSize={{ base: 24, md: 26 }}
          variant="ghost"
        />

        <Text>
          100
        </Text>

        <IconButton
          icon={<FiChevronDown />}
          aria-label="downvote"
          fontSize={{ base: 24, md: 26 }}
          _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
          variant="ghost"
        />
      </Flex>

      <Flex
        align="center"
        p={2}
        mx={4}
        borderRadius="lg"
        role="group"
        cursor="pointer"
        color="#000a16"
        _hover={{
          color: "#5E00AB",
        }}
      >
        <IconButton
          icon={<IoChatbubbleOutline />}
          fontSize={{ base: 24, md: 26 }}
          _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
          aria-label="comment"
          variant="ghost"
          ml={-10}
        />
        <Text ml="5px" mr={-15}>10</Text>
      </Flex>

      </HStack>


        {/* <Flex display='flex-end'> */}
      <HStack spacing={5}>

        <IconButton
          icon={<FiUpload strokeWidth={1.4}/>}
          aria-label="share post"
          variant='ghost'
          fontSize={{ base: 20, md: 26 }}
          color='#000a16'
          _hover={{ color: "#5E00AB", bg: "#DDB2FF" }}
        />
 
        <IconButton
          icon={<FiBookmark strokeWidth={1.4}/>}
          aria-label="save post"
          variant='ghost'
          fontSize={{ base: 20, md: 26 }}
          color='#000a16'
          _hover={{  bg: "#DDB2FF", color: "#5E00AB" }}
        />
        </HStack>
        {/* </Flex> */}

    </HStack>
  );
}
