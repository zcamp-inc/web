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
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import CreatePost from "../components/post/CreatePost";
import Explore from "./explore";
import FakePost from "../components/post/fakepost";
import RightCard from "../components/RightCard";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";
import {
  useMeQuery,
  useHomePostsQuery,
} from "../generated/graphql";
import { UseQueryArgs } from "urql";
import router from "next/router";
import {
  IoHeartCircleOutline,
  IoRocketOutline,
  IoRibbonOutline,
} from "react-icons/io5";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [{ data }] = useHomePostsQuery({
    variables: {
      limit: 15,
      cursor: 0,
    },
  });

  const me = meQuery()
  let reme = null;
  if(!me?.me?.user){
    reme = (
      <Explore />
    )
  } else {
    reme = (
      <>
      <Layout>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} ml={10}>
          <Flex direction="column" ml={{ base: -10, md: -20 }}>
            {/* <Flex mb={5} justify="center">
          <Heading>Trends: Just for you</Heading>
        </Flex> */}
            <Box mb={5} alignSelf="center" w={{ base: "full", md: "xl" }}>
              <CreatePost />
            </Box>
            <Tabs isFitted variant="unstyled">
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
                      <Box key={p.id} bg="tan">
                        {p.title}
                      </Box>
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
          <Box display={{ base: "none", md: "block" }}>
            <RightCard />
          </Box>
        </SimpleGrid>
      </Layout>
    </>
    )
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

export const meQuery = () => {
  const [{ data, fetching }] = useMeQuery();
  return data;
}

