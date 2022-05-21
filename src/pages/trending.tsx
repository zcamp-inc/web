import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import RightBar from "../components/RightCard";

const Trending = () => {
  return (
        <Layout>
          <Box p={5} ml={{ base: 0, md: "50px" }}>
            <Heading>This Trending text gg</Heading>
            <Flex
              display={{ base: "none", md: "flex" }}
              justifyContent={{ base: "none", md: "flex-end" }}
              mt={-10}
            >
              <RightBar />
            </Flex>
          </Box>
        </Layout>
  );
};

export default Trending;
