import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  Badge,
  Button,
  VStack,
  Stack,
} from "@chakra-ui/react";

export default function RightCard() {
  return (
    <Stack
      zIndex="2"
      pos='absolute'
      spacing={10}
      bg="white"
      h='full'
      // w={{ base: "full" }}
      borderLeft="1px"
      borderLeftColor="gray.200"
      top='0'
      display={{ base:'none', md: 'flex'}}
    >
      <Box borderRadius="10px" px={7} pt={4}>
        <Box
          bg="#000a16"
          borderRadius="10px"
          pb={3}
          w={80}
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
              color="#000a16"
              bg="#57FFF5"
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

      <Box borderRadius="10px" px={7}>
        <Box
          bg="#000a16"
          borderRadius="10px"
          w={80}
          pb={3}
          
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
              color="#000a16"
              bg="#57FFF5"
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

      <Box borderRadius="10px" px={7}>
        <Box
          bg="gray.200"
          borderRadius="10px"
          pb={3}
          w={80}
        >
          <Flex borderRadius="10px 10px 0 0">
            <img src="/WAVYHOME.png" width="100%" />
          </Flex>
          <Flex ml={5} mt={2}>
            <Text color="#000a16" fontWeight={400} fontSize={14} w={56}>
              ZCAMP Guildlines and Privacy Policies
            </Text>
          </Flex>
          <VStack mt={2}>
            <Button
              w={40}
              color="#000a16"
              bg="#57FFF5"
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
    </Stack>
  );
}
