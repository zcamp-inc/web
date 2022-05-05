import React from "react";
import { Box, Link, Flex, Button, Heading, Stack } from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";

interface NavBarProps {}

export const NavBar: React.FC<NavBarProps> = ({}) => {
  const router = useRouter();
  return (
    <Flex zIndex={1} position="sticky" top={0} bg="white" p={3}>
      <Flex ml='auto'>          
          <NextLink href="/">
            <Link>
              <img src="/homelogo.png" width="60vh" />
            </Link>
          </NextLink>
        <Stack direction="row" spacing={4}>
          <NextLink href="/login">
            <Button
              color="white"
              backgroundColor="#000a16"
              variant="solid"
              mr={2}
              width="15vh"
              _hover={{ bg: "#0a2c3d" }}
            >
              <Link>Login</Link>{" "}
            </Button>
          </NextLink>

          <NextLink href="/login">
            <Button
              color="white"
              backgroundColor="#D99EFF"
              variant="solid"
              mr={2}
              width="15vh"
              _hover={{ bg: "#B94EFF" }}
            >
              <Link>Login</Link>{" "}
            </Button>
          </NextLink>
          <NextLink href="/login">
            <Button
              color="white"
              backgroundColor="#D99EFF"
              variant="solid"
              mr={2}
              width="15vh"
              _hover={{ bg: "#B94EFF" }}
            >
              <Link>Login</Link>{" "}
            </Button>
          </NextLink>
          
          <NextLink href="/register">
            <Button
              color="#000a16"
              variant="outline"
              outlineColor="#000a16"
              width="15vh"
              _hover={{ bg: "#000a16", color:"#fff" }}
            >
              <Link>Register</Link>{" "}
            </Button>
          </NextLink>
        </Stack>
      </Flex>
    </Flex>
  );
};
