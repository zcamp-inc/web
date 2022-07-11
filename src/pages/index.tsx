import {
  SimpleGrid,
  Text,
  Flex,
  Box,
  Heading,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Avatar,
  Badge,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import CreatePost from "../components/post/CreatePost";
import Explore from "./explore";
import FakePost from "../components/post/fakepost";
import RightCard from "../components/RightCard";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import { useMeQuery, useHomePostsQuery } from "../generated/graphql";
import { UseQueryArgs } from "urql";
import router from "next/router";
import {
  IoHeartCircleOutline,
  IoRocketOutline,
  IoRibbonOutline,
} from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import PostInteraction from "../components/PostInteraction";
import moment from "moment";
import { useState } from "react";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [sort, setSort] = useState('recent')
  const [{ data }] = useHomePostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
      sortBy: sort,
    },
  });

  const postVote = Math.floor(Math.random() * 200 + 1);
  const comments = Math.floor(Math.random() * 30 + 1);

  const me = MeQuery();
  let reme = null;
  if (!me?.me?.user) {
    reme = (
      <>
        <Explore />
      </>
    );
  } else {
    reme = (
      <Layout>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} ml={10}>
          <Flex direction="column" ml={{ base: -10, md: -20 }}>
            <Box mb={5} alignSelf="center" w={{ base: "full", md: "xl" }}>
              <CreatePost pageProps={undefined} />
            </Box>
            <Tabs
              isFitted
              variant="unstyled"
              alignSelf="center"
              w={{ base: "full", md: "xl" }}
            >
              <TabList
                bg="white"
                mb={3}
                borderRadius="md"
                fontWeight={600}
                color="gray.500"
              >
                <Tab _selected={{ color: "#ff3333" }} onClick={ () => setSort('recent')}>
                  <Flex
                    align="center"
                    borderRadius="md"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "gray.200",
                    }}
                    mr={{ base: 0, md: 2 }}
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
                    <Text ml="1" pr={2}>
                      For You
                    </Text>
                  </Flex>
                </Tab>

                <Tab _selected={{ color: "#8225CE" }} onClick = { () => setSort('new') }>
                  <Flex
                    align="center"
                    borderRadius="md"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "gray.200",
                    }}
                    mr={{ base: 0, md: 2 }}
                  >
                    <IconButton
                      icon={<IoRibbonOutline />}
                      borderRadius="md"
                      fontSize={{ base: 24, md: 26 }}
                      // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                      _hover={{ color: "none", bg: "none" }}
                      aria-label="Home"
                      variant="ghost"
                    />
                    <Text ml="1" pr={2}>
                      New
                    </Text>
                  </Flex>
                </Tab>

                <Tab _selected={{ color: "blue" }}>
                  <Flex
                    align="center"
                    borderRadius="md"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "gray.200",
                    }}
                    mr={{ base: 0, md: 2 }}
                  >
                    <IconButton
                      icon={<IoRocketOutline />}
                      borderRadius="md"
                      fontSize={{ base: 24, md: 26 }}
                      // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                      _hover={{ color: "none", bg: "none" }}
                      aria-label="Home"
                      variant="ghost"
                    />
                    <Text ml="1" pr={2}>
                      Cringe
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
                    data?.homePosts?.posts?.map((p) => (
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
                {!data ? (
                    <Box borderRadius="md" bg="tan" px={3}>
                      Nothing to see here
                    </Box>
                  ) : (
                    data?.homePosts?.posts?.map((p) => (
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
                                postVote={postVote}
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
  }
  return (
    // <Layout>
    //   <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} ml={10}>
    //     <Flex direction="column" ml={{ base: -10, md: -20 }}>
    //       <Box mb={5} alignSelf='center'  w={{ base: "full", md: "xl" }}>
    //         <CreatePost />
    //       </Box>
    //       {!data ? null : data?.homePosts?.posts?.map((p) => <Box key={p.id} bg="tan">{p.title}</Box> )}

    //       {/* {data.map((postData, i) => (
    //         <FakePost postData={postData} key={i} />
    //       ))} */}

    //     </Flex>
    //     <Box display={{ base: "none", md: "block" }}>

    //       <RightCard />

    //     </Box>
    //   </SimpleGrid>
    // </Layout>
    reme
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

export const MeQuery = () => {
  const [{ data, fetching }] = useMeQuery();
  return data;
};
