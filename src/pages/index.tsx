import {
  Image,
  Text,
  Flex,
  Box,
  Heading,
  Icon,
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
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverTrigger,
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
  useToast,
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
} from "../generated/graphql";
import {
  IoHeartCircleOutline,
  IoRocketOutline,
  IoRibbonOutline,
} from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import PostInteraction from "../components/post/PostInteraction";
import moment from "moment";
import { useState } from "react";
import { useRouter } from "next/router";
import BarLoader from "react-spinners/BarLoader";
import Posts from "../components/post/Posts";

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
  const toast = useToast();
  const comments = Math.floor(Math.random() * 30 + 1);

  const me = MeQuery();
  let reme = null;
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
  }
   else if (!me.data?.me?.user) {
    reme = (
       <Explore />
    );
  }
  else{
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
              minW={{ lg: "600px" }}
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
                    <Icon
                      as={IoHeartCircleOutline}
                      fontSize={{ base: 24, md: 26 }}
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
                    <Icon
                      as={IoRibbonOutline}
                      fontSize={{ base: 24, md: 26 }}
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
                    <Icon
                      as={IoRocketOutline}
                      fontSize={{ base: 24, md: 26 }}
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
                      <Posts p={p} key={p.id} />
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
                     <Posts p={p} key={p.id} />
                    ))
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
                    data?.homePosts?.posts?.map((p) => (
                     <Posts p={p} key={p.id} />
                    ))
                  )}
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
          <Box display={{ base: "none", lg: "block" }} ml={5}>
            <RightCard />
          </Box>
        </Flex>
      </Layout>
    );
  }
  return (
      reme
  );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index);

export const MeQuery = () => {
  const [{ data, fetching }] = useMeQuery();
  return { data, fetching };
};
