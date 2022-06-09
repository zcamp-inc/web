import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import {Layout} from "../components/Layout";
import RightCard from "../components/RightCard";

const Trending = () => {
  return (
    <Layout>
      {/* <Box p={5} ml={{ base: 0, md: "50px" }}>
        <Heading>This Trending text gg</Heading>
        <Flex
          display={{ base: "none", md: "flex" }}
          justifyContent={{ base: "none", md: "flex-end" }}
          mt={-10}
        >
          <RightBar />
        </Flex>
      </Box> */}
       <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} ml={{ base: 0, md: -60 }}>
        <Flex direction="column" justify='flex-start' ml={{ base: -10, md: -20 }}>
         <Heading>Welcome to Trends</Heading>
         Trends for you
        </Flex>
        <Box display={{ base: "none", md: "block" }}>
          <RightCard />
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default Trending;
