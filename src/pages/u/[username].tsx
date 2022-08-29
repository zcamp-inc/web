import {
  Box,
  Flex,
  Avatar,
  Badge,
  Stack,
  Button,
  Heading,
  Text,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Center,
  Image,
  VStack,
  SkeletonCircle,
  SkeletonText,
  Icon,
} from "@chakra-ui/react";
import React, {useState} from 'react';
import {
  IoGridOutline,
  IoChatbubbleEllipsesOutline,
  IoBookmarksOutline,
  IoCaretUpCircleOutline,
} from "react-icons/io5";
import { Layout } from "../../components/Layout";
import UserCard from "../../components/user/UserCard";
import { useGetUserFromUrl } from "../../utils/getUserFromUrl";
import NextLink from "next/link";
import { MeQuery } from "..";
import BarLoader from "react-spinners/BarLoader";
import {
  useUserPostsQuery,
  useGetPostQuery,
  useDeletePostMutation,
} from "../../generated/graphql";
import router from "next/router";

import UserPosts from "../../components/user/UserPosts";

const UserProfile = () => {
  const [, deletePost] = useDeletePostMutation();
  const [{ data, fetching }] = useGetUserFromUrl();
  const [{ data: userpost, fetching: fetchuser }] = useUserPostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
      sortBy: "recent",
    },
  });
  const[sort, setSort] = useState("recent");
  const me = MeQuery();

  let user = null;
  if (fetching) {
    user = (
      <Center>
        <Box minW="full" mt={{ base: 60, md: 60, lg: 40 }}>
          <Flex
            direction="column"
            align="center"
            minW={{ base: "full", lg: "650px" }}
          >
            <Image src="/zlogo/zlogofilled.png" alt="zlogo" w={40} mb={3} />
            <BarLoader color="#5E00AB" width="150px" />
          </Flex>
        </Box>
      </Center>
    );
  } else {
    user = (
      <Layout>
        <Flex direction="row" mt={2}>
        <Box w={{ base: 'full', lg: '650px'}}>
            <Flex
              direction='column'
              align={{ base: "center", md: 'start'}}
              justify={{ md: 'flex-start'}}
              mt={{ base: 2 }}
              bg="white"
              borderRadius='md'            
              
            >
              <Box w='full' h='150px' bgImg='/fakeimages/fakecolors.jpg' borderRadius="7px 7px 0 0" overflow='hidden' objectFit='cover' >
              </Box>
              <Flex direction='column' p={4} >
              <Avatar
                src={data?.user?.user?.profileImgUrl}
                w={{ base: "120px", md: "150px" }}
                h={{ base: "120px", md: "150px" }}
                mr={{ base: 0, md: 24 }}
                mt={{ base: 0, md: -20}}
                background={
                  "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #5E00AB, #57FFF5) border-box"
                }
                border="3px solid transparent"
              />
              <Flex direction='row'>
              <Flex direction="column" justify="space-between">
                <Flex
                  direction={{ base: "column", md: "row" }}
                  justify="space-between"
                  align="center"
                  mt={6} 
                >
                  <Heading
                    fontSize={{ base: 18, md: 28 }}
                    fontWeight={400}
                    mr={{ base: 0, md: 2 }}
                  >
                    {data?.user?.user?.username}
                  </Heading>
                  
                  
                </Flex>

                <Flex direction="column">
                  <Stack direction="row" spacing={10} mt={2}>
                    <Text fontSize="1rem" fontWeight={400} mr={2}>
                      <b>100k</b> Upvotes
                    </Text>

                    <Text fontSize="1rem" mr={2}>
                      <b>103</b> Points
                    </Text>
                    <Box>
                      <Badge colorScheme="pink" variant="solid">
                        L1 USER
                      </Badge>
                    </Box>
                  </Stack>
                  <Box mt={2}>
                    <Text>{data?.user?.user?.email}</Text>
                    <Text fontWeight="light">
                      less talk, show me your code!!!
                    </Text>
                  </Box>
                  <Flex direction="row" mt={2} display={me.data?.me?.user?.id === data?.user?.user?.id
                        ? "none" : 'flex' }>
                    <Button size="sm" colorScheme="blue" fontWeight={400}>
                      Start Chat
                    </Button>
                    <Button ml={2} size="sm" variant='outline' colorScheme="blue" fontWeight={400}>
                      More
                    </Button>
                  </Flex>
                  </Flex>
              </Flex>

              <Flex direction='column' justify='flex-end' w='240px' h='20px' mt={8}>
              <Flex direction="row" justify="flex-end" align="center" display={me.data?.me?.user?.id === data?.user?.user?.id
                        ? "flex" : 'none' }>
                    <Button size="sm" colorScheme="blue" fontWeight={400}>
                      Edit Profile
                    </Button>
                  </Flex>
                        <Flex direction='row' align='center' mt={8} justify='flex-end'>
                          <Avatar src='https://ccodel.covenantuniversity.edu.ng/images/logo.png' size='sm' borderRadius='md' mr={2} bg='gray.200' />
                          <Text>Covenant University</Text>
                        </Flex>
              </Flex>
              </Flex>

              </Flex>
          </Flex>
          <Flex direction="column" mt={{ base: 2, lg: 10 }} minW={{ base: "full", lg: "650px"}}>
          <Tabs
              isFitted
              variant="unstyled"
              alignSelf="center"
              w={{ lg: "680px" }}
              minW={{ lg: "600px" }}
              px={3}
            >
              <TabList
                bg="white"
                mb={3}
                borderRadius="md"
                fontWeight={600}
                color="gray.500"
              >
                <Tab
                  _selected={{ color: "blue.300" }}
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
                    py={1}
                    pl={1}
                  >
                    <Icon
                      as={IoGridOutline}
                      fontSize={{ base: 24, md: 26 }}
                    />
                    <Text ml="1" pr={2}>
                      Posts
                    </Text>
                  </Flex>
                </Tab>

                <Tab
                  _selected={{ color: "#487D8D" }}
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
                    py={1}
                    pl={1}
                  >
                    <Icon
                      as={IoChatbubbleEllipsesOutline}
                      fontSize={{ base: 24, md: 26 }}
                    />
                    <Text ml="1" pr={2}>
                      Comments
                    </Text>
                  </Flex>
                </Tab>

                <Tab _selected={{ color: "#FF377F" }} display={me.data?.me?.user?.id === data?.user?.user?.id
                        ? "flex" : 'none' }>
                  <Flex
                    align="center"
                    borderRadius="md"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "gray.200",
                    }}
                    mr={{ base: 0, md: 2 }}
                    py={1}
                    pl={1}
                  >
                    <Icon
                      as={IoBookmarksOutline}
                      fontSize={{ base: 24, md: 26 }}
                    />
                    <Text ml="1" pr={2}>
                      Saved
                    </Text>
                  </Flex>
                </Tab>

                <Tab _selected={{ color: "#5E00AB" }} display={me.data?.me?.user?.id === data?.user?.user?.id
                        ? "flex" : 'none' }>
                  <Flex
                    align="center"
                    borderRadius="md"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: "gray.200",
                    }}
                    mr={{ base: 0, md: 2 }}
                    py={1}
                    pl={1}
                  >
                    <Icon
                      as={IoCaretUpCircleOutline}
                      fontSize={{ base: 24, md: 26 }}
                    />
                    <Text ml="1" pr={2}>
                      Upvotes
                    </Text>
                  </Flex>
                </Tab>
              </TabList>
              <TabPanels>
                {/* USER POST SECTION */}
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
                   userpost?.userPosts?.posts?.map((p) => (
                      <UserPosts p={p} key={p.id} />
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

                {/** COMMENTS SECTION */}
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
                    <Flex justify="center">
                    {me.data?.me?.user?.id === data?.user?.user?.id
                            ? "post a comment to see it here🥸" : `Sorry, I haven't made a comment yet😣` }
                      </Flex>
                  )}
                </TabPanel>
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
                    <Flex justify="center" >
                    Save a post to see it here🤗
              </Flex>
                  )}
                </TabPanel>

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
                    <Flex justify="center" >
                    Upvote a post to see it here🤩
              </Flex>
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
        </Box>
        <Box display={{ base: "none", lg: "block" }} ml={5}>
          <UserCard />
        </Box>
        </Flex>
      </Layout>
    );
  }

  return user;
};

export default UserProfile;
