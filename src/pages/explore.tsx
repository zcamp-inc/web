import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
  IconButton,
  Avatar,
  VStack,
} from "@chakra-ui/react";
import moment from "moment";
import NextLink from "next/link";
import router from "next/router";
import { BsThreeDots } from "react-icons/bs";
import {
  IoHeartCircleOutline,
  IoFlame,
  IoNotificationsCircleOutline,
  IoInformationCircleOutline,
} from "react-icons/io5";
import { fakedata } from "../../data";
import { Layout } from "../components/Layout";
import CreatePost from "../components/post/CreatePost";
import FakePost from "../components/post/fakepost";
import PostInteraction from "../components/PostInteraction";
import RightCard from "../components/RightCard";
import { MeQuery } from "./index";
import { useTrendingPostsQuery } from "../generated/graphql";

interface ExploreProps {}

const Explore: React.FC<ExploreProps> = () => {
  const [{data}] = useTrendingPostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
    },
  })

  const postVote = Math.floor(Math.random()*(200) + 1 );
  const comments = Math.floor(Math.random()* 30 + 1);

  const me = MeQuery();
  let logged = null;
  if (!me?.me?.user) {
    logged = (
      <Layout>
       
       <Flex justify='center'>

          
          <Flex direction="column" ml={{ base: -10, md: -20, lg: -60 }}>
            <Flex position="absolute" direction="column" top="20" ml={-10} >
              <Flex direction="row" display={{ base: 'none', md: 'flex'}}>
                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={7}
                  mr={3}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://www.science.org/do/10.1126/science.aav7395/abs/MIT_16x9_0.jpg"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="full"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>M.I.T</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={5}
                  mr={3}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://covenantuniversity.edu.ng/images/2021/02/08/whatsapp-image-2020-06-19-at-11.53.07-am.jpeg"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="full"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>Covenant University</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={5}
                  mr={3}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://www.propertypro.ng/blog/wp-content/uploads/2018/04/babcock-university-600x405.jpg"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="90px"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>Babcock University</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={5}
                  mr={3}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/11/1500x500.jpg?resize=1140%2C500&ssl=1"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="90px"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>University of Ibadan</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={5}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Redeemer%27s_University.jpg"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="90px"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>Redeemers University</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Flex>

            <Box mb={10} mt={40} alignSelf="center" w={{ base: "full", md: "xl" }}>
          <CreatePost pageProps={undefined} />
        </Box>

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

                <Tab _selected={{ color: "#8225CE" }}>
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
                      icon={<IoFlame />}
                      borderRadius="md"
                      fontSize={{ base: 24, md: 26 }}
                      // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                      _hover={{ color: "none", bg: "none" }}
                      aria-label="Home"
                      variant="ghost"
                    />
                    <Text ml="1" pr={2}>
                      Hot Trends
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
                      icon={<IoNotificationsCircleOutline />}
                      borderRadius="md"
                      fontSize={{ base: 24, md: 26 }}
                      // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                      _hover={{ color: "none", bg: "none" }}
                      aria-label="Home"
                      variant="ghost"
                    />
                    <Text ml="1" pr={2}>
                      Events
                    </Text>
                  </Flex>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Flex justify="center">
                    <Heading fontSize={30} alignContent="center">
                      No Posts for now
                    </Heading>
                  </Flex>
                  {fakedata.map((postData, i) => (
                    <FakePost key={i} />
                  ))}
                </TabPanel>
                <TabPanel>
                  <Flex justify="center">
                    <Heading fontSize={30} alignContent="center">
                      No Hot Trends for now
                    </Heading>
                  </Flex>
                  {fakedata.map((postData, i) => (
                    <FakePost key={i} />
                  ))}
                </TabPanel>
                <TabPanel>
                  <Flex justify="center">
                    <Heading fontSize={30} alignContent="center">
                      No Events for now
                    </Heading>
                  </Flex>
                    <FakePost />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Flex>
          <Box display={{ base: "none", md: "block" }} mt={40}>
            <RightCard />
          </Box>
        </Flex>
      </Layout>
    );
  } else {
    logged = (
      <Layout>
       <Flex justify='center'>

        <Flex direction="column">
        <Flex position="absolute" direction="column" top="20" >
              <Flex direction="row" display={{ base: 'none', md: 'flex'}}>
                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={7}
                  mr={3}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://www.science.org/do/10.1126/science.aav7395/abs/MIT_16x9_0.jpg"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="full"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>M.I.T</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={5}
                  mr={3}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://covenantuniversity.edu.ng/images/2021/02/08/whatsapp-image-2020-06-19-at-11.53.07-am.jpeg"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="full"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>Covenant University</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={5}
                  mr={3}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://www.propertypro.ng/blog/wp-content/uploads/2018/04/babcock-university-600x405.jpg"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="90px"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>Babcock University</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>

                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={5}
                  mr={3}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://i0.wp.com/media.premiumtimesng.com/wp-content/files/2020/11/1500x500.jpg?resize=1140%2C500&ssl=1"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="90px"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>University of Ibadan</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>
                <Box
                  maxW={40}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  ml={5}
                  bg="white"
                  overflow="hidden"
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                  >
                    <Image
                      src="https://upload.wikimedia.org/wikipedia/commons/a/a2/Redeemer%27s_University.jpg"
                      alt="logo_img"
                      borderRadius="10px 10px 0 0"
                      top="0"
                      h="90px"
                      w="full"
                      opacity={0.6}
                    />
                  </Box>

                  <Box p={2}>
                    <Box
                      fontWeight="bold"
                      as="h4"
                      lineHeight="tight"
                      noOfLines={1}
                      mt={-2}
                    >
                      <Text fontSize={14}>Redeemers University</Text>
                    </Box>

                    <Box fontWeight="regular" lineHeight="tight" noOfLines={2}>
                      <Text fontSize={12}>
                        The Description of the university goes here, so I made
                        this long for no reason
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Flex>
            </Flex>

         <Tabs isFitted variant="unstyled" alignSelf='center' w={{ base: "370px", md: "768px", lg: "650px" }} mt={{ md: 44 }}> 
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
                            <Heading as="h4" fontSize={24} fontWeight={500} mt={-5} noOfLines={2}>
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
                <Heading>No Important Posts for now</Heading>
              </TabPanel>
              <TabPanel>
                <Heading>No Events for now</Heading>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
        <Box display={{ base: "none", lg: "block" }} mt={{ md: 44}} ml={5}>
          <RightCard />
        </Box>
      </Flex>
    </Layout>
    );
  }
  return logged;
};

export default Explore;
