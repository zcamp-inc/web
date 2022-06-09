import { Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { Layout } from "./Layout";
import FakePost from "./post/fakepost";
import RightCard from "./RightCard";
import LeftBar from "./LeftCard";
import { Wrapper } from "./Wrapper";
import { data } from "../../data";
import { CreatePost } from "./post/CreatePost";

const Home = () => {
  return (
    <Layout>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} ml={10}>
        <Flex direction="column" ml={{ base: -10, md: -20 }}>
          <Flex mb={5} justify='center'>
            <CreatePost />
          </Flex>
          {data.map((postData, i) => (
            <FakePost postData={postData} key={i} />
          ))}
        </Flex>
        <Box display={{ base: "none", md: "block" }}>
          <RightCard />
        </Box>
      </SimpleGrid>
    </Layout>
  );
};

export default Home;
