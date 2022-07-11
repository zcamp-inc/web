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
  useTab,
  Avatar,
  Badge,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { fakedata } from "../../data";
import { Layout } from "../components/Layout";
import FakePost from "../components/post/fakepost";
import RightCard from "../components/RightCard";
import { IoHeartCircleOutline, IoInformationCircleOutline, IoNotificationsCircleOutline } from "react-icons/io5";
import { useTrendingPostsQuery } from "../generated/graphql";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import PostInteraction from "../components/PostInteraction";

const Trending = () => {
  const [{data}] = useTrendingPostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
    },
  })

  const postVote = Math.floor(Math.random()*(200) + 1 );
  const comments = Math.floor(Math.random()* 30 + 1);
  const router = useRouter();
  return (
    <Layout>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} ml={10}>
        <Flex direction="column" ml={{ base: -10, md: -20 }}>
         <Tabs isFitted variant="unstyled" alignSelf='center' w={{ base: "full", md: "xl" }}>
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
                >
                  <IconButton
                    icon={<IoHeartCircleOutline />}
                    borderRadius="md"
                    fontSize={{ base: 24, md: 26 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1" pr={{ base: 0, md: 1}} fontSize={{ base: 16, md: 18}}>
                    For You
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: "#8225CE"}}>
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
                    icon={<IoInformationCircleOutline />}
                    borderRadius="md"
                    fontSize={{ base: 24, md: 26 }}
                    // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                    _hover={{ color: "none", bg: "none" }}
                    aria-label="Home"
                    variant="ghost"
                  />
                  <Text ml="1" pr={1} fontSize={{ base: 16, md: 18}}>
                   Important
                  </Text>
                </Flex>
              </Tab>

              <Tab _selected={{ color: 'blue'}}>
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
                  <Text ml="1"pr={1} fontSize={{ base: 16, md: 18}}>
                    Events
                  </Text>
                </Flex>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
              {!data ? (
                    <Box borderRadius="md" bg="tan" px={3}>
                      Nothing to see here
                    </Box>
                  ) : (
                    data?.trendingPosts?.posts?.map((p) => (
                      <VStack spacing={{ base: 5, md: 5 }}>
                        <Box
                          borderWidth="1px"
                          borderRadius="lg"
                          bg="white"
                          pb={8}
                          w={{ base: "full", md: "xl" }}
                          mb={5}
                        >
                          <Stack spacing={10}>
                            <Flex
                              direction="row"
                              justify="space-between"
                              px={3}
                            >
                              <Flex px={2} pt={3}>
                                <Avatar
                                  size="md"
                                  src={p.creator.user?.profileImgUrl}
                                />
                                <Stack ml={3}>
                                  <Text
                                    fontSize={{ base: 14, md: 18 }}
                                    fontWeight={600}
                                    mb={-2}
                                  >
                                    {p.creator.user?.username}
                                  </Text>
                                  <Flex>
                                    <Text fontSize="0.6rem" mr={2}>
                                      Posted by {p.creator.user?.username}
                                    </Text>
                                    <Text fontSize="0.6rem">{moment(p.createdAt).fromNow()}</Text>
                                  </Flex>
                                </Stack>
                                <Box>
                                  <Badge
                                    colorScheme="blue"
                                    variant="outline"
                                    ml={2}
                                  >
                                    POST
                                  </Badge>
                                </Box>
                              </Flex>
                              <Flex direction="row" justify="flex-end">
                                <IconButton
                                  icon={<BsThreeDots />}
                                  variant="ghost"
                                  aria-label="More Options"
                                  mr={2}
                                  mt={1}
                                />
                              </Flex>
                            </Flex>

                            <Stack px={6}>
                              <Heading as="h4" fontSize={24} fontWeight={500}>
                                {p.title}
                              </Heading>
                              <Box mt={4}>
                                <Text fontSize={16} fontWeight={300}>
                                  {p.body}
                                </Text>
                              </Box>
                              {/* <Box maxW="md" maxH="md" overflow="hidden" borderRadius={30}>
              <Image
                src={data?.getPost?.body ? data?.getPost?.body : null}
                alt={data?.getPost?.title ? null : data?.getPost?.title}
              />
            </Box> */}
                            </Stack>
                            <Box maxW="full" maxH="lg" alignItems="center">
                              <PostInteraction
                                postVote={p.voteCount}
                                comments={comments}
                              />
                            </Box>
                          </Stack>
                        </Box>
                      </VStack>
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
        <Box display={{ base: "none", md: "block" }}>
          <RightCard />
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default Trending;
