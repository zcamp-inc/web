import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  SimpleGrid,
  Tabs, TabList, TabPanels, Tab, TabPanel 
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useState } from "react";
import { data } from "../../data";
import {Layout} from "../components/Layout";
import FakePost from "../components/post/fakepost";
import RightCard from "../components/RightCard";

const Trending = () => {
  return (
    <Layout>
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} ml={10}>
      <Flex direction="column" ml={{ base: -10, md: -20 }}>
        <Flex mb={5} justify='center'>
          <Heading>Trends: Just for you</Heading>
         
        </Flex>
        <Tabs align='center' isFitted>
            <TabList>
              <Tab>For You</Tab>
              <Tab>Important</Tab>
              <Tab>Events</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              {data.map((postData, i) => (
          <FakePost postData={postData} key={i} />
        ))}
        </TabPanel>
        <TabPanel>
          <Heading>No Important Posts for now</Heading>
        </TabPanel>
        <TabPanel>
          <Heading>No Events for now</Heading>
        </TabPanel>

            </TabPanels>
          </Tabs>
      </Flex>
      <Box display={{ base: "none", md: "block" }}>
        
        <RightCard />

      </Box>
    </SimpleGrid>
  </Layout>
  );
};

export default Trending;
