import { Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import { Layout } from "./Layout";
import FakePost from "./post/fakepost";
import RightCard from "./RightCard";
import LeftBar from "./LeftCard";
import { Wrapper } from "./Wrapper";

const Home = () => {
  return (
    <Layout>
      <Box>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={20} >
          {/* <Box display={{ base: "none", md: "block" }}>
            <LeftBar />
          </Box> */}
          <Flex justify="center">
            <FakePost />
          </Flex>
          <Box display={{ base: "none", md: "block" }} >
            <RightCard />
          </Box>
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Home;
