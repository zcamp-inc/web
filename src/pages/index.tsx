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

const Index = () => {
  return (
    <Layout>
      <Heading>This thicc text gg</Heading> 
      <Flex
        display={{ base: "none", md: "flex" }}
        justifyContent={{ base: "none", md: "flex-end" }}
        mt={-10}
      >
        <RightBar />
      </Flex>     
    </Layout>
  );
};

export default Index;
