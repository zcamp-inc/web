import {
  Image,
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
  Button,
  Portal,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  SkeletonCircle,
  SkeletonText,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import CreatePost from "../components/post/CreatePost";
import Explore from "./explore";
import NextLink from "next/link";
import RightCard from "../components/RightCard";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import {
  useMeQuery,
  useHomePostsQuery,
  useDeletePostMutation,
  Exact,
} from "../generated/graphql";
import {
  IoHeartCircleOutline,
  IoRocketOutline,
  IoRibbonOutline,
} from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import PostInteraction from "../components/PostInteraction";
import moment from "moment";
import { useState } from "react";
import { useRouter } from "next/router";
import BarLoader from "react-spinners/BarLoader";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [sort, setSort] = useState("recent");
  const [{ data, fetching }] = useHomePostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
      sortBy: sort,
    },
  });

  const [, deletePost] = useDeletePostMutation();
  const router = useRouter();
  const comments = Math.floor(Math.random() * 30 + 1);

  const me = MeQuery();
  let reme = null;
  if (!me.data?.me?.user) {
    reme = (
      <>
        <Explore />
      </>
    );
  }
  if (me.fetching) {
    reme = (
      <Center>
        <Box minW="full" mt={{ base: 60, md: 60, lg: 40 }}>
          <Flex
            direction="column"
            align='center'
            minW={{ base: "full", lg: "650px" }}
          >
            <Image src="/zlogo/zlogofilled.png" alt="zlogo" w={40} mb={3} />
            <BarLoader color="#5E00AB" width="150px" />
          </Flex>
        </Box>
      </Center>
    );
  } else {
    reme = (
      <Layout>
        <Flex justify="center" mt={5} minW={{ base: "full", lg: "650px" }}>
          <Box alignItems={"center"} minW={{ base: "full", lg: "650px" }}>
            <Box
              mb={5}
              alignSelf="center"
              w={{ lg: "680px" }}
              minW={{ base: "full", lg: "650px" }}
              px={4}
            >
              <CreatePost pageProps={undefined} />
            </Box>
            <Tabs
              isFitted
              variant="unstyled"
              alignSelf="center"
              w={{ lg: "680px" }}
              minW={{ base: "full", lg: "600px" }}
              px={4}
            >
              <TabList
                bg="white"
                mb={3}
                borderRadius="md"
                fontWeight={600}
                color="gray.500"
              >
                <Tab
                  _selected={{ color: "#ff3333" }}
                  onClick={() => setSort("recent")}
                >
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

                <Tab
                  _selected={{ color: "#8225CE" }}
                  onClick={() => setSort("new")}
                >
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
                {/* FOR YOU or RECENT HOMEPOST SECTION or TAB */}
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
                    data?.homePosts?.posts?.map((p) => (
                      <VStack
                        spacing={{ base: 0, md: 5 }}
                        key={p.id}
                        minW="full"
                      >
                      
                        <LinkBox
                        as="article"
                          borderWidth="2px"
                          borderRadius="lg"
                          bg="white"
                          _hover={{ borderColor: "gray.400" }}
                          pb={2}
                          w={{ lg: "650px" }}
                          minH={40}
                          minW={{ base: "full", lg: "650px" }}
                          mb={{ base: 2 }}
                          
                        >
                          <Stack spacing={10}>
                           

                            <NextLink
                              href={{
                                pathname: "/z/[university]/[name]/post/[id]",
                                query: {
                                  university: "CU",
                                  name: p.group.name,
                                  id: p.id,
                                },
                              }}
                              passHref
                            >
                              <LinkOverlay>
                              <Stack px={6} cursor="pointer" mt="75px">
                                <Heading
                                  as="h4"
                                  fontSize={24}
                                  fontWeight={500}
                                  noOfLines={2}
                                >
                                  {p.title}
                                </Heading>
                                <Box mt={4}>
                                  <Text fontSize={16} fontWeight={300} noOfLines={2} mb="-80px">
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
                              </LinkOverlay>
                            </NextLink>

                             <Flex
                              direction="row"
                              justify="space-between"
                              px={3}
                            >
                              <Flex px={2} pt={2} mt="-150px">
                                <Avatar
                                  size="md"
                                  src={p.group.logoImgUrl}
                                  mr={-1}
                                />
                                <Stack ml={2}>
                                  <Flex>
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
                                                src={p.group.logoImgUrl}
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
                                            <Text noOfLines={2}>
                                              {" "}
                                              {p.group.description}{" "}
                                            </Text>
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
                                              <NextLink
                                                href={{
                                                  pathname:
                                                    "/z/[university]/[name]",
                                                  query: {
                                                    university: "CU",
                                                    name: p.group.name,
                                                  },
                                                }}
                                                passHref
                                              >
                                                <Button colorScheme="blue">
                                                  View Group
                                                </Button>
                                              </NextLink>
                                              <Button
                                                colorScheme="blue"
                                                variant="outline"
                                                ml={5}
                                              >
                                                Join Chat
                                              </Button>
                                            </Flex>
                                          </PopoverFooter>
                                        </PopoverContent>
                                      </Portal>
                                    </Popover>
                                  </Flex>

                                  {/* POSTED BY USER SECTION */}
                                  <Flex>
                                    <Flex align="center" mt={-4}>
                                      <Popover
                                        trigger="hover"
                                        isLazy
                                        openDelay={650}
                                      >
                                        <PopoverTrigger>
                                          <Button
                                            fontSize="0.6rem"
                                            fontWeight={400}
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
                                                    p.creator.user
                                                      ?.profileImgUrl
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
                                              <Text>
                                                {" "}
                                                {p.creator.user?.email}{" "}
                                              </Text>
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
                                                <NextLink
                                                  href={{
                                                    pathname: "/u/[username]",
                                                    query: {
                                                      username:
                                                        p.creator.user
                                                          ?.username,
                                                    },
                                                  }}
                                                  passHref
                                                >
                                                  <Button colorScheme="blue">
                                                    View Profile
                                                  </Button>
                                                </NextLink>
                                                <Button
                                                  colorScheme="blue"
                                                  variant="outline"
                                                  ml={5}
                                                >
                                                  Start Chat
                                                </Button>
                                              </Flex>
                                            </PopoverFooter>
                                          </PopoverContent>
                                        </Portal>
                                      </Popover>
                                      <Flex align="center">
                                        <Text fontSize={9}>
                                          {moment(p.createdAt).fromNow()}
                                        </Text>
                                      </Flex>
                                      <Flex justify="flex-end" ml={2}>
                                        <Text
                                        as='i'
                                          fontSize={10}
                                          display={
                                            p.wasEdited === true
                                              ? "flex"
                                              : "none"
                                          }
                                        >
                                          {" "}
                                          Edited{" "} {moment(p.updatedAt).fromNow()}
                                        </Text>
                                      </Flex>
                                    </Flex>
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

                              {/**  */}
                              <Flex direction="row" justify="flex-end" mt="-150px">
                                <Menu>
                                  <MenuButton
                                    as={IconButton}
                                    aria-label="more options"
                                    icon={<BsThreeDots />}
                                    variant="ghost"
                                    mr={2}
                                    mt={1}
                                    zIndex={1}
                                  />
                                  <MenuList zIndex={2} bg="white">
                                    <MenuItem
                                      color="red.300"
                                      fontWeight={600}
                                      display={
                                        p?.creator?.user?.id ===
                                        me.data?.me?.user?.id
                                          ? "block"
                                          : "none"
                                      }
                                      onClick={() => {
                                        deletePost({ deletePostId: p.id });
                                        router.reload();
                                      }}
                                    >
                                      Delete
                                    </MenuItem>
                                    <NextLink
                                      href={{
                                        pathname:
                                          "/z/[university]/[name]/post/edit/[id]",
                                        query: {
                                          university: "CU",
                                          name: p.group.name,
                                          id: p.id,
                                        },
                                      }}
                                      passHref
                                    >
                                      <MenuItem
                                        display={
                                          p?.creator?.user?.id ===
                                          me.data?.me?.user?.id
                                            ? "block"
                                            : "none"
                                        }
                                      >
                                        Edit
                                      </MenuItem>
                                    </NextLink>
                                    <MenuItem
                                      color="red.300"
                                      fontWeight={600}
                                      display={
                                        p?.creator?.user?.id !==
                                        me.data?.me?.user?.id
                                          ? "block"
                                          : "none"
                                      }
                                    >
                                      Report
                                    </MenuItem>
                                    <MenuItem>Repost</MenuItem>
                                    <MenuItem>Go to Post</MenuItem>
                                    <MenuItem>Award Post</MenuItem>
                                  </MenuList>
                                </Menu>
                              </Flex>

                            </Flex>


                            <Box maxW="full" maxH="lg" alignItems="center">
                              <PostInteraction
                                comments={comments}
                                postID={p.id}
                              />   
                            </Box>

                          </Stack>
                        </LinkBox>
                      </VStack>
                    ))
                  )}
                  <Flex justify="center">
                    <Button
                      colorScheme="blue"
                      borderRadius="md"
                      size="lg"
                      h={10}
                      fontWeight={500}
                    >
                      Load More
                    </Button>
                  </Flex>
                </TabPanel>

                {/** NEW HOMEPOST SECTION or TAB */}
                <TabPanel>
                  {!data ? (
                    <Box borderRadius="md" bg="tan" px={3}>
                      Nothing to see here
                    </Box>
                  ) : (
                    data?.homePosts?.posts?.map((p) => (
                      <VStack spacing={{ base: 0, md: 5 }}>
                        <Box
                          borderWidth="1px"
                          borderRadius="lg"
                          bg="white"
                          pb={2}
                          w={{ base: "370px", md: "768px", lg: "650px" }}
                          minH={40}
                          mb={{ base: 2 }}
                        >
                          <Stack spacing={10}>
                            <Flex
                              direction="row"
                              justify="space-between"
                              px={3}
                            >
                              <Flex px={2} pt={2}>
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
                                    <Text fontSize="0.6rem">
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
                  <Heading>No Events for now</Heading>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box display={{ base: "none", lg: "block" }} ml={5}>
            <RightCard />
          </Box>
          {/* </SimpleGrid> */}
        </Flex>
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
  return { data, fetching };
};
