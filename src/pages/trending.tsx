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
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
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
      sortBy:"best"
    },
  })

  const postVote = Math.floor(Math.random()*(200) + 1 );
  const comments = Math.floor(Math.random()* 30 + 1);
  const router = useRouter();
  return (
    <Layout>
              <Flex justify='center'>

      {/* <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10, lg: 5 }} ml={{md: 10, lg: 24}}> */}
        <Flex direction="column">
         <Tabs isFitted variant="unstyled" alignSelf='center' w={{ base: "370px", md: "768px", lg: "600px" }}>
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
                      <VStack spacing={{ base: 0, md: 5 }} key={p.id}>
                        <Box
                          borderWidth="1px"
                          borderRadius="lg"
                          bg="white"
                          pb={2}
                          w={{ base: "370px", md: "768px", lg: "600px" }}
                          minH={40}
                          mb={{ base: 2 }}
                        >
                          <Stack spacing={10}>
                            <Flex
                              direction="row"
                              justify="space-between"
                              px={3}
                            >
                              <Flex px={2} pt={2} align="center">
                                <Avatar
                                  size="md"
                                  src={p.group.logoImgUrl}
                                  mr={-1}
                                />
                                <Stack ml={2}>
                                  <Popover
                                    trigger="hover"
                                    isLazy
                                    openDelay={650}
                                  >
                                    <PopoverTrigger>
                                      <Button
                                        fontSize={{ base: 14, md: 18 }}
                                        fontWeight={600}
                                        mb={-2}
                                        mt={-1}
                                        variant="none"
                                      >
                                        {p.group.name}
                                      </Button>
                                    </PopoverTrigger>
                                    <Portal>
                                      <PopoverContent>
                                        <PopoverHeader>
                                          <Flex align="center">
                                            <Avatar
                                              size="md"
                                              src={
                                                p.group.logoImgUrl
                                              }
                                            />
                                            <Text
                                              fontSize={18}
                                              ml={2}
                                              fontWeight={600}
                                            >
                                              {p.group.name}
                                            </Text>
                                          </Flex>
                                        </PopoverHeader>
                                        <PopoverBody>
                                          <Text noOfLines={2}> {p.group.description} </Text>
                                          <Stack
                                            direction="row"
                                            spacing={10}
                                            mt={3}
                                          >
                                            <Text
                                              fontSize="1rem"
                                              fontWeight={400}
                                              mr={2}
                                            >
                                              <b>100k</b> Upvotes
                                            </Text>

                                            <Text fontSize="1rem" mr={2}>
                                              <b>103</b> Points
                                            </Text>
                                            <Box>
                                              <Badge
                                                colorScheme="yellow"
                                                variant="solid"
                                              >
                                                L1 USER
                                              </Badge>
                                            </Box>
                                          </Stack>
                                        </PopoverBody>
                                        <PopoverFooter>
                                          <Flex>
                                          <NextLink href={{ pathname: '/z/[group]', query: { group: p.group.name } }} passHref>
                                            <Button colorScheme="blue">
                                              View Group
                                            </Button>
                                            </NextLink>
                                            <Button colorScheme="blue" variant='outline' ml={5}>
                                              Join Chat
                                            </Button>
                                          </Flex>
                                        </PopoverFooter>
                                      </PopoverContent>
                                    </Portal>
                                  </Popover>

                                  {/* POSTED BY USER SECTION */}
                                  <Flex>
                                  <Popover
                                    trigger="hover"
                                    isLazy
                                    openDelay={650}
                                  >
                                    <PopoverTrigger>
                                      <Button
                                        fontSize="0.6rem"
                                        fontWeight={400}
                                        mb={-2}
                                        mt={-4}
                                        variant="none"
                                        mr={-2}
                                      >
                                       Posted by {p.creator.user?.username}
                                      </Button>
                                    </PopoverTrigger>
                                    <Portal>
                                      <PopoverContent>
                                        <PopoverHeader>
                                          <Flex align="center">
                                            <Avatar
                                              size="md"
                                              src={
                                                p.creator.user?.profileImgUrl
                                              }
                                            />
                                            <Text
                                              fontSize={18}
                                              ml={2}
                                              fontWeight={600}
                                            >
                                              {p.creator.user?.username}
                                            </Text>
                                          </Flex>
                                        </PopoverHeader>
                                        <PopoverBody>
                                          <Text> {p.creator.user?.email} </Text>
                                          <Stack
                                            direction="row"
                                            spacing={10}
                                            mt={3}
                                          >
                                            <Text
                                              fontSize="1rem"
                                              fontWeight={400}
                                              mr={2}
                                            >
                                              <b>100k</b> Upvotes
                                            </Text>

                                            <Text fontSize="1rem" mr={2}>
                                              <b>103</b> Points
                                            </Text>
                                            <Box>
                                              <Badge
                                                colorScheme="yellow"
                                                variant="solid"
                                              >
                                                L1 USER
                                              </Badge>
                                            </Box>
                                          </Stack>
                                        </PopoverBody>
                                        <PopoverFooter>
                                          <Flex>
                                          <NextLink href={{ pathname: '/u/[username]', query: { username: p.creator.user?.username} }} passHref>
                                            <Button colorScheme="blue">
                                              View Profile
                                            </Button>
                                            </NextLink>
                                            <Button colorScheme="blue" variant='outline' ml={5}>
                                              Start Chat
                                            </Button>
                                          </Flex>
                                        </PopoverFooter>
                                      </PopoverContent>
                                    </Portal>
                                  </Popover>
                                    <Text fontSize="0.6rem" mt={-1}>
                                     {moment(p.createdAt).fromNow()}
                                    </Text>
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
                              <Heading
                                as="h4"
                                fontSize={24}
                                fontWeight={500}
                                mt={-5}
                                noOfLines={2}
                              >
                                {p.title}
                              </Heading>
                              <Box mt={4}>
                                <Text fontSize={16} fontWeight={300} mb={-5}>
                                  {p.bodySnippet}
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
        <Box display={{ base: "none", lg: "block" }} ml={5}>
          <RightCard />
        </Box>
      </Flex>
    </Layout>
  );
};

export default Trending;
