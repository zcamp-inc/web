import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import Layout from "../components/Layout";
import RightBar from "../components/RightBar";
import Home from "./home";

const Index = () => {
  return (
    <Box>
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent={{ base: "none", md: "flex-start" }}
        
      >
        <Home />
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent={{ base: "none", md: "flex-end" }}
        mr={4}
        mt={-10}
      >
        <RightBar />
      </Flex>
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent={{ base: "none", md: "flex-end" }}
        mr={4}
        mt={5}
      >
        <RightBar />
      </Flex> 
    </Box>
  );
};

export default Index;
