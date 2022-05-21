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
import RightBar from "../components/RightCard";
import Home from "./home";
import Trending from "./trending";

const Index = () => {
  return (

      <Flex
        display={{ base: "none", md: "flex" }}
    
      >
        <Home />
      </Flex>

  );
};

export default Index;
