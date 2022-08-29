import {
  Box,
  Button,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
  IconButton,
  Avatar,
  VStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  SkeletonCircle,
  SkeletonText,
  LinkBox,
  LinkOverlay,
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
import PostInteraction from "../components/post/PostInteraction";
import RightCard from "../components/RightCard";
import { useTrendingPostsQuery, useMeQuery } from "../generated/graphql";

interface ExploreProps {}

const Explore: React.FC<ExploreProps> = () => {
  const [{data, fetching}] = useTrendingPostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
    },
  })

  const [{data: me, fetching: fetchMe}] = useMeQuery();

  const postVote = Math.floor(Math.random()*(200) + 1 );
  const comments = Math.floor(Math.random()* 30 + 1);
  let logged = null;
  if (!me?.me?.user) {
    logged = (
      <Layout>
      <Flex justify='center'>

       <Flex direction="column" >

       <Flex direction="column" mt={7} >
             <Flex direction="row" justify={'center'} >
               <Box
                 maxW={{ base: 40, md: 64, lg: 40}}
                 maxH={40}
                 borderWidth="1px"
                 borderRadius="10px"
                 bg="white"
                 overflow="hidden"
                 mr={3}
               >
                 <Box
                   overflow="hidden"
                   objectFit="cover"
                   borderRadius="10px 10px 0 0"
                   bg="gray.800"
                   maxH="100px"
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

               <Box
                 maxW={{ base: 40, md: 64, lg: 40}}
                 maxH={40}
                 borderWidth="1px"
                 borderRadius="10px"
                 mr={3}
                 bg="white"
                 overflow="hidden"
               >
                 <Box
                   overflow="hidden"
                   objectFit="cover"
                   borderRadius="10px 10px 0 0"
                   bg="gray.800"
                   maxH="100px"
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
                 maxW={{ base: 64, lg: 40}}
                 maxH={40}
                 borderWidth="1px"
                 borderRadius="10px"
                 mr={3}
                 bg="white"
                 overflow="hidden"
                 display={{ base: "none", md: 'block' }} 
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
                 mr={3}
                 bg="white"
                 overflow="hidden"
                 display={{ base: "none", md: "none", lg: 'block' }} 

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
             </Flex>
       </Flex>

        <Box w={{ lg: "680px"}} minW={{ base: "full", lg: "650px" }} mb ={3} display={!me?.me?.user ? 'flex' : 'none'} px={4} mt={5}>
          <CreatePost pageProps={undefined} />
        </Box>
        <Tabs isFitted variant="unstyled" alignSelf='center' minW={{ base: "full", lg: "600px" }} w={{ lg: "680px" }} mt={2} px={4}> 
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
                    <VStack
                    spacing={{ base: 0, md: 5 }}
                    key={p.id}
                  >                      
                    <LinkBox
                      as="article"
                      borderWidth="2px"
                      borderRadius="lg"
                      bg="white"
                      _hover={{ borderColor: "gray.400" }}
                      pb={2}
                      w={{ base: 'full', lg: "650px" }}
                      minH={40}
                      mb={{ base: 2 }}
                      
                    >
                      <Stack spacing={10}>
                      <Flex
                          direction="row"
                          justify="space-between"
                          px={3}
                          zIndex={2}
                          
                        >
                          <Flex px={{ base: 0, md: 2 }} pt={2} >
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
                                                university: "CovenantUniversity",
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
                              <Flex >
                                <Flex justify='start' align={{ lg: 'center'}} mt={-4} direction={{ base: 'column', lg: 'row' }}>
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
      
                                  <Flex ml={{ base: 4, lg: -2}} mt={{ base: -3, lg: 0 }} align='center'>
                                    <Text fontSize={9} mr={2}>
                                      {moment(p.createdAt).fromNow()}
                                    </Text>
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
                                      Edited{" "}
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
                          <Flex direction="row" justify="flex-end" >
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
                                      university: "CovenantUniversity",
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


                        <NextLink
                          href={{
                            pathname: "/z/[university]/[name]/post/[id]",
                            query: {
                              university: "CovenantUniversity",
                              name: p.group.name,
                              id: p.id,
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
                              {p.title}
                            </Heading>
                            <Box mt={4}>
                              <Text fontSize={16} fontWeight={300} noOfLines={2} mb="-30px">
                                {p.bodySnippet}...
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
                            comments={comments}
                            postID={p.id}
                          />   
                        </Box>

                      </Stack>
                    </LinkBox>
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
       <Box display={{ base: "none", lg: "block" }} mt={{ lg: 3 }} ml={5}>
         <RightCard />
       </Box>
     </Flex>
   </Layout>
    );
  } else {
    logged = (
      <Layout>
       <Flex justify='center'>

        <Flex direction="column" >

        <Flex direction="column" mt={3} >
              <Flex direction="row" justify={'center'} >
                <Box
                  maxW={{ base: 64, lg: 40}}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  bg="white"
                  overflow="hidden"
                  mr={3}
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                    maxH="100px"
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

                <Box
                  maxW={{ base: 64, lg: 40}}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  mr={3}
                  bg="white"
                  overflow="hidden"
                  display={{ base: "none", md: "block" }} 
                >
                  <Box
                    overflow="hidden"
                    objectFit="cover"
                    borderRadius="10px 10px 0 0"
                    bg="gray.800"
                    maxH="100px"
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
                  maxW={{ lg: 40}}
                  maxH={40}
                  borderWidth="1px"
                  borderRadius="10px"
                  mr={3}
                  bg="white"
                  overflow="hidden"
                  display={{ base: "none", md: "none", lg: 'block' }} 
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
                  mr={3}
                  bg="white"
                  overflow="hidden"
                  display={{ base: "none", md: "none", lg: 'block' }} 

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
              </Flex>
        </Flex>

         <Tabs isFitted variant="unstyled" alignSelf='center' w={{ base: "370px", md: "768px", lg: "650px" }} mt={10}> 
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
                              postID={p.id}
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
  }
  return logged;
};

export default Explore;
