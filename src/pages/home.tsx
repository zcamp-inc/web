import { Box, Heading } from "@chakra-ui/react";
import Layout from "../components/Layout";
import FakePost from "./post/fakepost";


const Home = () => {
  return (

        <Box ml={{ base: 0, md: 40 }}  >
         <Heading>This is Home gg</Heading> 
         <FakePost />
         </Box>

 
  )
};

export default Home;
