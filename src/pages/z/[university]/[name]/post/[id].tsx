import React from "react";
import { withUrqlClient } from "next-urql";
import {
  Heading,
  Box,
  Flex,
  Avatar,
  Badge,
  Button,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Stack,
  Text,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Layout } from "../../../../../components/Layout";
import { useGetPostFromUrl } from "../../../../../utils/getPostFromUrl";
import { createUrqlClient } from "../../../../../utils/createUrqlClient";
import moment from "moment";
import { BsThreeDots } from "react-icons/bs";
import PostInteraction from "../../../../../components/PostInteraction";
import NextLink from "next/link";
import GroupCard from "../../../../../components/group/GroupCard";
import { MeQuery } from "../../../..";
import { InputField } from "../../../../../components/InputField";
import { group } from "console";
import { Formik, Form } from "formik";
import router from "next/router";
import { IoCaretDown } from "react-icons/io5";
import { useCreateCommentMutation } from "../../../../../generated/graphql";

const Post = ({}) => {
  const [{ data, error, fetching }] = useGetPostFromUrl();
  const me = MeQuery();
  const [, createcomment] = useCreateCommentMutation();

  let getPostId = data?.getPost?.post?.id!

  let comments = 2;

  if (fetching) {
    return (
      <Layout>
        <div>loading...</div>
      </Layout>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data?.getPost) {
    return (
      <Layout>
        <Box>could not find post</Box>
      </Layout>
    );
  }

  return (
    <Layout>
      <Flex direction="column" justify="space-between" align="center" w="full">
        <Box w="full" h="60px" bg='pink' overflow="hidden">
          <Flex ml={40} align="center">
            <Avatar
              size="md"
              src={data?.getPost?.post?.group?.logoImgUrl}
              mr={2}
              mt={1}
              borderColor="white"
              borderWidth="2px"
            />
            <Text fontWeight={600}>
              {" "}
              z/CU/{data?.getPost?.post?.group?.name}{" "}
            </Text>
          </Flex>
        </Box>

        <Flex align="center" direction="row">
          <Flex align="center" direction="row">
            <Flex direction="column" bg="white" borderRadius="lg" mt={4}>
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
                  <Flex direction="row" justify="space-between" px={3}>
                    <Flex pt={2} align="center">
                      <Stack>
                        {/* POSTED BY USER SECTION */}
                        <Flex justify="flex-start" align="center">
                          <Popover trigger="hover" isLazy openDelay={650}>
                            <PopoverTrigger>
                              <Button
                                fontSize="0.6rem"
                                fontWeight={400}
                                mb={-2}
                                mt={-4}
                                variant="none"
                                mr={-2}
                              >
                                Posted by{" "}
                                {data?.getPost?.post?.creator?.user?.username}
                              </Button>
                            </PopoverTrigger>
                            <Portal>
                              <PopoverContent>
                                <PopoverHeader>
                                  <Flex align="center">
                                    <Avatar
                                      size="md"
                                      src={
                                        data?.getPost?.post?.creator?.user
                                          ?.profileImgUrl
                                      }
                                    />
                                    <Text fontSize={18} ml={2} fontWeight={600}>
                                      {
                                        data?.getPost?.post?.creator?.user
                                          ?.username
                                      }
                                    </Text>
                                  </Flex>
                                </PopoverHeader>
                                <PopoverBody>
                                  <Text>
                                    {" "}
                                    {
                                      data?.getPost?.post?.creator?.user?.email
                                    }{" "}
                                  </Text>
                                  <Stack direction="row" spacing={10} mt={3}>
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
                                            data?.getPost?.post?.creator?.user
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
                          <Text fontSize="0.6rem" mt={-1}>
                            {moment(data?.getPost?.post?.createdAt).fromNow()}
                          </Text>
                        </Flex>
                      </Stack>
                      <Box>
                        <Badge colorScheme="blue" variant="outline" ml={2}>
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
                      {data?.getPost?.post?.title}
                    </Heading>
                    <Box mt={4}>
                      <Text fontSize={16} fontWeight={300} mb={-5}>
                        {data?.getPost?.post?.body}
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
                      postVote={data?.getPost?.post?.voteCount!}
                      comments={comments}
                    />
                  </Box>
                </Stack>
              </Box>
              <Box
                pb={2}
                px={4}
                w={{ base: "370px", md: "768px", lg: "650px" }}
                h={5}
                mb={{ base: 2 }}
                mt={-3}
                bg='gray.200'
              ></Box>
              <Box
                borderRadius="lg"
                pb={2}
                px={4}
                w={{ base: "370px", md: "768px", lg: "650px" }}
                minH={40}
                mb={{ base: 2 }}
              >
                <Flex direction='row' w='full' mb={4}>
                <Text w='full'>
                  Comment as 
                  <NextLink
                    href={{
                      pathname: "/u/[username]",
                      query: { username: me?.me?.user?.username },
                    }}
                    passHref
                  >   
                  <Link>              
                    <Text color="#5E00AB"> {me?.me?.user?.username} </Text>
                    </Link>
                  </NextLink>
                </Text>
                </Flex>

                <Formik
                initialValues={{ body: "", postId: getPostId }}
                onSubmit={async (values) => {
                  console.log(values);
                  const response = await createcomment({
                    body: values.body,
                    postId: getPostId
                  });
                  if (response?.data?.createComment?.comment) {
                    router.push('/');
                  }
                }}
              >
                {({ isSubmitting }) => (
                  <Form>

                    <InputField
                      textarea
                      name="body"
                      placeholder="What are your thoughts?"
                    />
                    {/* <Box mt={3} mb={3} w={40}>
                      <InputField name="postFlair" placeholder="Post Flair" />
                    </Box> */}
                    <Flex justify="end">
                      <Button
                        colorScheme="blue"
                        mr={3}
                        type="submit"
                        isLoading={isSubmitting}
                      >
                        Post
                      </Button>
                    </Flex>
                  </Form>
                )}
              </Formik>
              </Box>
            </Flex>

            {/* <Box
              h={60}
              minW={60}
              display={{ base: "none", lg: "block" }}
              ml={5}
              mb={4}
            >
              <GroupCard />
            </Box> */}
          </Flex>
        </Flex>
      </Flex>
    </Layout>
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Post);
