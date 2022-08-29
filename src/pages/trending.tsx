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
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  IconButton,
  Icon,
  Avatar,
  Badge,
  VStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { fakedata } from "../../data";
import { Layout } from "../components/Layout";
import FakePost from "../components/post/fakepost";
import RightCard from "../components/RightCard";
import {
  IoFlame,
  IoInformationCircleOutline,
  IoNotificationsCircleOutline,
} from "react-icons/io5";
import {
  useTrendingPostsQuery,
  useDeletePostMutation,
} from "../generated/graphql";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import PostInteraction from "../components/post/PostInteraction";
import { MeQuery } from ".";
import Posts from "../components/post/Posts";

const Trending = () => {
  const [{ data, fetching }] = useTrendingPostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
      sortBy: "best",
    },
  });
  const me = MeQuery();
  const [, deletePost] = useDeletePostMutation();

  const postVote = Math.floor(Math.random() * 200 + 1);
  const comments = Math.floor(Math.random() * 30 + 1);
  const router = useRouter();
  return (
    <Layout>
      <Flex justify="center" mt={5}>
        <Flex direction="column">
          <Tabs
            isFitted
            variant="unstyled"
            alignSelf="center"
            w={{ base: "full", lg: "650px" }}
          >
            <TabList
              bg="white"
              mb={3}
              borderRadius="md"
              fontWeight={600}
              color="gray.500"
            >
              <Tab _selected={{ color: "#ff3333" }}>
                <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: -2, md: 2 }}
                  ml={{ base: -5 }}
                  p={1}
                >
                  <Icon
                    as={IoFlame}
                    fontSize={{ base: 24, md: 26 }}
                  />
                  <Text
                    ml="1"
                    pr={{ base: 0, md: 1 }}
                    fontSize={{ base: 16, md: 18 }}
                  >
                    Hot
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: "#8225CE" }}>
                <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: -2, md: 2 }}
                  p={1}
                >
                  <Icon
                    as={IoInformationCircleOutline}
                    fontSize={{ base: 24, md: 26 }}
                  />
                  <Text ml="1" pr={1} fontSize={{ base: 16, md: 18 }}>
                    Important
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: "blue.600" }}>
                <Flex
                  align="center"
                  borderRadius="md"
                  role="group"
                  cursor="pointer"
                  _hover={{
                    bg: "gray.200",
                  }}
                  mr={{ base: -2, md: 2 }}
                >
                  <IconButton
                    icon={<IoNotificationsCircleOutline />}
                    borderRadius="md"
                    fontSize={{ base: 24, md: 26 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1" pr={1} fontSize={{ base: 16, md: 18 }}>
                    Events
                  </Text>
                </Flex>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                {!data && fetching ? (
                  <VStack spacing={{ base: 0, md: 5 }}>
                    <Box
                      borderWidth="1px"
                      borderRadius="lg"
                      bg="white"
                      p={4}
                      boxShadow='lg'
                      w={{ base: "370px", md: "768px", lg: "650px" }}
                      minH={40}
                      mb={{ base: 2 }}
                    >
                      <SkeletonCircle size="10" />
                      <SkeletonText mt="4" noOfLines={4} spacing="4" />
                    </Box>

                    <Box
                      borderWidth="1px"
                      borderRadius="lg"
                      bg="white"
                      p={4}
                      boxShadow='lg'
                      w={{ base: "370px", md: "768px", lg: "650px" }}
                      minH={40}
                      mb={{ base: 2 }}
                    >
                      <SkeletonCircle size="10" />
                      <SkeletonText mt="4" noOfLines={4} spacing="4" />
                    </Box>
                  </VStack>
                ) : (
                  data?.trendingPosts?.posts?.map((p) => (
                   <Posts p={p} />
                  ))
                )}
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
        <Box display={{ base: "none", lg: "block" }} ml={5}>
          <RightCard />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Trending;
