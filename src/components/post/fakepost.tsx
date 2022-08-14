import {
  Box,
  Image,
  Badge,
  Text,
  Flex,
  Stack,
  Avatar,
  VStack,
  HStack,
  Heading,
  IconButton,
  Button,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
} from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { useTrendingPostsQuery } from "../../generated/graphql";
import moment from 'moment';
import PostInteraction from "../PostInteraction";
import NextLink from "next/link";

interface FakePostProps {}

const FakePost: React.FC<FakePostProps> = () => {
  const [{data}] = useTrendingPostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
    },
  })
  

  const postVote = Math.floor(Math.random()*(200) + 1 );
  const comments = Math.floor(Math.random()* 30 + 1);
  return (
    <>    {!data ? (
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
                              justify="start"
                              px={3}
                            >
                              <Flex px={2} pt={2}>
                                <Avatar
                                  size="md"
                                  src={p.group.logoImgUrl}
                                  mr={-1}
                                />
                                <Stack ml={2}>
                                  <Flex justify='start'>
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
                                          <NextLink href={{ pathname: '/z/[university]/[name]', query: { university:"CU", name: p.group.name } }} passHref>
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
                                  </Flex>

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
                                postId={p.id}
                                comments={comments}
                              />
                            </Box>
                          </Stack>
                        </Box>
                      </VStack>
      ))
    )}
    </>
  );
};

export default FakePost;

