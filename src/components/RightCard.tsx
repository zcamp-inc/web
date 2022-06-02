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
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function RightCard() {
  return (
    <Stack spacing={10} borderRadius="lg" position='fixed'>
      <Box borderRadius="10px" px={1} pt={1}>
        <Box bg="#000a16" borderRadius="10px" pb={3} w={80}>
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

      <Box borderRadius="10px" px={1} position='static' >
        <Box bg="gray.400" borderRadius="10px" pb={3} w={80}>
          <Flex borderRadius="10px 10px 0 0">
            <img src="/WAVYHOME.png" width="100%" />
          </Flex>
          <Flex ml={5} mt={2}>
            <Text color="#000a16" fontWeight={400} fontSize={14} w={56}>
              ZCAMP Guildlines and Privacy Policies
            </Text>
          </Flex>
          <NextLink href="/" passHref>
            <Link textDecoration='none'>
              {" "}
              <Text color="#000a16" align='center'>Privacy Policy</Text>
            </Link>
          </NextLink>
        </Box>
      </Box>
    </Stack>
  );
}
