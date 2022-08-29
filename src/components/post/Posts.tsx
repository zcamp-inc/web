import {
    Image,
    Text,
    Flex,
    Box,
    Heading,
    IconButton,
    Avatar,
    Badge,
    Stack,
    VStack,
    Button,
    Portal,
    Popover,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverTrigger,
    PopoverFooter,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    LinkBox,
    LinkOverlay,
    useToast,
} from "@chakra-ui/react";
import moment from "moment";
import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { Post, useMeQuery, useDeletePostMutation } from "../../generated/graphql";
import PostInteraction from "./PostInteraction";
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface PostsProps {
  p: Partial<Post>;
}

const Posts: React.FC<PostsProps> = ({ p }) => {
    const router = useRouter();
    const toast = useToast();
    const [, deletePost] = useDeletePostMutation();
    const[{data: me}] = useMeQuery();
  return (
    <VStack spacing={{ base: 0, md: 5 }}>
      <LinkBox
        as="article"
        borderWidth="2px"
        borderRadius="lg"
        bg="white"
        _hover={{ borderColor: "gray.400" }}
        pb={2}
        w={{ base: "full", lg: "650px" }}
        minH={40}
        mb={{ base: 2 }}
      >
        <Stack spacing={10}>
          <Flex direction="row" justify="space-between" px={3}>
            <Flex px={{ base: 0, md: 2 }} pt={2} zIndex={2}>
              <Avatar size="md" src={p?.group?.logoImgUrl} mr={-1} />
              <Stack ml={2}>
                <Flex>
                  <Popover trigger="hover" isLazy openDelay={650}>
                    <PopoverTrigger>
                      <Button
                        fontSize={{ base: 14, md: 18 }}
                        fontWeight={600}
                        mb={-2}
                        mt={-1}
                        variant="none"
                      >
                        {p?.group?.name}
                      </Button>
                    </PopoverTrigger>
                    <Portal>
                      <PopoverContent>
                        <PopoverHeader>
                          <Flex align="center">
                            <Avatar size="md" src={p?.group?.logoImgUrl} />
                            <Text fontSize={18} ml={2} fontWeight={600}>
                              {p?.group?.name}
                            </Text>
                          </Flex>
                        </PopoverHeader>
                        <PopoverBody>
                          <Text noOfLines={2}> {p?.group?.description} </Text>
                          <Stack direction="row" spacing={10} mt={3}>
                            <Text fontSize="1rem" fontWeight={400} mr={2}>
                              <b>100k</b> Upvotes
                            </Text>

                            <Text fontSize="1rem" mr={2}>
                              <b>103</b> Points
                            </Text>
                            <Box>
                              <Badge colorScheme="yellow" variant="solid">
                                L1 USER
                              </Badge>
                            </Box>
                          </Stack>
                        </PopoverBody>
                        <PopoverFooter>
                          <Flex>
                            <NextLink
                              href={{
                                pathname: "/z/[university]/[name]",
                                query: {
                                  university: "CovenantUniversity",
                                  name: p?.group?.name,
                                },
                              }}
                              passHref
                            >
                              <Button colorScheme="blue">View Group</Button>
                            </NextLink>
                            <Button colorScheme="blue" variant="outline" ml={5}>
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
                  <Flex
                    justify="start"
                    align={{ lg: "center" }}
                    mt={-4}
                    direction={{ base: "column", lg: "row" }}
                  >
                    <Popover trigger="hover" isLazy openDelay={650}>
                      <PopoverTrigger>
                        <Button
                          fontSize="0.6rem"
                          fontWeight={400}
                          variant="none"
                        >
                          Posted by {p?.creator?.user?.username}
                        </Button>
                      </PopoverTrigger>
                      <Portal>
                        <PopoverContent>
                          <PopoverHeader>
                            <Flex align="center">
                              <Avatar
                                size="md"
                                src={p?.creator?.user?.profileImgUrl}
                              />
                              <Text fontSize={18} ml={2} fontWeight={600}>
                                {p?.creator?.user?.username}
                              </Text>
                            </Flex>
                          </PopoverHeader>
                          <PopoverBody>
                            <Text> {p?.creator?.user?.email} </Text>
                            <Stack direction="row" spacing={10} mt={3}>
                              <Text fontSize="1rem" fontWeight={400} mr={2}>
                                <b>100k</b> Upvotes
                              </Text>

                              <Text fontSize="1rem" mr={2}>
                                <b>103</b> Points
                              </Text>
                              <Box>
                                <Badge colorScheme="yellow" variant="solid">
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
                                    username: p?.creator?.user?.username,
                                  },
                                }}
                                passHref
                              >
                                <Button colorScheme="blue">View Profile</Button>
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

                    <Flex
                      ml={{ base: 4, lg: -2 }}
                      mt={{ base: -3, lg: 0 }}
                      align="center"
                    >
                      <Text fontSize={9} mr={2}>
                        {moment(p?.createdAt).fromNow()}
                      </Text>
                      <Text
                        as="i"
                        fontSize={10}
                        display={p?.wasEdited === true ? "flex" : "none"}
                      >
                        {" "}
                        Edited{" "}
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Stack>
              <Box>
                <Badge colorScheme="blue" variant="outline" ml={2}>
                  POST
                </Badge>
              </Box>
            </Flex>

            {/**  */}
            <Flex direction="row" justify="flex-end">
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
                      p?.creator?.user?.id === me?.me?.user?.id
                        ? "block"
                        : "none"
                    }
                    onClick={async () => {
                     await deletePost({ deletePostId: p?.id! });                     
                        toast({
                            title: 'Post Deleted🙂🙂',
                            description: "Your post has been deleted",
                            status: 'success',
                            duration: 6000,
                            isClosable: true,
                            variant:'left-accent'
                        });
                        router.reload();
                     
                    }}
                  >
                    Delete
                  </MenuItem>
                  <NextLink
                    href={{
                      pathname: "/z/[university]/[name]/post/edit/[id]",
                      query: {
                        university: "CovenantUniversity",
                        name: p?.group?.name,
                        id: p?.id,
                      },
                    }}
                    passHref
                  >
                    <MenuItem
                      display={
                        p?.creator?.user?.id === me?.me?.user?.id
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
                      p?.creator?.user?.id !== me?.me?.user?.id
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

          <NextLink
            href={{
              pathname: "/z/[university]/[name]/post/[id]",
              query: {
                university: "CovenantUniversity",
                name: p?.group?.name,
                id: p?.id,
              },
            }}
            passHref
          >
            <LinkOverlay>
              <Stack px={6} cursor="pointer">
                <Heading
                  as="h4"
                  fontSize={24}
                  fontWeight={500}
                  noOfLines={2}
                  mt={-8}
                >
                  {p?.title}
                </Heading>
                <Box mt={4}>
                  <Text fontSize={16} fontWeight={300} noOfLines={2} mb="-30px">
                    {p?.bodySnippet}...
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

          <Box maxW="full" maxH="lg" alignItems="center">
            <PostInteraction
              comments={2}
              postID={p?.id}
              post={p}
              count={p?.id}
              pageProps={undefined}
            />
          </Box>
        </Stack>
      </LinkBox>
    </VStack>
  );
};

export default Posts;