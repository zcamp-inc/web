import { Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import Layout from "../components/Layout";
import FakePost from "./post/fakepost";
import RightCard from "../components/RightCard";
import LeftBar from "../components/LeftBar";

const Home = () => {
  return (
    <Box ml={{ base: 0, md: '20px' }}>
      <SimpleGrid columns={{ base: 1, md: 2}} spacing= {80}>
        <Flex ml={{ base: 0, md: 20 }}>
        <FakePost />
        </Flex>
        <Flex display={{ base: "none", md: "block" }}>
          <RightCard />
        </Flex>
      </SimpleGrid>
    </Box>
  );
};

export default Home;
