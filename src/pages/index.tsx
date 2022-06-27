import { SimpleGrid, Flex, Box } from "@chakra-ui/react";
import { data } from "../../data";
import { Layout } from "../components/Layout";
import { CreatePost } from "../components/post/CreatePost";
import FakePost from "../components/post/fakepost";
import RightCard from "../components/RightCard";
import { createUrqlClient } from "../utils/createUrqlClient";
import { withUrqlClient } from "next-urql";

const Index = () => {
  return (
    <Layout>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ md: 10 }} ml={10}>
        <Flex direction="column" ml={{ base: -10, md: -20 }}>
          <Box mb={5} alignSelf='center'  w={{ base: "full", md: "xl" }}>
            <CreatePost />
          </Box>
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


export default withUrqlClient(createUrqlClient, { ssr: true }) (Index);
