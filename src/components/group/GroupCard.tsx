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
    DrawerBody,
    Avatar,
    AvatarBadge,
  } from "@chakra-ui/react";
  import NextLink from "next/link";
  import { UserGroups } from "../user/UserGroups";
  
  export default function GroupCard() {
    return (
      <Stack spacing={4} direction="column">
              <UserGroups />
  
        <Box borderRadius="10px" px={1} pt={1} mb={3}>
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
                borderColor="#57FFF5"
                _hover={{ bg: "#57FFF5", color: "#000a16" }}
              >
                Create Subcamp
              </Button>
            </VStack>
          </Box>
        </Box>
  
        <Flex borderRadius="10px" px={1} >
          <Box bg="white" borderRadius="10px" pb={3} w={80}>
            <Flex borderRadius="10px 10px 0 0">
              <img src="/WAVYHOME.png" width="100%" />
            </Flex>
            <Flex ml={5} mt={2}>
              <Text color="#000a16" fontWeight={400} fontSize={14} w={56}>
                ZCAMP Guildlines and Privacy Policies
              </Text>
            </Flex>
            <NextLink href="/" passHref>
              <Link textDecoration="none">
                {" "}
                <Text color="#000a16" align="center">
                  Privacy Policy
                </Text>
              </Link>
            </NextLink>
          </Box>
        </Flex>
      </Stack>
    );
  }
  