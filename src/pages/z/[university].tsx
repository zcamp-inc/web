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
    Image,
  } from "@chakra-ui/react";
  import {
    IoGridOutline,
    IoChatbubbleEllipsesOutline,
    IoBookmarksOutline,
    IoCaretUpCircleOutline,
  } from "react-icons/io5";
  import { Layout } from "../../components/Layout";
  import UserCard from "../../components/user/UserCard";
  import FakePost from "../../components/post/fakepost";
  import { useGetGroupFromUrl } from "../../utils/getGroupFromUrl";
  import { fakedata } from "../../../data";
  import CreateGPost from "../../components/group/CreateGPost";
  
  const UniProfile = () => {
    const [{ data, error }] = useGetGroupFromUrl();
  
    return (
      <Layout>
        <Flex direction="column" justify='space-between' align="center" w='full'>
          <Box
            w="full"
            h="200px"
            mt={-5}
            bg="tan"
            overflow='hidden'
          >
            <Image src={data?.group?.group?.bannerImgUrl} alt='group_banner' w='full' mt={-20}/>
          </Box>
  
          <Flex justify="center" direction='column' >
          <Flex direction="row" justify="flex-start" align="center" mt={-14}>
            <Avatar
              src={data?.group?.group?.logoImgUrl}
              w="170px"
              h="170px"
              mr={14}
              // background={
              //   "linear-gradient(#fff, #fff) padding-box, linear-gradient(to right, #5E00AB, #57FFF5) border-box"
              // }
              borderWidth="10px"
              borderColor='gray.200'
  
            />
            <Flex direction="column" justify="space-between">
              <Flex direction="row" justify="space-between" align="center" mt={6}>
                <Heading fontSize={{ base: 14, md: 28 }} fontWeight={400} mr={2}>
                  {data?.group?.group?.name}
                </Heading>
                <Flex direction="row" justify="end">
                  <Button size="sm" colorScheme="blue" fontWeight={400}>
                    Join Chat
                  </Button>
                </Flex>
              </Flex>
  
              <Flex direction="column">
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
                {/* <Box mt={5}>
                  <Text>{data?.group?.group?.description}</Text>
                </Box> */}
              </Flex>
            </Flex>
          </Flex>
          <Flex direction='row' justify='center'>
            <Flex direction="column" mt={20}>
              <Box
                mb={5}
                alignSelf="center"
                w={{ base: "370px", md: "768px", lg: "600px" }}
              >
                <CreateGPost pageProps={undefined} />
              </Box>
              <Tabs
                isFitted
                variant="unstyled"
                alignSelf="center"
                w={{ base: "370px", md: "768px", lg: "600px" }}
              >
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
                      mr={{ base: -2, md: 1 }}
                      ml={{ base: -5 }}
                      px={1}
                    >
                      <IconButton
                        icon={<IoGridOutline />}
                        borderRadius="md"
                        fontSize={{ base: 20, md: 22 }}
                        // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                        _hover={{ color: "none", bg: "none" }}
                        aria-label="Home"
                        variant="ghost"
                      />
                      <Text
                        ml="1"
                        pr={{ base: 0, md: 1 }}
                        fontSize={{ base: 16, md: 18 }}
                      >
                        Posts
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
                      mr={{ base: -2, md: 2 }}
                    >
                      <IconButton
                        icon={<IoChatbubbleEllipsesOutline />}
                        borderRadius="md"
                        fontSize={{ base: 20, md: 22 }}
                        // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                        _hover={{ color: "none", bg: "none" }}
                        aria-label="Home"
                        variant="ghost"
                      />
                      <Text ml="1" pr={1} fontSize={{ base: 16, md: 18 }}>
                        Comments
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
                      mr={{ base: -2, md: 2 }}
                    >
                      <IconButton
                        icon={<IoBookmarksOutline />}
                        borderRadius="md"
                        fontSize={{ base: 20, md: 22 }}
                        // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                        _hover={{ color: "none", bg: "none" }}
                        aria-label="Home"
                        variant="ghost"
                      />
                      <Text ml="1" pr={1} fontSize={{ base: 16, md: 18 }}>
                        Saved
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
                      mr={{ base: -2, md: 2 }}
                    >
                      <IconButton
                        icon={<IoCaretUpCircleOutline />}
                        borderRadius="md"
                        fontSize={{ base: 20, md: 22 }}
                        // _groupHover={{ color: "#5E00AB", bg: "#DDB2FF" }}
                        _hover={{ color: "none", bg: "none" }}
                        aria-label="Home"
                        variant="ghost"
                      />
                      <Text ml="1" pr={1} fontSize={{ base: 16, md: 18 }}>
                        Upvoted
                      </Text>
                    </Flex>
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    {fakedata.map((postData, i) => (
                      <FakePost key={i} />
                    ))}
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
            <Box display={{ base: "none", md: "block" }} ml={5} mt={{ lg: -24}}>
              <UserCard />
            </Box>
           </Flex> 
          </Flex>
        </Flex>
      </Layout>
    );
  };
  
  export default UniProfile;
  