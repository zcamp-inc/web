import React from "react";
import { Box, Link, Flex, Button, Heading, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="tan" p={4}>
      <Flex flex={1} m="auto" align="center" maxW={800}>
        <NextLink href="/">
          <Link>
            <Heading>zcamp</Heading>
          </Link>
        </NextLink>
        <Stack ml="auto" direction='row' spacing={4}>
          <NextLink href="/login">
            <Button color="white" backgroundColor="#D99EFF" variant="solid" mr={2}>
              <Link >Login</Link>{" "}
            </Button>
          </NextLink>
          <NextLink href="/register">
          <Button color="white" variant="outline" >
              <Link >Register</Link>{" "}
            </Button>
          </NextLink>
        </Stack>
      </Flex>
    </Flex>
  );
};
